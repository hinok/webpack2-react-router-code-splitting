import React from 'react';
import { Link } from 'react-router-dom';

const Core = ({ children }) => {
    return (
        <div>
            <h1>Sample app</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/stripe">Stripe</Link></li>
                <li><Link to="/stripe-lazily">Stripe (lazily)</Link></li>
                <li><Link to="/sourcemaps-dont-work">SourceMaps don't work</Link></li>
            </ul>
            <div>{children}</div>
        </div>
    );
};

export default Core;
