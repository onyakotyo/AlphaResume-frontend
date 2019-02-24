/*import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Landing from './components/layout/Landing'
import Employers from './components/layout/Employers'
import Students from './components/layout/Students'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import './App.css';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
      <Navbar />

        <Route exact path="/" component={Landing}  />

        <div className = "container">
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/students" component= {Students} />
        <Route exact path="/employers" component= {Employers} />
        </div>

      <Footer />
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App; */

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { setCurrentUser, logoutUser } from './actions/authActions';
import { clearCurrentProfile } from './actions/profileActions';

import { Provider } from 'react-redux';
import store from './store';

import PrivateRoute from './components/common/PrivateRoute';
import Employers from './components/layout/Employers'
import Students from './components/layout/Students'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import CreateProfile from './components/create-profile/CreateProfile';
import EditProfile from './components/edit-profile/EditProfile';
import AddExperience from './components/add-credentials/AddExperience';
import AddEducation from './components/add-credentials/AddEducation';
import Profiles from './components/profiles/Profiles';
import SearchStudents from './components/profiles/SearchStudents'
import Profile from './components/profile/Profile';
//import Posts from './components/posts/Posts';
//import Post from './components/post/Post';
import CreateJob from './components/job-post/CreateJob'
import CreateApplication from './components/job-post/CreateApplication'
import Jobs from './components/job-post/Jobs'
import Applicants from './components/job-post/Applicants'
import Job from './components/job-post/Job'
import JobSearch from './components/job-post/JobSearch'
import Contact from './components/contactUs/Contact'
import NotFound from './components/not-found/NotFound';

import './App.css';

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current Profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";

  }
}

/*if(localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  store.dispatch(setCurrentUser(decoded));

  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    window.location.href = '/login'
  }
}*/

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <div className="container">
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/profiles" component={Profiles} />

             <Route exact path="/profilez/:handle" component={Profile} />
              <Route exact path="/profilex/:handle" component={Profile} />
           <Route exact path="/profile/:user_id" component={Profile} />
              <Route exact path="/job/:handle" component={Job} />
              <Route exact path="/job-search" component={JobSearch} />

              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
              <Route exact path="/students" component= {Students} />
              <Route exact path="/employers" component= {Employers} />


              <Switch>
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
              </Switch>

              <Switch>
                <PrivateRoute
                  exact
                  path="/search-students"
                  component={SearchStudents}
                />
              </Switch>




                <Switch>
                  <PrivateRoute
                    exact
                    path="/create-application"
                    component={CreateApplication}
                  />
                </Switch>


                <Switch>
                  <PrivateRoute
                    exact
                    path="/job-post"
                    component={CreateJob}
                  />
                  </Switch>
                  <Switch>
                    <PrivateRoute
                      exact
                      path="/jobs"
                      component={Jobs}
                    />
                </Switch>

                <Switch>
                  <PrivateRoute
                    exact
                    path="/applicants"
                    component={Applicants}
                  />
                  </Switch>

              <Switch>
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
              </Switch>
              <Switch>
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
              </Switch>


              <Route exact path="/not-found" component={NotFound} />
                <Route exact path="/contact" component={Contact} />
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
