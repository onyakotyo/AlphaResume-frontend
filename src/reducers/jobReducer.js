import {GET_JOBS, GET_JOB, JOB_LOADING, GET_JOBSEARCH } from '../actions/types'

const initialState = {
  job: null,
  jobs: null,
  loading: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case JOB_LOADING:
    return {
      ...state,
      loading : true
    }

  case GET_JOB:
  return {
    ...state,
    job: action.payload,
    loading: false
  }
  case GET_JOBSEARCH:
  return {
    ...state,
    job: action.payload,
    loading: false
  }
    case GET_JOBS:
    return {
      ...state,
      jobs: action.payload,
      loading: false
    }




    default:
    return state
  }
}
