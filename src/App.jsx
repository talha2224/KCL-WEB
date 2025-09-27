
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { lazy } from 'react';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/Auth/LoginPage';
import AdminHomePage from './pages/Admin/Dashboard/AdminHomePage';
import AdminTransactionage from './pages/Admin/Dashboard/AdminTransactionage';
import AdminUserPage from './pages/Admin/Dashboard/AdminUserPage';
import AdminSupportPage from './pages/Admin/Dashboard/AdminSupportPage';
import LandingPage from './pages/LandingPage';
import AdminProfilePage from './pages/Admin/Dashboard/AdminProfilePage';
import TrendingPage from './pages/Admin/Dashboard/TrendingPage';
import CategoriesPage from './pages/Admin/Dashboard/CategoriesPage';
import WatchlistsPage from './pages/Admin/Dashboard/WatchlistsPage';
import ExplorePage from './pages/Admin/Dashboard/ExplorePage';
import SeriesPage from './pages/Admin/Dashboard/SeriesPage';
import DownloadPage from './pages/Admin/Dashboard/DownloadPage';
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
          </Route>


          <Route path='/login' element={<LoginPage />} />
          <Route path='/' element={<LandingPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
