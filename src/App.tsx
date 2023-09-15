import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import DashboardPage from './pages/dashboard/Dashboard.page';
import NotFoundPage from './pages/NotFound.page';
import VideoCallPage from './pages/dashboard/VideoCall.page';
import ClientsPage from './pages/clients/Clients.page';
import ClientDetailPage from './pages/clients/ClientDetail.page';
import HubLayout from './pages/hub/Hub.layout';
import VideosPage from './pages/hub/Videos.page';
import PodcastsPage from './pages/hub/Podcasts.page';
import ArticlesPage from './pages/hub/Articles.page';
import MyProfilePage from './pages/profile/MyProfile.page';
import SettingsPage from './pages/settings/Settings.page';
import MyPaymentPage from './pages/profile/MyPayment.page';

function App() {
  // Remove loader once the app component mounts
  useEffect(() => {
    removeLoader();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard' />} />

        <Route element={<Layout />}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/dashboard/call/:userId' element={<VideoCallPage />} />
          <Route path='/clients' element={<ClientsPage />} />
          <Route path='/clients/:clientId' element={<ClientDetailPage />} />

          <Route path='/hub' element={<HubLayout />}>
            <Route path='' element={<Navigate to='videos' />} />
            <Route path='videos' element={<VideosPage />} />
            <Route path='podcasts' element={<PodcastsPage />} />
            <Route path='articles' element={<ArticlesPage />} />
          </Route>

          <Route path='/profile' element={<MyProfilePage />} />
          <Route path='/profile/my-payment' element={<MyPaymentPage />} />
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
