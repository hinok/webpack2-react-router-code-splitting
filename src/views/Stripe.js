import React, { Component } from 'react';
import importScript from './../lib/importScript';

importScript('https://js.stripe.com/v2/', 'Stripe')
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
                <h1>Stripe</h1>
                <p>This view is rendered even if Stripe <strong>is NOT downloaded.</strong></p>
            </div>
        );
    }
}

export default Stripe;
