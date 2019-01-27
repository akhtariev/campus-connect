import React from 'react';
import { Link } from 'react-router-dom';
import { AuthUserContext } from '../Session';
import SignOutButton from '../SignOut'
import * as ROUTES from '../../constants/routes';


const Navigation = () =>  (
    <div>
      <AuthUserContext.Consumer>
        {authUser => authUser ? <NavigationAuth /> : <NavigationNonAuth />}
      </AuthUserContext.Consumer>
    </div>
  );


const NavigationAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => {

  return (<br/>);
}



export default Navigation;