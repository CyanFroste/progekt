import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import MyProfile from './MyProfile';
import OtherProfile from './OtherProfile';
import { Redirect } from 'react-router-dom';
import progektPlaceholder from '../../assets/progektPlaceholder.png';

const Profile = ({ profileId, auth, user }) => {

  if (!auth.uid) return <Redirect to='/login' />;
  if (user) {
    const displayProfile = profileId === auth.uid ? <MyProfile auth={auth} user={user} /> : <OtherProfile user={user} /> ;    
    return (
      <div className="project-list uk-container uk-container-xlarge uk-padding">
        {displayProfile}
      </div>
    );
  } else {
    return (
      <div className="loading-screen" style={ {backgroundImage: `url(${progektPlaceholder})`} } > </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const users = state.firestore.data.users;
  const user = users ? users[id] : null;
  return {
    profileId: id,    
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    user: user
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([   
    { collection: 'users' }
  ])
)(Profile);
