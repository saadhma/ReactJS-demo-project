import { GET_POPULAR_PEOPLE_REQUESTED } from "./actionTypes";

export function fetchPopularPeople() {
    return {
        type: GET_POPULAR_PEOPLE_REQUESTED,
    }
}