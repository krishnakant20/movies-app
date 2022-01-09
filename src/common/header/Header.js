import React, { Component } from 'react'
import './Header.css'
import ReactLogo from '../../assets/logo.svg'
import { Button } from '@mui/material';

export class Header extends Component {
    render() {
        return (
            <div className='headerCss'>
                <div>
                    <img src={ReactLogo} alt="React Logo" />
                </div>
                <div>
                    <Button variant="contained">Login</Button>
                </div>
            </div>
        )
    }
}

export default Header
