import React from 'react';
import EditProject from '../projects/EditProject';
import DeleteProject from '../projects/DeleteProject';

const ProjectDetailsEdit = ({ projectId, project }) => {
  // SUBNAV WITH EDIT CONTROLS TO RETURN IF POST BELONGS TO CURRENT USER
  return (
    <ul className="uk-subnav" data-uk-margin>
      <li><a href="#project-edit-modal" data-uk-toggle="">Edit</a><EditProject projectId={projectId} title={project.title} content={project.content}/></li>
      <li><a href="#project-delete-modal" data-uk-toggle="">Delete</a><DeleteProject projectId={projectId} /></li>
      <li><a href="#!">Comment</a></li>
    </ul>
  );
}

export default ProjectDetailsEdit;