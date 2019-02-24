import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { logoutUser } from '../../actions/authActions'
import { clearCurrentProfile } from '../../actions/profileActions'
import { connect } from 'react-redux'
import './NavImg/cycling.png'
import './NavImg/omus.jpg'

class Navbar extends Component {

  onLogoutClick(e) {
    e.preventDefault();
    this.props.clearCurrentProfile()
    this.props.logoutUser()
  }

  render(){

    const{ isAuthenticated, user } = this.props.auth;
    const   EmployerPage = (

        <Link className="nav-link" to="/employers" style={{color: '#ffffff',  fontWeight: '18'}}>
          <h5 className="text-muted">Employer</h5>
        </Link>

    )
    const  StudentPage = (
        <Link className="nav-link" to="/students"  style={{color: '#ffffff',  fontWeight: '18'}}>
          <h5 className="text-muted">Students</h5>
        </Link>

    )

    const  PostJob = (
      <Link className="nav-link" to="/job-post" style={{color: '#ffffff',  fontWeight: '18'}}>
      <h5 className="text-muted">Post Job</h5>
      </Link>

    )

  const Profiles = (
      <Link className="nav-link" to="/profiles" style={{color: '#ffffff',  fontWeight: '18'}}>
      <h5 className="text-muted">Student Profiles</h5>
      { '' }
      </Link>
  )


    const  Applicants = (
      <Link className="nav-link" to="/applicants" style={{color: '#ffffff',  fontWeight: '18'}}>
      <h5 className="text-muted">Applicants</h5>
      </Link>

    )

    const authLinks = (
      <ul className="navbar-nav ml-auto">

      <li className="nav-item  mr-auto">
        {user.__type === 'Employer' ?
        Profiles
         : null  }

        </li>

      <li className="nav-item  mr-auto ">
        {user.__type === 'Employer' ?
      Applicants
         : null  }

      </li>

      <li className="nav-item">
        {user.__type === 'Employer' ? EmployerPage : StudentPage }
      </li>

      <li className="nav-item  mr-auto">
        <Link className="nav-link" to="/jobs" style={{color: '#ffffff',  fontWeight: '18'}}>
        <h5 className="text-muted">Jobs</h5>
        </Link>
      </li>



      <li className="nav-item  mr-auto">
        {user.__type === 'Employer' ?
        PostJob
         : null  }

      </li>

        <li className="nav-item  mr-auto">
          <Link className="nav-link" to="/dashboard" style={{color: '#ffffff',  fontWeight: '18'}}>
          <h5 className="text-muted">Dashboard</h5>
          </Link>
        </li>

        <li className="nav-item  mr-auto">
        <Link to="/landing"
          onClick={this.onLogoutClick.bind(this)}
          className="nav-link " style={{color: '#ffffff',  fontWeight: '18'}}>

          <h5 className="text-muted">Logout</h5>
          </Link>
        </li>
        <li className="nav-item ">
        <Link to="/dashboard">
              <img
                  className="rounded-circle"
                  src={user.avatar}
                  alt={user.name}
                  style={{width: '60px', marginRight: '5px'}}
                  title="You must have a gravatar connected to your email to display an image"
                  />

          </Link>
        </li>
      </ul>
    )

    const guestLinks = (

        <ul className="navbar-nav ml-auto">
          <li className="nav-item" >
            <Link className="nav-link" to="/employers" style={{color: '#ffffff',  fontWeight: '18'}}>
            <h4 className="text-muted"> Employers</h4>
            </Link>
          </li>
          <li className="nav-item  mr-auto">
            <Link className="nav-link" to="/students" style={{color: '#ffffff',  fontWeight: '18'}}>
            <h4 className="text-muted">Students</h4>
            </Link>
          </li>


        <li className="nav-item  mr-auto">
          <Link className="nav-link" to="/register" style={{color: '#ffffff',  fontWeight: '18'}}>
          <h4 className="text-muted">Sign Up</h4>
          </Link>
        </li>
        <li className="nav-item  mr-auto">
          <Link className="nav-link " to="/login" style={{color: '#ffffff',  fontWeight: '18'}}>
          <h4 className="text-muted">Login</h4>
          </Link>
        </li>
        <li>
        <Link className="nav-link" to="/contact" style={{color: '#ffffff',  fontWeight: '18'}}>

          <h4 className="text-muted">Contact Us</h4>
        </Link>
      </li>
      </ul>
    )

    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4" >
      <div className="container">

      <Link className="navbar-brand  " to="" style={{color: '#ff3300', padding: 5,
  bordeRadius: 50 , backgroundColor: '#ffffff',fontWeight: 'bold'}}>


          <img src={require('./NavImg/omus.jpg')} style={{width: 60, height: 60}} className="align-left" />
      <h6 className="text-muted   mr-auto"> AlphaResume</h6>

       </Link>





      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="mobile-nav">

        {isAuthenticated ? authLinks : guestLinks }

      </div>
    </div>
  </nav>
    )
  }

}

Navbar.propTypes = {

  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {logoutUser, clearCurrentProfile}) (Navbar)
