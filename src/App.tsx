import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layouts/Layout';
import DashboardPage from './pages/Dashboard.page';
import NotFoundPage from './pages/NotFound.page';
import VideoCallPage from './pages/VideoCall.page';
import ClientsPage from './pages/Clients.page';
import ClientDetailPage from './pages/ClientDetail.page';
import HubLayout from './components/layouts/Hub.layout';
import VideosPage from './pages/hub/Videos.page';
import PodcastsPage from './pages/hub/Podcasts.page';
import ArticlesPage from './pages/hub/Articles.page';
import MyProfilePage from './pages/profile/MyProfile.page';
import SettingsPage from './pages/Settings.page';
import MyPaymentPage from './pages/profile/MyPayment.page';
import AppointmentsPage from './pages/Appointments.page';
import MyMediaPage from './pages/profile/MyMedia.page';
import EditProfilePage from './pages/profile/EditProfile.page';
import LoginPage from './pages/Login.page';

function App() {
  // Remove loader once the app component mounts
  useEffect(() => {
    removeLoader();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage />} />

        <Route element={<Layout />}>
          <Route index element={<Navigate to='/dashboard' replace />} />
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/dashboard/call/:userId' element={<VideoCallPage />} />

          <Route path='/clients' element={<ClientsPage />} />
          <Route path='/clients/:clientId' element={<ClientDetailPage />} />

          <Route path='/appointments' element={<AppointmentsPage />} />

          <Route path='/hub' element={<HubLayout />}>
            <Route path='' element={<Navigate to='videos' replace />} />
            <Route path='videos' element={<VideosPage />} />
            <Route path='podcasts' element={<PodcastsPage />} />
            <Route path='articles' element={<ArticlesPage />} />
          </Route>

          <Route path='/profile' element={<MyProfilePage />} />
          <Route path='/profile/edit' element={<EditProfilePage />} />
          <Route path='/profile/my-payment' element={<MyPaymentPage />} />
          <Route path='/profile/my-media' element={<MyMediaPage />} />

          <Route path='/settings' element={<SettingsPage />} />
        </Route>

        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

// Remove preloader on component mount
function removeLoader() {
  const loader = document.querySelector('.loader-wrapper') as HTMLDivElement;
  loader.classList.add('opacity-0', 'invisible');
}

export default App;
