import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home/Home";
import PopularMoviesScreen from "./views/MovieScreens/PopularMoviesScreen";
import NowPlayingMoviesScreen from "./views/MovieScreens/NowPlayingMoviesScreen";
import UpcomingMoviesScreen from "./views/MovieScreens/UpcomingMoviesScreen";
import TopRatedMoviesScreen from "./views/MovieScreens/TopRatedMoviesScreen";
import PopularTVShowsScreen from "./views/TVShowsScreens/PopularTVShowsScreen";
import AiringTodayTVShowsScreen from "./views/TVShowsScreens/AiringTodayTVShowsScreen";
import CurrentlyAiringTVShowsScreen from "./views/TVShowsScreens/OnTVShowsScreen";
import TopRatedTVShowsScreen from "./views/TVShowsScreens/TopRatedTVShowsScreen";
import LoginScreen from "./views/AuthScreens/Login/LoginScreen";
import ResetPasswordScreen from "./views/AuthScreens/ResetPassword/ResetPasswordScreen";
import ResendEmailVerificationScreen from "./views/AuthScreens/ResendEmailVerfication/ResendEmailVerficationScreen";
import SignUpScreen from "./views/AuthScreens/SignUp/SignUpScreen";

export default function RoutesScreen() {
    return (
        <Routes>
            <Route path="/" element={<Home/>} exact/>
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
        </Routes>
    )
}