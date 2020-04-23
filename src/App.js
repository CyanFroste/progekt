import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Dashboard from './components/dash/Dashboard';
import ProjectDetails from './components/projects/ProjectDetails';
import LogIn from './components/auth/LogIn';
import SignUp from './components/auth/SignUp';
import Profile from './components/profile/Profile';
import NotificationList from './components/dash/NotificationList';
import NavbarMobile from './components/layout/NavbarMobile';

class App extends Component {
  state = {
    width: window.innerWidth
  }
  // lifecycle methods
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }
  // event handler to load respective navbar component
  handleResize = _ => {
    this.setState({ width: window.innerWidth });
  };
  render() {
    // deciding on navbar
    const { width } = this.state; 
    const navbar = width < 1200 ? <NavbarMobile /> : <Navbar />;
    return (
      <BrowserRouter>
        <div className="App ">
          {/* rendering navbar => */} {navbar}          
          <Switch>
            {/* Route to components via respective addresses */}
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/login" component={LogIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/profile/:id" component={Profile} />
            <Route path="/notifications" component={NotificationList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;