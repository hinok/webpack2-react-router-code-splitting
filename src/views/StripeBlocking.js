import React, { Component } from 'react';
import LazilyLoad from './../lib/LazilyLoad';
import importScripts from './../lib/importScripts';

const StripeBlocked = ({ Stripe }) => {
    console.log('Got Stripe from props');

    return (
        <div>
            <h1>Stripe blocked view</h1>
            <pre style={{ width: '500px', border: '2px solid #000' }}>
                {Stripe.toString().substr(0, 200)}
            </pre>
        </div>
    );
};

const StripeBlocking = () => {
    const modules = {
        Stripe: () => importScripts('https://js.stripe.com/v2/'),
    };

    return (
        <LazilyLoad modules={modules}>
            {StripeBlocked}
        </LazilyLoad>
    );
};

export default StripeBlocking;
