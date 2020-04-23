const initState = {
  uploadProgress: 0
};

const fileStorageReducer = (state = initState, action) => {
  switch (action.type) {

    case 'FILE_UPLOAD_ERROR': console.log('file upload error', action.err); return state;   

    case 'FILE_UPLOADED': console.log('file uploaded successfully', action.url); return {
      ...state,
      profileimageurl: action.url,
      uploadProgress: 0      
    };
    
    case 'FILE_UPLOAD_PROGRESS': console.log(action.progress); return {
      ...state,
      uploadProgress: action.progress
    };

    default: return state;

  }
};

export default fileStorageReducer;