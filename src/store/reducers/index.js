import {combineReducers} from 'redux';

import dataReducer from './data/reducer';
import NameSpace from './namespace';


export default combineReducers({
    [NameSpace.DATA]: dataReducer
});
