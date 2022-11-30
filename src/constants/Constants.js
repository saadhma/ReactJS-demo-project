// API Key

// 3161dc5d20e56e746f849ecd2466c1bf

// Example API Request

// https://api.themoviedb.org/3/movie/550?api_key=3161dc5d20e56e746f849ecd2466c1bf

// API Read Access Token (v4 auth)

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTYxZGM1ZDIwZTU2ZTc0NmY4NDllY2QyNDY2YzFiZiIsInN1YiI6IjYzNzM0NDFlMDI4NDIwMDA3YTFkNjc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1BEUC8zCOJ-J5mqMr-vFrLpaPCpJLcaWWZZ4NiPOYg

export const BASE_URL = 'https://api.themoviedb.org/3';

// MOVIES RELATED URL LINKS

export const STREAMMING_MOVIES_URL = `${BASE_URL}/trending/movie/week`;
export const FREE_MOVIES_URL = `${BASE_URL}/movie/top_rated`;
export const TRENDING_MOVIES_URL = `${BASE_URL}/trending/movie/day`;
export const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular`;
export const NOW_PLAYING_MOVIES_URL = `${BASE_URL}/movie/now_playing`;
export const UPCOMING_MOVIES_URL = `${BASE_URL}/movie/upcoming`;
export const TOP_RATED_MOVIES_URL = `${BASE_URL}/movie/top_rated`;
export const MOVIE_DETAILS_URL = `${BASE_URL}/movie/`;

// TV SHOWS RELATED URL LINKS

export const POPULAR_TV_SHOWS_URL = `${BASE_URL}/tv/popular`;
export const AIRING_TODAY_TV_SHOWS_URL = `${BASE_URL}/tv/airing_today`;
export const ON_AIR_TV_SHOWS_URL = `${BASE_URL}/tv/on_the_air`;
export const TOP_RATED_TV_SHOWS_URL = `${BASE_URL}/tv/top_rated`;
export const TV_SHOWS_DETAILS_URL = `${BASE_URL}/tv/`;

// SEARCH RELATED URL LINKS

export const SEARCH_MOVIES_URL = `${BASE_URL}/search/movie`;
export const SEARCH_TV_SHOWS_URL = `${BASE_URL}/search/tv`;
export const SEARCH_PEOPLE_URL = `${BASE_URL}/search/person`;
export const SEARCH_COLLECTION_URL = `${BASE_URL}/search/collection`;
export const SEARCH_COMPANIES_URL = `${BASE_URL}/search/company`;
export const SEARCH_KEYWORDS_URL = `${BASE_URL}/search/keyword`;

// PEOPLE URL LINKS

export const SEARCH_POPULAR_PEOPLE_URL = `${BASE_URL}/person/popular`;
export const SEARCH_PERSON_DETAILS_URL = `${BASE_URL}/person/`;

// KEYS

export const API_KEY = '3161dc5d20e56e746f849ecd2466c1bf';

export const POSTER_IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w440_and_h660_face/';