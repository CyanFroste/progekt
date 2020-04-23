const initState = {
  authError: null
};

const authReducer = (state = initState, action) => {
  switch (action.type) {

    case 'LOGIN_ERROR': console.log('login error'); return {
      ...state,
      authError: 'Login Failed'
    };

    case 'LOGIN_SUCCESS': console.log('login successful'); return {
      ...state,
      authError: null
    };

    case 'LOGGED_OUT': console.log('logged out successfully'); return state;

    case 'SIGNUP_SUCCESS': console.log('user registered'); return {
      ...state,
      authError: null
    };

    case 'SIGNUP_ERROR': console.log('unable to sign up'); return {
      ...state,
      authError: action.err.message
    };

    default: return state;
  }
};

export default authReducer;