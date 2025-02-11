import { UnauthenticatedError, UnauthorizedError, BadRequestError } from "../errors/customErrors.js"
import { verifyJWT } from "../utils/tokenUtils.js"

export const authenticateUser = (req, res, next) => {
    const { token } = req.cookies
    console.log("token", token);

    if (!token) throw new UnauthenticatedError('authentiation invalid')

    try {
        const { userId, role } = verifyJWT(token)
        const testUser = userId == '67a469a5c009a22e6dbb7c7e'
        req.user = { userId, role, testUser }
        next()
    } catch (error) {
        throw new UnauthenticatedError('authentiation invalid')
    }
}


export const authorizePermissions = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            throw new UnauthorizedError('Unauthorized to access this route');
        }
        next();
    };
};

export const checkForTestUser = (req, res, next) => {
    if (req.user.testUser) throw new BadRequestError('Demo User. Read Only')
    next()

}