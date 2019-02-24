import axios from 'axios';

import {
  GET_APPLICATION,
  GET_APPLICATIONS,
  APPLICATION_LOADING,
  GET_ERRORS
} from './types';


// Create Application
export const createApplication = (applicantData, history) => dispatch => {
  axios
    .post('/api/applicants', applicantData)

    .then(res => history.push('/dashboard', alert('Application submitted')))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data

      })

    );

};


// Get all profiles
export const getApplications = () => dispatch => {
  dispatch(setApplicationLoading());
  axios
    .get('/api/applicants/all')
    .then(res =>
      dispatch({
        type: GET_APPLICATIONS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_APPLICATIONS,
        payload: null
      })
    );
};

// Profile loading
export const setApplicationLoading = () => {
  return {
    type: APPLICATION_LOADING
  };
};

// Get profile by handle
export const getApplicationById = _id => dispatch => {
  dispatch(setApplicationLoading());
  axios
    .get(`/api/applicants/_id/${_id}`)
    .then(res =>
      dispatch({
        type: GET_APPLICATION,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_APPLICATION,
        payload: null
      })
    );
};
