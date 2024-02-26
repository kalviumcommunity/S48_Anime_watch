import React from 'react';
import {Routes, Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import './LandingPage.css';
import SignUp from './Signup';

function AnimeWebsite() {
    return (
        <div className="container">
            <div className="header">
                <h1 className="title">From Laughter to Tears: List of ANIME to watch</h1>
                <div className="top-bar">
                    <Link to="/" className="login-signup-btn">Login</Link>
                    <Link to="/Signup" className="login-signup-btn">Signup</Link>
                </div>
            </div>
            <div className="content">
                <div className="description">
                    <p>The word anime is a shortened form of the Japanese word animēshon, which means animation. While anime has its roots in Japan, it has since spread to other countries, and today, anime can be found in many different languages, including English.</p>
                </div>
            </div>
            <Routes>
                <Route path='/Signup' element={<SignUp />}/>
            </Routes>
        </div>
    );
}


export default AnimeWebsite;
