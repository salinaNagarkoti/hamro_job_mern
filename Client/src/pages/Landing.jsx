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
                    <h1>job <span>tracking</span> app</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptas alias obcaecati, ipsum facilis quod,
                        non dignissimos beatae sequi aliquam ullam placeat. Possimus
                        consequuntur soluta, debitis eaque perferendis laborum id.</p>
                    <Link to='/register' className='btn register-link'>Register</Link>
                    <Link to='/login' className='btn '>Login/Demo User</Link>
                </div>
                <img src={main} alt="job hunt" className='img main-img' />
            </div>
        </Wrapper>
    )
}

export default Landing