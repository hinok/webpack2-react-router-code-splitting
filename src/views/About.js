import React from 'react';
import moment from 'moment';

const Home = () => {
    return (
        <div>
            About view<br />
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    );
};

export default Home;
