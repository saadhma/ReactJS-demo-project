import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./views/Home/HomeScreen";
import PopularMoviesScreen from "./views/MovieScreens/PopularMoviesScreen";
import NowPlayingMoviesScreen from "./views/MovieScreens/NowPlayingMoviesScreen";
import UpcomingMoviesScreen from "./views/MovieScreens/UpcomingMoviesScreen";
import TopRatedMoviesScreen from "./views/MovieScreens/TopRatedMoviesScreen";
import PopularTVShowsScreen from "./views/TVShowsScreens/PopularTVShowsScreen";
import AiringTodayTVShowsScreen from "./views/TVShowsScreens/AiringTodayTVShowsScreen";
import CurrentlyAiringTVShowsScreen from "./views/TVShowsScreens/OnAirTVShowsScreen";
import TopRatedTVShowsScreen from "./views/TVShowsScreens/TopRatedTVShowsScreen";
import LoginScreen from "./views/AuthScreens/Login/LoginScreen";
import ResetPasswordScreen from "./views/AuthScreens/ResetPassword/ResetPasswordScreen";
import ResendEmailVerificationScreen from "./views/AuthScreens/ResendEmailVerfication/ResendEmailVerficationScreen";
import SignUpScreen from "./views/AuthScreens/SignUp/SignUpScreen";
import TermsOfUseScreen from "./views/LegalSectionScreens/TermsOfUse/TermsOfUseScreen";
import PrivacyPolicyScreen from "./views/LegalSectionScreens/PrivacyPolicy/PrivacyPolicyScreen";
import ContactUsScreen from "./views/LegalSectionScreens/ContactUs/ContactUsScreen";
import GeneralFAQScreen from "./views/FAQScreens/GeneralFAQ/GeneralFAQScreen";
import AccountFAQScreen from "./views/FAQScreens/AccountFAQ/AccountFAQScreen";
import WebsiteFAQScreen from "./views/FAQScreens/WebsiteFAQ/WebsiteFAQScreen";
import APIOverviewScreen from "./views/FAQScreens/APIOverview/APIOverviewScreen";
import APISessionsScreen from "./views/FAQScreens/APISessions/APISessionsScreen";
import DiscoverExamplesScreen from "./views/FAQScreens/DiscoverExamples/DiscoverExamplesScreen";
import MovieDetailsScreen from "./views/MovieScreens/MovieDetails/MovieDetailsScreen";
import CastAndCrewScreen from "./views/MovieScreens/Cast&Crew/Cast&CrewScreen";
import AlternativeTitlesScreen from "./views/MovieScreens/AlternativeTitles/AlternativeTitlesScreen";
import MovieReviewsScreen from "./views/MovieScreens/MovieReviews/MovieReviewsScreen";
import TVShowsDetailsScreen from "./views/TVShowsScreens/TVShowsDetails/TVShowsDetailsScreen";
import SearchScreen from "./views/SearchScreen/SearchScreen";
import TVShowsCastAndCrewScreen from "./views/TVShowsScreens/Cast&Crew/TVShowsCast&CrewScreen";
import TVShowsSeasonsScreen from "./views/TVShowsScreens/TVShowsSeasons/TVShowsSeasonsScreen";
import TVShowsSeasonDetailsScreen from "./views/TVShowsScreens/TVShowsSeasons/TVShowsSeasonDetailsScreen";
import TVShowReviewsScreen from "./views/TVShowsScreens/TVShowReviews/TVShowReviewsScreen";
import PopularPeopleScreen from "./views/PeopleScreens/PopularPeople/PopularPeopleScreen";

export default function RoutesScreen() {
    return (
        <Routes>
            <Route path="/" element={<HomeScreen/>} exact/>
            <Route path="/LoginScreen" element={<LoginScreen/>} exact/>
            <Route path="/SignUp" element={<SignUpScreen/>} exact/>
            <Route path="/ResetPassword" element={<ResetPasswordScreen/>} exact/>
            <Route path="/ResendEmailVerification" element={<ResendEmailVerificationScreen/>} exact/>
            <Route path="/PopularMoviesScreen" element={<PopularMoviesScreen/>} exact/>
            <Route path="/NowPlayingMoviesScreen" element={<NowPlayingMoviesScreen/>} exact/>
            <Route path="/UpcomingMoviesScreen" element={<UpcomingMoviesScreen/>} exact/>
            <Route path="/TopRatedMoviesScreen" element={<TopRatedMoviesScreen/>} exact/>
            <Route path="/PopularTVShowsScreen" element={<PopularTVShowsScreen/>} exact/>
            <Route path="/AiringTodayTVShowsScreen" element={<AiringTodayTVShowsScreen/>} exact/>
            <Route path="/CurrentlyAiringTVShowsScreen" element={<CurrentlyAiringTVShowsScreen/>} exact/>
            <Route path="/TopRatedTVShowsScreen" element={<TopRatedTVShowsScreen/>} exact/>
            <Route path="/TermsOfUseScreen" element={<TermsOfUseScreen/>} exact/>
            <Route path="/PrivacyPolicyScreen" element={<PrivacyPolicyScreen/>} exact/>
            <Route path="/ContactUsScreen" element={<ContactUsScreen/>} exact/>
            <Route path="/SearchScreen" element={<SearchScreen/>} exact/>
            <Route path="/PopularPeopleScreen" element={<PopularPeopleScreen/>} exact/>
            <Route path="/faq/general" element={<GeneralFAQScreen/>} exact/>
            <Route path="/faq/account" element={<AccountFAQScreen/>} exact/>
            <Route path="/faq/website" element={<WebsiteFAQScreen/>} exact/>
            <Route path="/documentation/api" element={<APIOverviewScreen/>} exact/>
            <Route path="/documentation/api/sessions" element={<APISessionsScreen/>} exact/>
            <Route path="/documentation/api/discover" element={<DiscoverExamplesScreen/>} exact/>
            <Route path="/movie/:id" element={<MovieDetailsScreen/>} exact/>
            <Route path="/movie/:id/cast" element={<CastAndCrewScreen/>} exact/>
            <Route path="/movie/:id/titles" element={<AlternativeTitlesScreen/>} exact/>
            <Route path="/movie/:id/reviews" element={<MovieReviewsScreen/>} exact/>
            <Route path="/tv/:id" element={<TVShowsDetailsScreen/>} exact/>
            <Route path="/tv/:id/cast" element={<TVShowsCastAndCrewScreen/>} exact/>
            <Route path="/tv/:id/seasons" element={<TVShowsSeasonsScreen/>} exact/>
            <Route path="/tv/:id/season/:index" element={<TVShowsSeasonDetailsScreen/>} exact/>
            <Route path="/tv/:id/reviews" element={<TVShowReviewsScreen/>} exact/>
        </Routes>
    )
}