import { combineReducers } from 'redux'
import authReducer from './authReducer'
import errorReducer from  './errorReducer'
import profileReducer from './profileReducer'
import jobReducer from './jobReducer'
import applicantsReducer from './applicantsReducer'
//import postReducer from './postReducer'

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  job: jobReducer,
  application: applicantsReducer
  //posts: postReducer
})
