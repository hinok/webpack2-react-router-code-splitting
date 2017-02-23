import React, { Component } from 'react';
import importScripts, { amdify } from './../lib/importScripts';

importScripts('https://js.stripe.com/v2/')
    .then(Stripe => {
        console.log('Stripe loaded');
        console.log('Stripe', Stripe);
        console.log('window.Stripe', window.Stripe);
        console.log('Stripe === window.Stripe', Stripe === window.Stripe);
    })
    .catch((err) => {
        console.error(err);
    });

class Stripe extends Component {
    render() {
        return (
            <div>
                Stripe view
            </div>
        );
    }
}

export default Stripe;
