import React from 'react';
import { Link } from 'react-router-dom';

const Core = ({ children }) => {
    return (
        <div>
            <h1>Sample app</h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div>{children}</div>
        </div>
    );
};

export default Core;
