import {ActionType} from './action-types';
import {DataType} from '../reducers/namespace';


const requestData = (dataType) => ({
    dataType,
    type: ActionType.REQUEST_DATA
});

const receiveData = (dataType, json) => ({
    type: ActionType.RECEIVE_DATA,
    dataType,
    payload: json
});

const logError = (dataType, error) => ({
    type: ActionType.LOG_ERROR,
    dataType,
    payload: error
});

export const fetchData = (url, dataType) => (dispatch) => {
    dispatch(requestData(dataType));

    return fetch(url)
        .then(
            (response) => response.json(),
            (error) => dispatch(logError(dataType, error.message))
        )
        .then((data) => dispatch(receiveData(dataType, data)));
};

export const fetchMenu = () => fetchData('mock/menu.json', DataType.MENU);
export const fetchPromoCodes = () => fetchData('mock/promo-codes.json', DataType.PROMO_CODES);
