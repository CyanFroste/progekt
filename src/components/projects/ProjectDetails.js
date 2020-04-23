import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import moment from 'moment';
import ProjectDetailsEdit from '../layout/ProjectEdit';
import ProjectDetailsNonEdit from '../layout/ProjectNonEdit';
import progektPlaceholder from '../../assets/progektPlaceholder.png'

const ProjectDetails = ({ projectId, project, auth, users }) => {

  if (project && users) {
    const subnav = project.authorid === auth.uid ? <ProjectDetailsEdit projectId={projectId} project={project} /> : <ProjectDetailsNonEdit />;
    const postOwnerProfileImage = users[project.authorid] ? users[project.authorid].thumb : progektPlaceholder;

    return (
      <div className="project-list uk-container uk-container-xlarge uk-padding">
        <div className="uk-card uk-card-default uk-width-1-1">
          <div className="uk-card-header">
            <div className="uk-grid-small uk-flex-middle" data-uk-grid>
              <div className="uk-width-auto">
                <div className="profile-icon uk-padding-small uk-border-circle" style={{ backgroundImage: `url(${postOwnerProfileImage})` }} ></div>
              </div>
              <div className="uk-width-expand">
                <h3 className="uk-card-title uk-margin-remove-bottom">
                  <Link className="uk-link-heading " to={`/profile/${project.authorid}`} >{project.authorfirstname} {project.authorlastname}</Link>
                </h3>
                <p className="uk-text-meta uk-margin-remove-top uk-display-inline-block"><time dateTime={project.created.toDate()}>{moment(project.created.toDate()).format('LLL')}</time></p>
              </div>
            </div>
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-margin-remove-bottom uk-text-uppercase">{project.title}</h3>
            <p className="project-details-content">{project.content}</p>
          </div>
          <div className="uk-card-footer">
            {subnav}
          </div>
        </div>
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
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    projectId: id,
    project: project,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
    users: state.firestore.data.users
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'projects' },
    { collection: 'users' }
  ])
)(ProjectDetails);