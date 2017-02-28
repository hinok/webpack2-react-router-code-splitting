import React, { Component } from 'react';
import Core from './Core';

// Based on https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
const asyncComponent = loadComponent => (
    class AsyncComponent extends Component {
        state = {
            Component: null,
        }

        componentWillMount() {
            if (this.hasLoadedComponent()) {
                return;
            }

            loadComponent()
                .then(module => module.default)
                .then((Component) => {
                    this.setState({ Component });
                })
                .catch((err) => {
                    console.error(`Cannot load component in <AsyncComponent />`);
                    throw err;
                });
        }

        hasLoadedComponent() {
            return this.state.Component !== null;
        }

        render() {
            const { Component } = this.state;
            return (Component) ? <Component {...this.props} /> : null;
        }
    }
);

const ROUTES = [
    {
        path: '/',
        exact: true,
        component: asyncComponent(() => import('./views/Home')),
    },
    {
        path: '/about',
        exact: true,
        component: asyncComponent(() => import('./views/About')),
    },
    {
        path: '/stripe',
        exact: true,
        component: asyncComponent(() => import('./views/Stripe')),
    },
    {
        path: '/stripe-lazily',
        exact: true,
        component: asyncComponent(() => import('./views/StripeLazily')),
    },
    {
        path: '/sourcemaps-dont-work',
        exact: true,
        component: asyncComponent(() => import('./views/SourceMapsDontWork')),
    },
];

export default ROUTES;
