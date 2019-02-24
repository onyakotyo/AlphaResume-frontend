import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../common/Spinner';
import JobItem from './JobItem';
import { getJobs } from '../../actions/jobActions';

class Jobs extends Component {
  componentDidMount() {
    this.props.getJobs();
  }

  render() {

    const { jobs, loading } = this.props.job;
    let jobItems;

    if (jobs === null || loading) {
      jobItems = <Spinner />;
    } else {
      if (jobs.length > 0) {
        jobItems = jobs.map(job => (
          <JobItem key={job._id} job={job} />
        ));
      } else {
        jobItems = <h4>No jobs found...</h4>;
      }
    }

    return (
      <div className="jobs">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center text-info" style={{fontWeight: 18}}>
              Jobs
              </h1>
              <p className="lead text-center text-muted" style={{fontWeight: 18}}>
                Browse and apply for jobs
              </p >
              <Link to="/job-search" className="btn btn-success" style={{marginBottom: '1.5rem', justifyContent: 'center'}}>
                Search for jobs
              </Link>

              <div className="lead text-center">
              {jobItems}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Jobs.propTypes = {
  getJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.job
});

export default connect(mapStateToProps, { getJobs })(Jobs);
