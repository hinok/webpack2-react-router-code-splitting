import React from 'react';
import moment from 'moment';

const About = () => {
    return (
        <div>
            <h1>About view</h1>
            <p>{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default About;
