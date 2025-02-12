import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import { validateLoginInput, validateRegisterInput } from "../middleware/validationMiddleware.js";

const router = Router()

import rateLimiter from 'express-rate-limit'

const apiLimiter = rateLimiter({
    windowMs: 15 * 60 * 1000,
    max: 1,
    message: { msg: 'IP rate limit exceeded, retry in 15 minutes' }
})

router.post('/register', apiLimiter, validateRegisterInput, register)
router.post('/login', apiLimiter, validateLoginInput, login)
router.get('/logout', logout)

export default router