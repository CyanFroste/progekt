import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import Notifications from './Notifications';
import { Redirect } from 'react-router-dom';


const NotificationList = ({ notifications, auth }) => {

  if (!auth.uid) return <Redirect to='/login' />;

  return (
    <div className="uk-container uk-container-small uk-padding">
      <h2 className="uk-text-center uk-margin-remove-bottom">Notifications</h2>
      <Notifications notifications={notifications} full={true} />
    </div>
  );
};


const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    notifications: state.firestore.ordered.notifications
  }
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', orderBy: ['time', 'desc'] }
  ])
)(NotificationList);