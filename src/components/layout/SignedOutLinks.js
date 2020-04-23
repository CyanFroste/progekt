import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = _ => {
  
  return (
    <>
      <li><NavLink to="/signup">Sign Up</NavLink></li>
      <li><NavLink to="/login">log in</NavLink></li>
    </>
  );
}

export default SignedOutLinks;