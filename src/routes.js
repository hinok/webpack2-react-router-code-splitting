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
                    console.error(`Cannot load AsyncComponent: ${filePath}`);
                    console.error(err);
                });
        }

        hasLoadedComponent() {
            return this.state.Component !== null;
        }

        render() {
            const { Component } = this.state;
            const { load, ...rest } = this.props;
            return (Component) ? <Component {...rest} /> : null;
        }
    }
);

const ROUTES = [
    {
        name: 'Home',
        path: '/',
        exact: true,
        component: asyncComponent(() => import('./views/Home')),
    },
    {
        name: 'About',
        path: '/about',
        component: asyncComponent(() => import('./views/About')),
    },
];

export default ROUTES;
