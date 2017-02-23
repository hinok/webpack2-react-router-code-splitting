import React, { Component } from 'react';
import LazilyLoad from './../lib/LazilyLoad';
import importScripts from './../lib/importScripts';

const StripeBlocked = ({ MyStripe }) => {
    console.log('Got Stripe as MyStripe from props');

    return (
        <div>
            <h1>Stripe blocked view</h1>
            <pre style={{ width: '500px', border: '2px solid #000' }}>
                {MyStripe.toString().substr(0, 200)}
            </pre>
        </div>
    );
};

const StripeBlocking = () => {
    const modules = {
        MyStripe: () => new Promise((resolve) => {
            importScripts('https://js.stripe.com/v2/', 'Stripe').then((Stripe) => {
                setTimeout(() => {
                    resolve(Stripe)
                }, 3000);
            });
        }),
    };

    return (
        <LazilyLoad modules={modules}>
            {StripeBlocked}
        </LazilyLoad>
    );
};

export default StripeBlocking;
