import { GET_PERSON_CAREER_DETAILS_REQUESTED, GET_PERSON_COMBINED_CREDITS_REQUESTED, GET_PERSON_DETAILS_REQUESTED, GET_POPULAR_PEOPLE_REQUESTED } from "./actionTypes";

export function fetchPopularPeople() {
    return {
        type: GET_POPULAR_PEOPLE_REQUESTED,
    }
}

export function fetchPersonDetails(id) {
    return {
        type: GET_PERSON_DETAILS_REQUESTED,
        payload: id
    }
}

export function fetchPersonCareerDetails(id) {
    return {
        type: GET_PERSON_CAREER_DETAILS_REQUESTED,
        payload: id
    }
}

export function fetchPersonCombinedCredits(id) {
    return {
        type: GET_PERSON_COMBINED_CREDITS_REQUESTED,
        payload: id
    }
}