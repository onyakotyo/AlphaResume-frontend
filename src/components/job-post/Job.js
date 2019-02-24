import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import isEmpty from '../../validation/is-empty';
//import ProfileHeader from './ProfileHeader';
//import ProfileAbout from './ProfileAbout';
//import ProfileCreds from './ProfileCreds';
//import ProfileGithub from './ProfileGithub';
import Spinner from '../common/Spinner';
//import NotFound from './components/not-found/NotFound'
import { getJobByHandle } from '../../actions/jobActions';

class Job extends Component {
  componentDidMount() {
    if (this.props.match.params.handle) {
      this.props.getJobByHandle(this.props.match.params.handle);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.job.job === null && this.props.job.loading) {
      this.props.history.push('/not-found');
    }
  }

  render() {
    const { job, loading } = this.props.job;
    const { user } = this.props.auth

    let jobContent;

    const Student = (
      <Link to="/create-application" className="btn btn-light mb-3 float-left">
        Apply for this Job
      </Link>
    )

    const Employer = (
      <Link to="/ediT-job" className="btn btn-light mb-3 float-left">
        Edit Job
      </Link>
    )



    if (job === null || loading) {
      jobContent = <Spinner />;
    } else {
      jobContent = (
        <div >
          <div className="row">
          <div className="col-md-6">
            {user.__type ==='Employer' ? Employer : Student}
          </div>
            <div className="col-md-6" />
          </div>

              <hr style={{borderColor:'#66d9ff'}}/>
          <div className="text-center">

           <h1 className="display-4 text-center" style={{ color: '#990066'}}>{job.title}</h1>
            <p className="lead text-center">



                {isEmpty(job.employer) ? null : (
                  <span className="lead text-center"  style={{ color: '#990066'}}> {job.employer}</span>
                )}
              </p>

                <hr style={{borderColor:'#66d9ff'}}/>

              <p>
                {isEmpty(job.department) ? null : (
                  <span className="lead text-center" style={{ color: '#990066'}}> {job.department}</span>
                )}
              </p>

              <hr style={{borderColor:'#66d9ff'}}/>

              <div className="form-group row">
              <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}>Job Type :</label>
                <div className="col-sm-6">
               {isEmpty(job.jobType) ? null : (
                 <span className="lead text-center" >{job.jobType}</span>
               )}
             </div>
             </div>

                <hr />

              <div className="form-group row">
              <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}>Specialty :</label>
                <div className="col-sm-6">
               {isEmpty(job.specialty) ? null : (
                 <span className="lead text-center" >{job.specialty}</span>
               )}
             </div>
             </div>

              <hr />

              <div className="form-group row">
              <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}> Description :</label>
                <div className="col-sm-6">
               {isEmpty(job.description) ? null : (
                 <span className="lead text-center" >{job.description}</span>
               )}
             </div>
             </div>


                  <hr />

                <div className="form-group row">
                <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}> Work Pattern :</label>
                  <div className="col-sm-6">
                 {isEmpty(job.workPattern) ? null : (
                   <span className="lead text-center" >{job.workPattern}</span>
                 )}
               </div>
               </div>

               <hr />

               <div className="form-group row">
              <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}>Grade :</label>
                <div className="col-sm-6">
               {isEmpty(job.band) ? null : (
                 <span className="lead text-center" >{job.band}</span>
               )}
               </div>
               </div>

                <hr />

                <div className="form-group row">
                <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}>Staff Group :</label>
                  <div className="col-sm-6">
                 {isEmpty(job.staffGroup) ? null : (
                   <span className="lead text-center" >{job.staffGroup}</span>
                 )}
               </div>
               </div>

              <hr />

              <div className="form-group row">
              <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}> Salary :</label>
                <div className="col-sm-6">
               {isEmpty(job.salary) ? null : (
                 <span className="lead text-center" >{job.salary}</span>
               )}
             </div>
             </div>

              <hr />

              <div className="form-group row">
              <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}>Closing Date :</label>
                <div className="col-sm-6">
               {isEmpty(job.closingDate) ? null : (
                 <span className="lead text-center" >{job.closingDate}</span>
               )}
             </div>
             </div>

              <hr />

              <div className="form-group row">
              <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}>Contact :</label>
                <div className="col-sm-6">
               {isEmpty(job.contactName) ? null : (
                 <span className="lead text-center" >{job.contactName}</span>
               )}
             </div>
             </div>

              <hr />

               <div className="form-group row">
               <label  className="col-sm-6 col-form-label" style={{fontWeight: 'bold', color: '#990066'}}>Telephone :</label>
                 <div className="col-sm-6">
                {isEmpty(job.telephone) ? null : (
                  <span className="lead text-center" >{job.telephone}</span>
                )}
              </div>
              </div>



                <hr />

            <p>
                {isEmpty(job.website) ? null : (
                <Link
                  className="text-white p-2"
                  to={job.website}
                  target="_blank"
                >
                  <i className="fas fa-globe fa-2x" />
                </Link>
              )}
              </p>
            </div>
      </div>

      );
    }

    return (
      <div className="job">
        <div className="container"  >
          <div className="row">

            <div className="col-md-12">

              <div className="card card-body bg-info text-white mb-3">
            {jobContent}

            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Job.propTypes = {
  getJobByHandle: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired,
  auth:  PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  job: state.job,
  auth: state.auth
});

export default connect(mapStateToProps, { getJobByHandle })(Job);
