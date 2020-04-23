import progektPlaceholder from '../../assets/progektPlaceholder.png';

export const logIn = credentials => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(_ => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });
  };
};

export const logOut = _ => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(_ => {
      dispatch({ type: 'LOGGED_OUT' });
    });
  };
};

export const signUp = user => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firebase = getFirebase();
    const firestore = getFirestore();

    firebase.auth().createUserWithEmailAndPassword(
      user.email,
      user.password
    ).then((res) => {
      return firestore.collection('users').doc(res.user.uid).set({
        firstname: user.firstname,
        lastname: user.lastname,
        thumb: progektPlaceholder 
      });
    }).then(_ => {
      dispatch({ type: 'SIGNUP_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'SIGNUP_ERROR', err });
    });
  };
};