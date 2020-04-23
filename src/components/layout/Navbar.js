import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = ({ auth, profile, notifications }) => {

  const links = auth.uid ? <SignedInLinks profile={profile} notifications={notifications} auth={auth} /> : <SignedOutLinks />;

  return (
    <div className="navbar" data-uk-sticky="sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky" >
      <nav className="uk-navbar-container uk-navbar-transparent uk-background-secondary uk-light" data-uk-navbar>
        <div className="uk-navbar-left uk-margin-left">
          <Link className="uk-navbar-item uk-logo" to="/">PROGEKT</Link>
        </div>
        <div className="uk-navbar-right uk-margin-right">
          <ul className="uk-navbar-nav">
            {links}
          </ul>
        </div>
      </nav>
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

export default connect(mapStateToProps)(Navbar);