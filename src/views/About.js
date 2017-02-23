import React from 'react';
import moment from 'moment';

import('https://js.stripe.com/v2/').then((Stripe) => {
    console.log('Stripe loaded', Stripe);
});

const Home = () => {
    return (
        <div>
            About view<br />
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    );
};

export default Home;
