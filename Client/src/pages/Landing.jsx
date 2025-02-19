import React from 'react'
import styled from 'styled-components'
import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'
import { Link } from 'react-router-dom'
import { Logo } from '../components'

function Landing() {
    return (
        <Wrapper>
            <nav>
                <Logo />
            </nav>
            <div className="container page">
                <div className="info">
                    <h1>job <span>apply</span> System</h1>
                    <p>A Job Apply System is a comprehensive web application that streamlines the process of applying for jobs,
                        both for job seekers and employers. It includes multiple components and functionalities that make it easier for both
                        sides to interact and manage job applications efficiently. </p>
                    <Link to='/register' className='btn register-link'>Register</Link>
                    <Link to='/login' className='btn '>Login/Demo User</Link>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing