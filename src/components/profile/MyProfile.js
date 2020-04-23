import React from 'react';
import ProfileImageEdit from '../profile/ProfileImageEdit';
import { Redirect } from 'react-router-dom';

const MyProfile = ({ auth, user }) => {

  if (!auth.uid) return <Redirect to='/login' />;

  return (    
    <div className="uk-flex uk-flex-column uk-flex-middle">
      <img src={user.thumb} height="300" width="300" alt="progekt" />  
      <a  href="#profileimage-edit-modal" data-uk-toggle="" className="uk-margin" data-uk-icon="pencil"> </a>  
      <ProfileImageEdit user={user} />
      <div className="uk-text-center">          
        <h2> {user.firstname} {user.lastname} </h2>
        <p> {auth.email} </p>
      </div>    
    </div>  
  );
}

export default MyProfile;
