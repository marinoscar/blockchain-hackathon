import { combineReducers } from 'redux';
import metisMenuReducer from 'react-metismenu/lib/reducers';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: formReducer,
  metisMenuReducer
});

export default rootReducer;
