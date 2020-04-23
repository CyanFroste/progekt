import React from 'react';

const OtherProfile = ({ user }) => {

  return (
    <div className="uk-flex uk-flex-column uk-flex-middle">
      <img alt="progekt" src={user.thumb} height="300" width="300" />
      <div className="uk-text-center uk-margin">          
        <h2> {user.firstname} {user.lastname} </h2>
        <p> work in progress :) </p>
      </div>    
    </div>
  );
}

export default OtherProfile;
