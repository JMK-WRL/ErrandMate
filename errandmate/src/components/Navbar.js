// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';

function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
        setIsActive(!isActive);
    };

    return (
        <AppBar position="fixed" className="navbar" color='#fff'>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Button color="inherit" component={Link} to="/">ErrandMate</Button>
                </Typography>
                <div className={`navbar-links ${isActive ? 'active' : ''}`}>
                    <Button color="inherit" component={Link} to="/">Home</Button>
                    <Button color="inherit" component={Link} to="/signup">Signup</Button>
                    <Button color="inherit" component={Link} to="/profile">Profile</Button>

                    <Button color="inherit" component={Link} to="/post-errand">Post Errand</Button>
                </div>
                <IconButton edge="start" className="navbar-toggle" color="inherit" aria-label="menu" onClick={toggleNavbar}>
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
