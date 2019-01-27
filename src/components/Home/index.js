import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { withAuthorization } from '../Session';
import Home from './Home';
import "./index.css"

const HomePage = () => {
    return (
        <Home />
        );
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);