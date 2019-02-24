import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'

class Register extends Component {
  constructor(){
    super()
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      password2: '',
      employery: '',
      errors: {}
    }

    this.onChange = this.onChange.bind(this)
  //  this.onSubmit - this.onSubmit.bind(this)
  }


     componentDidMount(){
       if(this.props.auth.isAuthenticated) {
         this.props.history.push('/dashboard')
       }
     }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
      employery: this.state.employery
    }

    this.props.registerUser(newUser, this.props.history)


  }


  render(){

    const { errors } = this.state;
  //Same as const errors = this.state.errors.



    return (
        <div className="register">

          <div className="container"  style={{backgroundColor: '#17a2b8', minHeight: '70vh', bordeRadius: 5}}>
            <div className="row">
              <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center " style={{fontWeight:'350', color: '#ffffff'}}>Sign Up</h1>
                <h4 className="  lead text-center " style={{color: '#ffffff', marginBottom: 20}}>Create your AlphaResume account</h4>
                  <div className="form-group" style={{backgroundColor: '#ffffff', borderRadius: 5, paddingTop: '2rem', paddingBottom: '2rem', paddingRight: '2rem', paddingLeft: '2rem'}}>
                <form onSubmit={this.onSubmit}>

                <TextFieldGroup
                  placeholder="Firstname"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  error={errors.firstname}

                />

                <TextFieldGroup
                  placeholder="Surname"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  error={errors.lastname}

                />

                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="This site uses Gravatar so if you want a profile image, use Gravatar"

                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}

                />

                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}

                />

                <TextFieldGroup
                  placeholder="Designation"
                  name="employery"
                  type="text"
                  value={this.state.employery}
                  onChange={this.onChange}
                  error={errors.employery}
                  info="If you are a student input 'Student' or if employer input 'Employer'"
                />


                  <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
                </div>
             </div>
            </div>
              <h4 className=" lead text-center " style={{marginTop: '2rem', color: '#ffffff'}}>  AlphaResume connecting students with employers.</h4>
          </div>

        </div>


    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps, {registerUser }) (withRouter(Register))
