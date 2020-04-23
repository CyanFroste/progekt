import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editProject } from '../../store/actions/projectAction';
import UIkit from 'uikit';

class EditProject extends Component {
  state = {
    title: this.props.title,
    content: this.props.content
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = e => {    
    e.preventDefault();
    this.props.editProject(this.props.projectId, this.state);
    UIkit.modal('#project-edit-modal').hide();
  }

  render() {

    return (
      <div id="project-edit-modal" data-uk-modal>
        <div className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
          <button className="uk-modal-close-default" type="button" data-uk-close></button>
          <form onSubmit={this.handleSubmit}>
            <h3 className="uk-text-center">Edit</h3>
            <div className="uk-margin">
              <label htmlFor="title">Title</label>
              <input className="uk-input" type="text" required id="title" onChange={this.handleChange} defaultValue={this.state.title} />
            </div>
            <div className="uk-margin">
              <label htmlFor="content">Description</label>
              <textarea rows="7" className="uk-textarea" id="content" onChange={this.handleChange} defaultValue={this.state.content}></textarea>
            </div>
            <div className="uk-margin uk-text-right">
              <button className="uk-button uk-button-primary">Done</button>
            </div>
          </form>
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
    editProject: (projectId, project) => dispatch(editProject(projectId, project))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditProject);
