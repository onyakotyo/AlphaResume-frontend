import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'


import { loginUser} from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'


class Login extends Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: '',
      __type: '',
      errors: {}
    }
    this.onChange = this.onChange.bind(this)
  }


   componentDidMount(){
     if(this.props.auth.isAuthenticated) {
       this.props.history.push('/dashboard')
     }
   }
  componentWillReceiveProps(nextProps){
    if(nextProps.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }

    if(nextProps.errors) {
      this.setState({errors: nextProps.errors})
    }
  }

    onChange(e) {
      this.setState({[e.target.name]: e.target.value})
    }

    onSubmit = (e) => {
      e.preventDefault();

      const userData = {
        email: this.state.email,
        password: this.state.password,
        __type: this.state.__type

      }
      this.props.loginUser(userData)
    }


  render(){

    const { errors }= this.state
    return (
        <div className="login" style={{bordeRadius: 5}}>
          <div className="container"  style={{backgroundColor: '#17a2b8', minHeight: '70vh', bordeRadius: 5}}>
//backgroundColor: '#006097'
            <div className="row">
              <div className="col-md-8 m-auto" >

                <h1 className="display-4 text-center  "  style={{fontWeight:'350', color: '#ffffff'}}>Log In</h1>
                <h4 className="lead text-center  " style={{color:'#ffffff', marginBottom: 40, marginTop: 20}}>Sign in to your AlphaResume account</h4>
              <div className="form-group" style={{backgroundColor: '#ffffff', borderRadius: 5, paddingTop: '2rem', paddingBottom: '2rem', paddingRight: '2rem', paddingLeft: '2rem'}}>
                <form onSubmit = {this.onSubmit}  >

                  <TextFieldGroup
                    placeholder="Email Address"
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    error={errors.email}

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
                  type="text"
                  placeholder="Designation"
                  name="__type"
                  value={this.state.__type}
                  onChange={this.onChange}
                  error={errors.__type}

                  />

                  <input type="submit" className="btn btn-info btn-block mt-4"  />
                </form>
                </div>
              </div>
            </div>
              <h4 className=" lead text-center " style={{marginTop: '3rem', color: '#ffffff'}}>  AlphaResume connecting students with employers. Login to get connected!</h4>
          </div>
          </div>


    )
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
})
export default connect(mapStateToProps,{loginUser})(Login)
