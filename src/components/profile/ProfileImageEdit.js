import React, { Component } from 'react';
import { connect } from 'react-redux';
import { uploadProfileImage } from '../../store/actions/fileStorage';

class ProfileImageEdit extends Component {
  state = {
    profileimage: null,
    profileimageurl: this.props.user.thumb
  }

  handleFile = e => {
    this.setState({
      [e.target.id]: e.target.files[0]
    });
  }
  handleUpload = e => {
    console.log('started');
    e.preventDefault();
    this.props.uploadProfileImage(this.state.profileimage, this.props.auth);
  }

  render() {

    return (
      <div id="profileimage-edit-modal" data-uk-modal>
        <div className="uk-modal-dialog uk-margin-auto-vertical uk-modal-body">
          <button className="uk-modal-close-default" type="button" data-uk-close></button>
          <form>
            <h3 className="uk-text-center">Change Profile Picture</h3>
            <div className="uk-margin">
              <img height="100" width="100" alt="progekt" src={this.props.profileimageurl || this.state.profileimageurl} />
            </div>
            <div className="uk-margin">
              <div data-uk-form-custom="target: true">
                <input id="profileimage" type="file" onChange={this.handleFile} />
                <input className="uk-input uk-width-medium" type="text" placeholder="select" disabled />
                <progress id="js-progressbar" className="uk-progress" max="100" value={this.props.progress} />
              </div>
            </div>
            <div className="uk-margin uk-width-expand uk-text-right">
              <button className="uk-button uk-button-primary" onClick={this.handleUpload} >Upload</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    profileimageurl: state.fileStorage.profileimageurl,
    progress: state.fileStorage.uploadProgress
  };
}

const mapDispatchToProps = dispatch => {
  return {
    uploadProfileImage: (image, user) => {
      dispatch(uploadProfileImage(image, user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileImageEdit);
