import { storage } from '../../config/firebaseConfig';

export const uploadProfileImage = (image, user) => {
  
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const uploadTask = storage.ref(`profileImages/${user.uid}`).put(image);
    uploadTask.on('state_changed',
      snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        dispatch({ type: 'FILE_UPLOAD_PROGRESS', progress });
      },
      err => {
        dispatch({ type: 'FILE_UPLOAD_ERROR', err });
      },
      _ => {
        storage.ref('profileImages').child(user.uid)
          .getDownloadURL()
          .then(url => {
            firestore.collection('users').doc(user.uid).update({
              thumb: url
            }).then(_ => {
              dispatch({ type: 'FILE_UPLOADED', url });
            });
          }
        );
      }
    );
  };
};