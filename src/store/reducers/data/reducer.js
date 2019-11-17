import {ActionType} from '../../actions/action-types';
import {DataType} from '../namespace';


const initialState = {
    [DataType.MENU]: {
        isFetching: false,
        error: '',
        items: []
    },
    [DataType.PROMO_CODES]: {
        isFetching: false,
        error: '',
        items: []
    }
};

const setData = (state = {...initialState.menu}, action) => {
    switch (action.type) {
        case ActionType.LOG_ERROR:
            return {
                ...state,
                isFetching: false,
                error: action.payload
            };
        case ActionType.REQUEST_DATA:
            return {
                ...state,
                isFetching: true
            };
        case ActionType.RECEIVE_DATA:
            return {
                ...state,
                isFetching: false,
                items: action.payload
            };
        default:
            return state;
    }
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.REQUEST_DATA:
        case ActionType.RECEIVE_DATA:
        case ActionType.LOG_ERROR:
            return {
                ...state,
                [action.dataType]: setData(state[action.dataType], action)
            };
        default:
            return state;
    }
};

export default dataReducer;
