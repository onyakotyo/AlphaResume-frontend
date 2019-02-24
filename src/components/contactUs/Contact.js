
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TextFieldGroup from '../common/TextFieldGroup'
import TextAreaFieldGroup from '../common/TextAreaFieldGroup'
import { registerMail } from '../../actions/mailActions'
import './ContactStyle.css'


class Contact extends Component {
  constructor(){
    super()
    this.state = {
      name: '',
      company: '',
      email: '',
      telephone: '',
      message: '',
      errors: {}
    }
          this.onChange = this.onChange.bind(this)
  }


            componentDidMount(){

                this.props.history.push('/contact')

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

           const newMail = {
             name: this.state.name,
             email: this.state.email,
             company: this.state.company,
             telephone: this.state.telephone,
             message: this.state.message
           }

           this.props.registerMail(newMail, this.props.history)


          }








    render(){

        const { errors } = this.state;

      return(
        <div className="Contact"  >
        <div className="container">
          <h1 className="brand"><span>AlphaResume</span> Support Team</h1>
          <div className="wrapper animated bounceInLeft">
            <div className="company-info">
              <h3>AlphaResume Contact</h3>
              <ul>
                <li><i className="fa fa-road"></i> 88 Cambourne Business Park, CB23 7GT, Cambridge, UK </li>
                <li><i className="fa fa-phone"></i> +44 (0) 1954 764-154 </li>
                <li><i className="fa fa-envelope"></i> support@alpharesume.com</li>
              </ul>
            </div>
            <div className="contact">
              <h3>Email Us</h3>

              

              <form onSubmit={this.onSubmit}>

                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  value={this.state.name}
                  onChange={this.onChange}
                  error={errors.name}

                />


                <TextFieldGroup
                  placeholder="Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}

                />


                <TextFieldGroup
                  placeholder="Company"
                  name="company"
                  value={this.state.company}
                  onChange={this.onChange}
                  error={errors.company}

                />


                <TextFieldGroup
                  placeholder="Phone Number"
                  name="telephone"
                  value={this.state.telephone}
                  onChange={this.onChange}
                  error={errors.telephone}

                />



                <TextAreaFieldGroup
                  placeholder="Message"
                  name="message"
                  value={this.state.message}
                  onChange={this.onChange}
                  error={errors.message}

                />

                <p className="full">
                  <button>Submit</button>



                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      )
    }
}
Contact.propTypes = {
  registerMail: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired

}

const mapStateToProps = (state) => ({
  errors: state.errors
})
export default connect(mapStateToProps, {registerMail})(Contact)
