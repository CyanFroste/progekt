import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/authActions';
import CreateProjects from '../projects/CreateProjects';
import UIkit from 'uikit'; // import UIkit to enable uikit's js functions

const SignedInLinksMobile = props => {
  const handleClick = e => {
    UIkit.offcanvas('#offcanvas-nav-primary').hide();
  }

  return (
    <>
      <li><button className="uk-offcanvas-close" type="button" data-uk-close></button></li>
      <li>
        <NavLink to={`/profile/${props.auth.uid}`} onClick={handleClick} >
          <div className="profile-icon uk-padding-small uk-border-circle" style={ {backgroundImage: `url(${props.profile.thumb})`} } ></div>
        </NavLink>
      </li>
      <li><a href="#project-create-modal" data-uk-toggle="" >New</a><CreateProjects /></li>
      <li><NavLink to="/notifications" onClick={handleClick} >Notifications</NavLink></li>
      <li><a href="#!" onClick={props.logOut}>log out</a></li>
    </>
  );
}

const matchDispatchToProps = dispatch => {
  return {
    logOut: _ => {
      dispatch(logOut());
      UIkit.offcanvas('#offcanvas-nav-primary').hide();
    }
  };
};

export default connect(null, matchDispatchToProps)(SignedInLinksMobile);