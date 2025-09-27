
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/Auth/LoginPage';
import AdminHomePage from './pages/Admin/Dashboard/AdminHomePage';
import LandingPage from './pages/LandingPage';
import TrendingPage from './pages/Admin/Dashboard/TrendingPage';
import CategoriesPage from './pages/Admin/Dashboard/CategoriesPage';
import WatchlistsPage from './pages/Admin/Dashboard/WatchlistsPage';
import ExplorePage from './pages/Admin/Dashboard/ExplorePage';
import SeriesPage from './pages/Admin/Dashboard/SeriesPage';
import DownloadPage from './pages/Admin/Dashboard/DownloadPage';
import SingleMoviePage from './pages/Admin/Dashboard/SingleMoviePage';
import ProfilePage from './pages/Admin/Dashboard/ProfilePage';
import RegisterPage from './pages/Auth/RegisterPage';
import ForgotPage from './pages/Auth/Forgot/ForgotPage';
import OtpPage from './pages/Auth/Forgot/OtpPage';
import PasswordPage from './pages/Auth/Forgot/PasswordPage';
const AdminLayout = lazy(() => import('./components/admin/Layout'));



function App() {

  return (
    <>
      <Toaster />
      <BrowserRouter>

        <Routes>

          <Route path="/dashboard/" element={<AdminLayout />}>
            <Route path="home" element={<AdminHomePage />} />
            <Route path="trending" element={<TrendingPage />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="watchlists" element={<WatchlistsPage />} />
            <Route path="explore" element={<ExplorePage />} />
            <Route path="series" element={<SeriesPage />} />
            <Route path="downloads" element={<DownloadPage />} />
            <Route path="profile" element={<ProfilePage />} />
            <Route path="categories/movie/:id" element={<SingleMoviePage />} />
          </Route>


          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/forgot' element={<ForgotPage />} />
          <Route path='/forgot/otp' element={<OtpPage />} />
          <Route path='/forgot/password' element={<PasswordPage />} />
          <Route path='/' element={<LandingPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
