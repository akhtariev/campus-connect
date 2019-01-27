import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes';
import './index.css';


const Navigation = () =>  (
    <div>
      <AuthUserContext.Consumer>
        {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
      </AuthUserContext.Consumer>
    </div>
  );


const NavigationAuth = () => (
  <div className="nav">
  <ul>
    <li className="navli">
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li className="navli">
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li className="navli" id="signoutbutton">
      <SignOutButton />
    </li>
  </ul>
  </div>
);

const NavigationNonAuth = () => {

  return (<br/>);
}



export default Navigation;