import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstname: '',
    lastname: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
  }

  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />;

    return (
      <div className="project-list uk-container uk-container-small uk-flex uk-flex-center">
        <form className="uk-padding" onSubmit={this.handleSubmit}>
          <div className="uk-margin">
            <h2 className="uk-text-bold uk-text-center">Sign Up</h2>
          </div>          
          <div className="uk-margin uk-width-medium">
            <label htmlFor="firstname">First Name</label>
            <input className="uk-input" type="text" id="firstname" onChange={this.handleChange} />
          </div>
          <div className="uk-margin uk-width-medium">
            <label htmlFor="email">Last Name</label>
            <input className="uk-input" type="text" id="lastname" onChange={this.handleChange} />
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
            <button className="uk-button uk-button-primary">Sign Up</button>
          </div>
          <div className="uk-margin uk-text-center uk-text-danger">
            {authError ? <p >{authError}</p> : null}
          </div>          
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: user => {
      dispatch(signUp(user));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
