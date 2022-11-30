import { GET_PERSON_CAREER_DETAILS_FAILED, GET_PERSON_CAREER_DETAILS_REQUESTED, GET_PERSON_CAREER_DETAILS_SUCCESS, GET_PERSON_COMBINED_CREDITS_FAILED, GET_PERSON_COMBINED_CREDITS_REQUESTED, GET_PERSON_COMBINED_CREDITS_SUCCESS, GET_PERSON_DETAILS_FAILED, GET_PERSON_DETAILS_REQUESTED, GET_PERSON_DETAILS_SUCCESS, GET_POPULAR_PEOPLE_FAILED, GET_POPULAR_PEOPLE_REQUESTED, GET_POPULAR_PEOPLE_SUCCESS } from '../Actions/actionTypes';
import { fromJS } from 'immutable';

const initialState = fromJS({
    loading: false,
    popularPeopleData: null,
    personDetailsData: null,
    personCareerDetailsData: null,
    personCombinedCreditsData: null,
    error: null,
});

export const peopleReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POPULAR_PEOPLE_REQUESTED || GET_PERSON_DETAILS_REQUESTED ||
            GET_PERSON_CAREER_DETAILS_REQUESTED || GET_PERSON_COMBINED_CREDITS_REQUESTED:
            return state.set('loading', true)
        case GET_POPULAR_PEOPLE_SUCCESS:
            return state.set('popularPeopleData', action.popularPeopleData)
        case GET_PERSON_DETAILS_SUCCESS:
            return state.set('personDetailsData', action.personDetailsData)
        case GET_PERSON_CAREER_DETAILS_SUCCESS:
            return state.set('personCareerDetailsData', action.personCareerDetailsData)
        case GET_PERSON_COMBINED_CREDITS_SUCCESS:
            return state.set('personCombinedCreditsData', action.personCombinedCreditsData)
        case GET_POPULAR_PEOPLE_FAILED || GET_PERSON_DETAILS_FAILED || GET_PERSON_CAREER_DETAILS_FAILED || GET_PERSON_COMBINED_CREDITS_FAILED:
            return state.set('loading', false).set('error', action.message)
        default:
            return state;
    }
}
