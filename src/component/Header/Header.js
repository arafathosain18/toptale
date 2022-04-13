import React from 'react';
import { Link } from 'react-router-dom';
import style from './Header.css';

const Header = () => {
    return (
        <div>
            <h1>Welcome to your Doom</h1>
                <nav>
                    <Link to='/home'>Home</Link>
                    <Link to='/review'>Review</Link>
                    <Link to='/dashboard'>Dashboard</Link>
                    <Link to='/blog'>Blog</Link>
                </nav>        
                    
                    </div>
    );
};

export default Header;