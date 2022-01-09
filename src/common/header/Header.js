import React, { Component } from 'react'
import './Header.css'
import ReactLogo from '../../assets/logo.svg'

export class Header extends Component {
    render() {
        return (
            <div className='headerCss'>
                <img src={ReactLogo} alt="React Logo" />
            </div>
        )
    }
}

export default Header
