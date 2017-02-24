import React, { Component } from 'react';
import LazilyLoad from './../lib/LazilyLoad';
import importScript from './../lib/importScript';

const sleep = delay => new Promise((resolve) => {
    setTimeout(resolve, delay);
});

const StripeLazily = ({ MyNamedStripe }) => {
    return (
        <div>
            <h1>Stripe Prevent Render</h1>
            <p>This view is rendered when Stripe is downloaded.</p>
            <pre style={{ width: '500px', border: '2px solid #000' }}>
                {MyNamedStripe.toString().substr(0, 200)}
            </pre>
        </div>
    );
};

const Stripe = () => {
    const modules = {
        MyNamedStripe: () => (
            sleep(3000).then(() => importScript('https://js.stripe.com/v2/', 'Stripe'))
        ),
    };

    return (
        <LazilyLoad modules={modules}>
            {StripeLazily}
        </LazilyLoad>
    );
};

export default Stripe;
