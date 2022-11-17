// API Key

// 3161dc5d20e56e746f849ecd2466c1bf

// Example API Request

// https://api.themoviedb.org/3/movie/550?api_key=3161dc5d20e56e746f849ecd2466c1bf

// API Read Access Token (v4 auth)

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMTYxZGM1ZDIwZTU2ZTc0NmY4NDllY2QyNDY2YzFiZiIsInN1YiI6IjYzNzM0NDFlMDI4NDIwMDA3YTFkNjc3MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._1BEUC8zCOJ-J5mqMr-vFrLpaPCpJLcaWWZZ4NiPOYg

export const BASE_URL = 'https://api.themoviedb.org/3';

// MOVIES RELATED CONSTANTS

export const STREAMMING_MOVIES_URL = `${BASE_URL}/trending/movie/week`;
export const FREE_MOVIES_URL = `${BASE_URL}/movie/top_rated`;
export const TRENDING_MOVIES_URL = `${BASE_URL}/trending/movie/day`;
export const POPULAR_MOVIES_URL = `${BASE_URL}/movie/popular`;
export const NOW_PLAYING_MOVIES_URL = `${BASE_URL}/movie/now_playing`;
export const UPCOMING_MOVIES_URL = `${BASE_URL}/movie/upcoming`;
export const TOP_RATED_MOVIES_URL = `${BASE_URL}/movie/top_rated`;
export const MOVIE_DETAILS_URL = `${BASE_URL}/movie/`;

// TV SHOWS RELATED CONSTANTS

export const POPULAR_TV_SHOWS_URL = `${BASE_URL}/tv/popular`;
export const AIRING_TODAY_TV_SHOWS_URL = `${BASE_URL}/tv/airing_today`;
export const ON_AIR_TV_SHOWS_URL = `${BASE_URL}/tv/on_the_air`;
export const TOP_RATED_TV_SHOWS_URL = `${BASE_URL}/tv/top_rated`;

// KEYS

export const API_KEY = '3161dc5d20e56e746f849ecd2466c1bf';

export const POSTER_IMAGE_BASE_URL = 'https://www.themoviedb.org/t/p/w440_and_h660_face/';