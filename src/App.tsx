import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster, toast } from 'react-hot-toast';

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
import queryClient from './lib/react-query/queryClient';

function App() {
  // Remove loader once the app component mounts
  useEffect(() => {
    removeLoader();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
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

      <Toaster>
        {(t) => (
          <div
            className={`${
              t.visible ? 'animate-enter' : 'animate-leave'
            } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
          >
            <div className='flex-1 w-0 p-4'>
              <div className='flex items-start'>
                <div className='flex-shrink-0 pt-0.5'>
                  <img
                    className='h-10 w-10 rounded-full'
                    src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80'
                    alt=''
                  />
                </div>
                <div className='ml-3 flex-1'>
                  <p className='text-sm font-medium text-gray-900'>
                    Emilia Gates
                  </p>
                  <p className='mt-1 text-sm text-gray-500'>
                    {t.message?.toString()}
                  </p>
                </div>
              </div>
            </div>
            <div className='flex border-l border-gray-200'>
              <button
                onClick={() => toast.dismiss(t.id)}
                className='w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Toaster>
    </QueryClientProvider>
  );
}

// Remove preloader on component mount
function removeLoader() {
  const loader = document.querySelector('.loader-wrapper') as HTMLDivElement;
  loader.classList.add('opacity-0', 'invisible');
}

export default App;
