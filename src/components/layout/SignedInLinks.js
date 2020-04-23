import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';
import CreateProjects from '../projects/CreateProjects';

const SignedInLinks = props => {
  return (
    <>
      <li><a href="#project-create-modal" data-uk-toggle="">New</a><CreateProjects /></li>
      <li><NavLink to="/notifications">Notifications</NavLink></li>
      <li><a href="#!" onClick={props.logOut}>log out</a></li>
      <li>
        <NavLink to={`/profile/${props.auth.uid}`} >
          <div className="profile-icon uk-padding-small uk-border-circle" style={ {backgroundImage: `url(${props.profile.thumb})`} } ></div>
        </NavLink>  
      </li>
    </>
  );
}

const matchDispatchToProps = dispatch => {
  return {
    logOut: _ => {
      dispatch(logOut());
    }
  };
};

export default connect(null, matchDispatchToProps)(SignedInLinks);