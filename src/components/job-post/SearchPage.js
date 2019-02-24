import React, {Component} from 'react'
import {render} from 'react-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getJobs} from '../../actions/jobActions';
//import { postJobSearch } from '../../actions/jobActions';
//import JobItem from './JobItem';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import TextFieldGroup from '../common/TextFieldGroup'
import isEmpty from '../../validation/is-empty';

import SearchInput, {createFilter} from './Search'

//import emails from './mails'

//const KEYS_TO_FILTERS = ['user.name', 'dest.job', 'subject', 'dest.name', 'id']
const KEYS_TO_FILTERS = ['title', 'employer', 'location', '_id']


class SearchPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',

    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  componentDidMount() {
    this.props.getJobs();
  }

  render () {
    const { jobs, job, loading } = this.props.job;

    const filteredJobs = jobs.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput className='search-input' onChange={this.searchUpdated} />
        {filteredJobs.map(job => {

          return (



            <div className="card card-body bg-light mb-3"  key={job._id} job={job}>
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




        })}
      </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}

SearchPage.propTypes = {
  getJobs: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  job: state.job
});

export default connect(mapStateToProps, { getJobs })(SearchPage);

//export default SearchPage

/*<div className='mail' key={email.id}>
  <div className='from'>{email.user.name}</div>
  <div className='subject'>{email.subject}</div>
  <div className='subject'>{email.dest.job}</div>

</div> */
