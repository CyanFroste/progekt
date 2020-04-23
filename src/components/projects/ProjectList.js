import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects, auth, profile, users }) => {

  return (
    <div className="uk-container uk-container-small uk-padding">
      <div data-uk-filter="target: .js-filter">
        <ul className="uk-subnav uk-subnav-pill">
          <li className="uk-active" data-uk-filter-control=".project-all"><a href="#!">All</a></li>
          <li data-uk-filter-control=".project-mypost"><a href="#!">My post</a></li>
        </ul>
        <div className="js-filter uk-container uk-container-small uk-padding">
          {
            projects && users && projects.map(project => {              
              return (
                <ProjectSummary project={project} auth={auth} key={project.id} profile={profile} postOwner={users[project.authorid]} />
              );
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectList;