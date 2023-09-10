import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Layout from './components/layout/Layout';
import DashboardPage from './pages/dashboard/Dashboard.page';
import NotFoundPage from './pages/NotFound.page';
import VideoCallPage from './pages/dashboard/VideoCall.page';
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
