import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import isEmpty from '../../validation/is-empty';

class JobItem extends Component {
  render() {
    const { job } = this.props;

    return (
      <div className="card card-body bg-light mb-3">
        <div className="row">

          <div className="col-lg-12 col-md-12 col-12">
            <h3 className="text-center text-info">{job.title}</h3>
            <p className="text-center text-muted">

              {isEmpty(job.employer) ? null : (
                <span> {job.employer}</span>
              )}

            </p>
            <p className="text-center text-muted">

              {isEmpty(job.location) ? null : (
                <span>{job.location}</span>
              )}
            </p>
            <p className="text-center text-muted">

              {isEmpty(job.salary) ? null : (
                <span>{job.salary}</span>
              )}
            </p>
            <p className="text-center text-muted">
            
              {isEmpty(job.closingDate) ? null : (
                <span>{job.closingDate}</span>
              )}
            </p>
            <Link to={`/job/${job.handle}`} className="btn btn-info">
              View Job
            </Link>
          </div>

        </div>
      </div>
    );
  }
}

JobItem.propTypes = {
  job: PropTypes.object.isRequired
};

export default JobItem;
