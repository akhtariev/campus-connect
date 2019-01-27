import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import { withAuthorization } from '../Session';
import Home from './Home';

const HomePage = () => {
    return (
        <div className="container">
            <BrowserRouter>
                <div>
                    <Route exact path="/" component={Home}/>
                </div>
            </BrowserRouter>
        </div>);
};

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);