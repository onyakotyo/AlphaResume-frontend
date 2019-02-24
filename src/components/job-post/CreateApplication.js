import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createApplication} from '../../actions/applicantsActions';

class CreateApplication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      jobName: '',
      email: '',
      telephone: '',
      university: '',
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const applicantData = {
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      jobName: this.state.jobName,
      email: this.state.email,
      telephone: this.state.telephone,
      university: this.state.university
    };

    this.props.createApplication(applicantData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;




    return (
      <div className="create-application">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center text-info" style={{fontWeight: 18}}>Apply for a Vacancy</h1>
              <p className="lead text-center text-info" style={{fontWeight: 18}}>
              Fill in the form below to apply for a vacancy.
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>

              <TextFieldGroup
                placeholder="Job Name"
                name="jobName"
                value={this.state.jobName}
                onChange={this.onChange}
                error={errors.jobName}
                info="Job you are applying for."
              />
                <TextFieldGroup
                  placeholder="* First Name"
                  name="firstname"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  error={errors.firstname}
                  info="First name"
                />
                <TextFieldGroup
                  placeholder="* Surname"
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  error={errors.lastname}
                  info="Surname"
                />
                <TextFieldGroup
                  placeholder="* Email"
                  name="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  error={errors.email}
                  info="Contact email"
                />
                <TextFieldGroup
                  placeholder="Telephone"
                  name="telephone"
                  value={this.state.telephone}
                  onChange={this.onChange}
                  error={errors.telephone}
                  info="Contact telephone number"
                />

                <TextFieldGroup
                  placeholder="University"
                  name="university"
                  value={this.state.university}
                  onChange={this.onChange}
                  error={errors.university}
                  info="University you are undertaking your study programme"
                />


                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

CreateApplication.propTypes = {
  createApplication: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  application: PropTypes.object.isRequired

};

const mapStateToProps = state => ({

  application: state.application,
  errors: state.errors

});

export default connect(mapStateToProps, { createApplication})(
  withRouter(CreateApplication)
);
