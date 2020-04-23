import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import progektPlaceholder from '../../assets/progektPlaceholder.png';

const ProjectSummary = ({ project, auth, profile, postOwner }) => {
  const postOwnerFilterClass = project.authorid === auth.uid ? 'project-mypost project-all' : 'project-all';
  const postOwnerProfileImage = postOwner ? postOwner.thumb : progektPlaceholder;

  return (
    <div className={postOwnerFilterClass + " uk-card uk-card-default uk-width-1-1 uk-margin-bottom"}>
      <div className="uk-card-header">
        <div className="uk-grid-small uk-flex-middle" data-uk-grid>
          <div className="uk-width-auto">
            <div className="profile-icon uk-padding-small uk-border-circle" style={ {backgroundImage: `url(${ postOwnerProfileImage })`} } ></div>
          </div>
          <div className="uk-width-expand">
            <h3 className="uk-card-title uk-margin-remove-bottom">
              <Link className="uk-link-heading " to={`/profile/${project.authorid}`} >{project.authorfirstname} {project.authorlastname}</Link>
            </h3>
            <p className="uk-text-meta uk-margin-remove-top uk-display-inline-block"><time dateTime={project.created.toDate()}>{moment(project.created.toDate()).fromNow()}</time></p>
          </div>
        </div>
      </div>
      <div className="uk-card-body">
        <Link to={`/project/${project.id}`} className="uk-button uk-button-text uk-text-large "> {project.title} </Link>
      </div>
    </div>
  ); 
};

export default ProjectSummary;