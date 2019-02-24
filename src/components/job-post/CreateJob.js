import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createJob} from '../../actions/jobActions';

class CreateJob extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      employer: '',
      website: '',
      location: '',
      department: '',
      title: '',
      jobType: '',
      description: '',
      workPattern: '',
      band: '',
      salary: '',
      staffGroup: '',
      specialty: '',
      closingDate: '',
      contactName: '',
      telephone: '',
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

    const jobData = {
      handle: this.state.handle,
      employer: this.state.employer,
      website: this.state.website,
      location: this.state.location,
      department: this.state.department,
      title: this.state.title,
      jobType: this.state.jobType,
      description: this.state.description,
      workPattern: this.state.workPattern,
      band: this.state.band,
      salary: this.state.salary,
      staffGroup: this.state.staffGroup,
      specialty: this.state.specialty,
      closingDate: this.state.closingDate,
      contactName: this.state.contactName,
      telephone: this.state.telephone,
    };

    this.props.createJob(jobData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors } = this.state;



    // Select options for status
    const options = [
      { label: '* Select work Pattern ', value: 0 },
      { label: 'FullTime', value: 'Fulltime' },
      { label: 'PartTime', value: 'Parttime' },
      { label: 'locum', value: 'locum' },
      { label: 'Fulltime Parmanent', value: 'Fulltime-Parmanent' },
      { label: 'Fulltime Temporary', value: 'Fulltime-Temporary' },
      { label: 'Bank', value: 'Bank' },
      { label: 'Other', value: 'Other' }
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center text-info">Create a Vacancy</h1>
              <p className="lead text-center text-info">
                Let's get some information to create a vacancy.
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your job. job title, employ name"
                />
                <SelectListGroup
                  placeholder="Work Pattern"
                  name="workPattern"
                  value={this.state.workPattern}
                  onChange={this.onChange}
                  options={options}
                  error={errors.workPattern}
                  info="Give us an idea of the work pattern"
                />
                <TextFieldGroup
                  placeholder="* Employer"
                  name="employer"
                  value={this.state.employer}
                  onChange={this.onChange}
                  error={errors.employer}
                  info="Official employer name"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Employer website or a company one"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City or city & state suggested (eg. Boston, MA)"
                />
                <TextFieldGroup
                  placeholder="Department"
                  name="department"
                  value={this.state.department}
                  onChange={this.onChange}
                  error={errors.department}
                  info="Department recruiting
                  "
                />
                <TextFieldGroup
                  placeholder="* Title"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                  info="Job title"
                />
                <TextFieldGroup
                  placeholder="* Job Type"
                  name="jobType"
                  value={this.state.jobType}
                  onChange={this.onChange}
                  error={errors.jobType}
                  info="Area of work eg office work, hospital work"
                />

                <TextAreaFieldGroup
                  placeholder="Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                  info="Overview about the job"
                />
                <TextFieldGroup
                  placeholder="Band"
                  name="band"
                  value={this.state.band}
                  onChange={this.onChange}
                  error={errors.band}
                  info="Band 5, Junior, intern"
                />
                <TextFieldGroup
                  placeholder="* Salary"
                  name="salary"
                  value={this.state.salary}
                  onChange={this.onChange}
                  error={errors.salary}
                  info="Salary per annum, per week, per day"
                />
                <TextFieldGroup
                  placeholder="Staff Group"
                  name="staffGroup"
                  value={this.state.staffGroup}
                  onChange={this.onChange}
                  error={errors.staffGroup}
                  info="Nurses, Engineers, Doctors"
                />

                <TextFieldGroup
                  placeholder="Specialty"
                  name="specialty"
                  value={this.state.specialty}
                  onChange={this.onChange}
                  error={errors.specialty}
                  info="Anaesthetist, financial analyst"
                />
                <TextFieldGroup
                  placeholder="* Closing Date"
                  name="closingDate"
                  value={this.state.closingDate}
                  onChange={this.onChange}
                  error={errors.closingDate}
                  info="2019-10-09, 10-09-2019"
                />
                <TextFieldGroup
                  placeholder="Contact Name"
                  name="contactName"
                  value={this.state.contactName}
                  onChange={this.onChange}
                  error={errors.contactName}
                  info="Jane Harris"
                />
                <TextFieldGroup
                  placeholder="Telephone"
                  name="telephone"
                  value={this.state.telephone}
                  onChange={this.onChange}
                  error={errors.telephone}
                  info="+0125 716 871, 07716 7722 8767"
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

CreateJob.propTypes = {
  createJob: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  job: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.job,
  errors: state.errors
});

export default connect(mapStateToProps, { createJob})(
  withRouter(CreateJob)
);
