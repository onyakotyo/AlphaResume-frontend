import React, {Component} from 'react'
import {render} from 'react-dom'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProfiles} from '../../actions/profileActions';
//import { postJobSearch } from '../../actions/jobActions';
//import JobItem from './JobItem';
import { Link } from 'react-router-dom';
import Spinner from '../common/Spinner';
import TextFieldGroup from '../common/TextFieldGroup'
import isEmpty from '../../validation/is-empty';

import SearchInput, {createFilter} from '../../components/job-post/Search'

//import emails from './mails'

//const KEYS_TO_FILTERS = ['user.name', 'dest.job', 'subject', 'dest.name', 'id']
const KEYS_TO_FILTERS = ['firstname', 'user.lastname', 'location', 'user._id', 'status', 'university', 'degree', 'handle']


class SearchStudents extends Component {
  constructor (props) {
    super(props)
    this.state = {
      searchTerm: '',

    }
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  componentDidMount() {
    this.props.getProfiles();
  }

  render () {
    const { profiles, profile, loading } = this.props.profile;

    const filteredProfiless = profiles.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))

    return (
      <div>
        <SearchInput className='search-input' onChange={this.searchUpdated} />
        {filteredProfiless.map(profile => {

          return (


            <div className="card card-body bg-light mb-3" key={profile._id} profile={profile}>
              <div className="row">
                <div className="col-2" >
                  <img src={profile.user.avatar} alt="" className="rounded-circle" />
                </div>
                <div className="col-lg-6 col-md-4 col-8">

                    <h6>{profile.user._id}</h6>

                  <h4>{profile.user.firstname}</h4>
                  <h4>{profile.user.lastname}</h4>



                  <p>

                    {isEmpty(profile.company) ? null : (
                      <span>at {profile.company}</span>
                    )}
                  </p>
                  <p>
                      {profile.status}{' '}
                    {isEmpty(profile.education.university) ? null : (
                      <span>at {profile.education.university}</span>
                    )}
                  </p>

                  <p>
                    {isEmpty(profile.degree) ? null : (
                      <span>{profile.degree}</span>
                    )}
                  </p>

                  <p>
                    {isEmpty(profile.location) ? null : (
                      <span>{profile.location}</span>
                    )}
                  </p>
                  <Link to={`/profile/${profile.handle}`} className="btn btn-info">
                    View Profile
                  </Link>
                </div>
                <div className="col-md-4 d-none d-md-block">
                  <h4>Skill Set</h4>
                  <ul className="list-group">
                    {profile.skills.slice(0, 4).map((skill, index) => (
                      <li key={index} className="list-group-item">
                        <i className="fa fa-check pr-1" />
                        {skill}
                      </li>
                    ))}
                  </ul>
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

SearchStudents.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile
});

export default connect(mapStateToProps, { getProfiles })(SearchStudents);

//export default SearchPage

/*<div className='mail' key={email.id}>
  <div className='from'>{email.user.name}</div>
  <div className='subject'>{email.subject}</div>
  <div className='subject'>{email.dest.job}</div>

</div> */
