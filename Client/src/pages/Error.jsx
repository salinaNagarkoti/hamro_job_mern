import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg'

function Error() {
    const error = useRouteError()


    if (error.status === 404) {
        return <Wrapper>
            <div>
                <img src={img} alt="not found" />
                <h3>Page not found</h3>
                <p>We can't seem to find the page that you are looking for</p>
                <Link to='/dashboard'>Back Home</Link>
            </div>
        </Wrapper>
    }

    return (
        <Wrapper>
            <div>Something went wrong</div>
        </Wrapper>
    )
}

export default Error