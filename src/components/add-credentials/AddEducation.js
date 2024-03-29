import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addEducation } from '../../actions/profileActions';

class AddEducation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      university: '',
      degree: '',
      fieldofstudy: '',
      from: '',
      to: '',
      current: false,
      description: '',
      errors: {},
      disabled: false
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const eduData = {
      university: this.state.university,
      degree: this.state.degree,
      fieldofstudy: this.state.fieldofstudy,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description
    };

    this.props.addEducation(eduData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    });
  }

  render() {
    const { errors } = this.state;
    const { user } = this.state.auth;

    const EmployerEdu = (
      <div className="col-md-8 m-auto">
        <Link to="/dashboard" className="btn btn-light">
          Go Back
        </Link>
        <h1 className="display-4 text-center">Add Education</h1>
        <p className="lead text-center">
        Add what the company expects out of potential employees.

        </p>
        <small className="d-block pb-3">* = required fields</small>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* University"
            name="university"
            value={this.state.university}
            onChange={this.onChange}
            error={errors.university}
          />
          <TextFieldGroup
            placeholder="* Degree or Qualification"
            name="degree"
            value={this.state.degree}
            onChange={this.onChange}
            error={errors.degree}
          />
          <TextFieldGroup
            placeholder="*fieldofstudy"
            name="fieldofstudy"
            value={this.state.fieldofstudy}
            onChange={this.onChange}
            error={errors.fieldofstudy}
          />
          <h6>From Date</h6>
          <TextFieldGroup
            name="from"
            type="date"
            value={this.state.from}
            onChange={this.onChange}
            error={errors.from}
          />
          <h6>To Date</h6>
          <TextFieldGroup
            name="to"
            type="date"
            value={this.state.to}
            onChange={this.onChange}
            error={errors.to}
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              name="current"
              value={this.state.current}
              checked={this.state.current}
              onChange={this.onCheck}
              id="current"
            />
            <label htmlFor="current" className="form-check-label">
              Current Job
            </label>
          </div>
          <TextAreaFieldGroup
            placeholder="Program Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            error={errors.description}
            info="Tell us about the program that you in"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
    )

    const StudentEdu = (
      <div className="col-md-8 m-auto">
        <Link to="/dashboard" className="btn btn-light">
          Go Back
        </Link>
        <h1 className="display-4 text-center">Add Education</h1>
        <p className="lead text-center">
            Add any school or bootCamp that you have had in the past or current
        </p>
        <small className="d-block pb-3">* = required fields</small>
        <form onSubmit={this.onSubmit}>
          <TextFieldGroup
            placeholder="* University"
            name="university"
            value={this.state.university}
            onChange={this.onChange}
            error={errors.university}
          />
          <TextFieldGroup
            placeholder="* Degree or Qualification"
            name="degree"
            value={this.state.degree}
            onChange={this.onChange}
            error={errors.degree}
          />
          <TextFieldGroup
            placeholder="*fieldofstudy"
            name="fieldofstudy"
            value={this.state.fieldofstudy}
            onChange={this.onChange}
            error={errors.fieldofstudy}
          />
          <h6>From Date</h6>
          <TextFieldGroup
            name="from"
            type="date"
            value={this.state.from}
            onChange={this.onChange}
            error={errors.from}
          />
          <h6>To Date</h6>
          <TextFieldGroup
            name="to"
            type="date"
            value={this.state.to}
            onChange={this.onChange}
            error={errors.to}
            disabled={this.state.disabled ? 'disabled' : ''}
          />
          <div className="form-check mb-4">
            <input
              type="checkbox"
              className="form-check-input"
              name="current"
              value={this.state.current}
              checked={this.state.current}
              onChange={this.onCheck}
              id="current"
            />
            <label htmlFor="current" className="form-check-label">
              Current Job
            </label>
          </div>
          <TextAreaFieldGroup
            placeholder="Program Description"
            name="description"
            value={this.state.description}
            onChange={this.onChange}
            error={errors.description}
            info="Tell us about the program that you in"
          />
          <input
            type="submit"
            value="Submit"
            className="btn btn-info btn-block mt-4"
          />
        </form>
      </div>
    )

   const EduRender = () => user.__type === 'Employer' ? EmployerEdu : StudentEdu

   const EduDisplay = new EduRender()

    return (
      <div className="add-education">
        <div className="container">
          <div className="row">
            {EduDisplay}
        </div>
      </div>
      </div>
    );
  }
}

AddEducation.propTypes = {
  addEducation: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  errors: state.errors,
  auth: state.auth
});

export default connect(mapStateToProps, { addEducation })(
  withRouter(AddEducation)
);
