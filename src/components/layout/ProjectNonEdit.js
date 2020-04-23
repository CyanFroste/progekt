import React from 'react';

const ProjectDetailsNonEdit = _ => {
  // SUBNAV WITH NO EDIT CONTROLS TO RETURN IF POST DOESN'T BELONGS TO CURRENT USER
  return (
    <ul className="uk-subnav" data-uk-margin>
      <li><a href="#!">Comment</a></li>
    </ul>
  );
}

export default ProjectDetailsNonEdit;