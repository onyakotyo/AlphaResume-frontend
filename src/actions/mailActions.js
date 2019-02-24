import axios from 'axios';

import {
  GET_MAIL,
  GET_MAILS,
  GET_ERRORS
} from './types';


// Create Profile
export const registerMail = (mailData, history) => dispatch => {
  axios
    .post('/api/mailer', mailData)

    .then(res => history.push('/dashboard'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data

      })



    );



};
