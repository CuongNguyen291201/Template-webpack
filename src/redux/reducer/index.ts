import { combineReducers } from 'redux';
import usersReducerSubModule from '../../modules/common/redux/reducers/userReducer';
import { assignmentReducer } from './assignment';


const rootReducers = combineReducers({
    assignmentState: assignmentReducer,
    userReducer: usersReducerSubModule,
});
export default rootReducers;
