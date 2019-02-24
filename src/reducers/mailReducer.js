import {GET_MAIL, GET_MAILS} from '../actions/types'

const initialState = {
  mail: null,
  jobs: null
}

export default function(state = initialState, action) {
  switch(action.type) {

  case GET_MAIL:
  return {
    ...state,
    job: action.payload,
    loading: false
  }
    case GET_MAILS:
    return {
      ...state,
      jobs: action.payload,
      loading: false
    }

    default:
    return state
  }
}
