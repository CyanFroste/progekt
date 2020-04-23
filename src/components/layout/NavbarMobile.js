import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinksMobile from './SignedInLinksMobile';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const NavbarMobile = ({ auth, profile, notifications }) => {

  let links = null, toggle = null;
  if (auth.uid) {
    links = <SignedInLinksMobile profile={profile} notifications={notifications} auth={auth} />;
    toggle = <li><button className="uk-navbar-toggle" data-uk-navbar-toggle-icon data-uk-toggle="target: #offcanvas-nav-primary"></button></li>;
  } else {
    toggle = <SignedOutLinks />;
  }

  return (
    <div className="navbar-mobile" data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" >
      <nav className="uk-navbar-container uk-navbar-transparent uk-background-secondary uk-light" data-uk-navbar>
        <div className="uk-navbar-left uk-margin-left">
          <Link className="uk-navbar-item uk-logo" to="/">PROGEKT</Link>
        </div>
        <div className="uk-navbar-right uk-margin-right">
          <ul className="uk-navbar-nav">
            {/* hamburger menu for mobile =>*/} {toggle}
          </ul>
        </div>
      </nav>
      <div id="offcanvas-nav-primary" data-uk-offcanvas="overlay: true">
        <div className="uk-offcanvas-bar uk-flex uk-flex-column">
          <ul className="uk-nav uk-nav-primary uk-margin-auto-horizontal">
            {/* links based on authorization => */} {links}
          </ul>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    notifications: state.firestore.ordered.notifications
  }
};

export default connect(mapStateToProps)(NavbarMobile);