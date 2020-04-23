import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
  reduxFirestore,
  getFirestore,
  createFirestoreInstance
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/firebaseConfig";
import firebase from "firebase/app";
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import progektPlaceholder from './assets/progektPlaceholder.png';

// creating redux store 
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebaseConfig)
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
};

const rrfProps = {
  firebase,
  config: firebaseConfig,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  presence: 'presence',
  sessions: 'sessions',
  createFirestoreInstance
};
// Element that only allows children to render if current profile is authorized and loaded 
const AuthIsLoaded = ({ children }) => {
  const auth = useSelector(state => state.firebase.auth);
  if (!isLoaded(auth)) return <div className="loading-screen" style={{ backgroundImage: `url(${progektPlaceholder})` }} > </div>;
  return children;
};

// RENDERING THE APP
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();