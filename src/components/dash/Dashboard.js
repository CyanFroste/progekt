import React, { Component } from 'react';
import Notifications from './Notifications';
import ProjectList from '../projects/ProjectList';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {    
    const { projects, auth, notifications, profile, users } = this.props;
    if (!auth.uid) return <Redirect to='/login' />;

    return (
      <div className="dashboard" data-uk-grid>
        <div className="project-list uk-width-2-3@l"><ProjectList projects={projects} auth={auth} profile={profile} users={users} /></div>
        <div className="dash-notifications uk-width-1-3">
          <div className="notifications uk-container uk-container-large uk-padding">
            <h3 className="uk-text-center"><Link className="uk-link-heading" to="/notifications">Notifications</Link></h3>
            <Notifications notifications={notifications} full={false} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects,
    profile: state.firebase.profile,
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications,
    users: state.firestore.data.users
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects', orderBy: ['created', 'desc'] },
    { collection: 'notifications', orderBy: ['time', 'desc'] },
    { collection: 'users' }
  ])
)(Dashboard);