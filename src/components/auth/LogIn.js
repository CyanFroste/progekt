import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class LogIn extends Component {
  state = {
    email: '',
    password: ''
  }  
  // event handler to map changes in forms to component state
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  // event handler on submitting the form
  handleSubmit = e => {
    e.preventDefault();
    this.props.logIn(this.state);
  }

  render() {
    // redirect if already logged in
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' />;

    return (
      <div className="project-list uk-container uk-container-small uk-flex uk-flex-center">
        <form className="uk-padding" onSubmit={this.handleSubmit}>
          <div className="uk-margin ">
            <h2 className="uk-text-bold uk-text-center">Log In</h2>
          </div>
          <div className="uk-margin uk-width-medium">
            <label htmlFor="email">E-mail</label>
            <input className="uk-input" type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="uk-margin uk-width-medium">
            <label htmlFor="password">Password</label>
            <input className="uk-input" type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="uk-margin uk-text-right">
            <button className="uk-button uk-button-primary">Log In</button>
          </div>
          <div className="uk-margin uk-text-center uk-text-danger">
            {/* show error => */}  {authError ? <p >{authError}</p> : null}
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
};
const mapDispatchToProps = dispatch => {
  return {
    logIn: creds => dispatch(logIn(creds))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
