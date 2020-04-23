import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectAction';
import UIkit from 'uikit';

class CreateProjects extends Component {
  state = {
    title: '',
    content: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.createProject(this.state);
    UIkit.modal('#project-create-modal').hide();
  }

  render() {
    
    return (
      <div id="project-create-modal" data-uk-modal>
        <div className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
          <button className="uk-modal-close-default" type="button" data-uk-close></button>
          <form onSubmit={this.handleSubmit}>
            <h3 className="uk-text-center">Create New Project</h3>
            <div className="uk-margin">
              <label htmlFor="title">Title</label>
              <input className="uk-input" required type="text" id="title" onChange={this.handleChange} />
            </div>
            <div className="uk-margin">
              <label htmlFor="content">Description</label>
              <textarea rows="7" className="uk-textarea" id="content" onChange={this.handleChange}></textarea>
            </div>
            <div className="uk-margin uk-text-right">
              <button className="uk-button uk-button-primary">Create</button>
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
    createProject: project => dispatch(createProject(project))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjects);
