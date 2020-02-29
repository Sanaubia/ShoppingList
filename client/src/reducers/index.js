import {combineReducers} from 'redux';
import itemReduced from './itemReducer';

export default combineReducers({
    item: itemReduced
});