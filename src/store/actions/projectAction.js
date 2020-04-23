export const createProject = project => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // add async code here
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorid = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorfirstname: profile.firstname,
      authorlastname: profile.lastname,
      authorid: authorid,
      created: new Date()
    }).then( _ => {
      dispatch({ type: 'CREATE_PROJECT', project: project });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR', err })
    });
  }
};

export const editProject = (projectId, project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').doc(projectId).update({      
      title: project.title,
      content: project.content,
      modified: new Date()
    }).then( _ => {
      dispatch({ type: 'EDIT_PROJECT', project: project });
    }).catch(err => {
      dispatch({ type: 'EDIT_PROJECT_ERROR', err })
    });
  }
};

// DELETE PROJECT
export const deleteProject = (projectId) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore.collection('projects').doc(projectId).delete()
    .then( _ => {
      dispatch({ type: 'DELETE_PROJECT'});
    }).catch(err => {
      dispatch({ type: 'DELETE_PROJECT_ERROR', err })
    });
  }
};