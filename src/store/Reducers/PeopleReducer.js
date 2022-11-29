import { GET_POPULAR_PEOPLE_FAILED, GET_POPULAR_PEOPLE_REQUESTED, GET_POPULAR_PEOPLE_SUCCESS } from '../Actions/actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
    loading: false,
    popularPeopleData: null,
    error: null,
});

export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POPULAR_PEOPLE_REQUESTED:
            return state.set('loading', true)
        case GET_POPULAR_PEOPLE_SUCCESS:
            return state.set('popularPeopleData', action.popularPeopleData)
        case GET_POPULAR_PEOPLE_FAILED:
            return state.set('loading', false).set('error', action.message)
        default:
            return state;
    }
}
