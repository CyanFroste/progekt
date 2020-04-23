import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProject } from '../../store/actions/projectAction';
import { Link } from "react-router-dom";
import UIkit from 'uikit';

class DeleteProject extends Component {
  
  handleSubmit = e => {
    this.props.deleteProject(this.props.projectId);
    UIkit.modal('#project-delete-modal').hide();
  }

  render() {

    return (
      <div id="project-delete-modal" data-uk-modal>
        <div className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
          <button className="uk-modal-close-default" type="button" data-uk-close></button> 
          <h3 className="uk-text-center">Are You sure you want to delete this project?</h3>    
          <div className="uk-margin uk-text-center">
            <Link className="uk-button uk-button-danger" onClick={this.handleSubmit} to="/" >Yes</Link>             
          </div> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteProject: (projectId) => dispatch(deleteProject(projectId))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteProject);
