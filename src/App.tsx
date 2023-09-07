import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Dashboard from './pages/dashboard/Dashboard.page';
import NotFoundPage from './pages/NotFound.page';

function App() {
  // Remove loader once the app component mounts
  useEffect(() => {
    removeLoader();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Layout />}>
          <Route path='/' element={<Dashboard />} />
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
