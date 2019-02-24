import axios from 'axios';

import {
  GET_JOB,
  GET_JOBS,
  GET_JOBSEARCH,
  JOB_LOADING,
  GET_ERRORS
} from './types';


// Create Profile
export const createJob = (jobData, history) => dispatch => {
  axios
    .post('/api/jobs', jobData)

    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data

      })

    );

};


// Get all profiles
export const getJobs = () => dispatch => {
  dispatch(setJobLoading());
  axios
    .get('/api/jobs/all')
    .then(res =>
      dispatch({
        type: GET_JOBS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_JOBS,
        payload: null
      })
    );
};

// Search profile
export const postJobSearch = (jobData, history) => dispatch => {
  axios
    .post('/api/jobs', jobData)

    .then(res => history.push('/job-search'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data

      })

    );

};


// Get profile by jobName
export const getJobBySearch = title => dispatch => {
  dispatch(setJobLoading());
  axios
    .get(`/api/jobs/title/${title}`)
    .then(res =>
      dispatch({
        type: GET_JOBSEARCH,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_JOBSEARCH,
        payload: null
      })
    );
};



// Profile loading
export const setJobLoading = () => {
  return {
    type: JOB_LOADING
  };
};

// Get profile by handle
export const getJobByHandle = handle => dispatch => {
  dispatch(setJobLoading());
  axios
    .get(`/api/jobs/handle/${handle}`)
    .then(res =>
      dispatch({
        type: GET_JOB,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_JOB,
        payload: null
      })
    );
};
