import { stagger, useAnimate } from 'framer-motion';
import { useEffect, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import useSidebar from '../../hooks/useSidebar';
import classNames from '../../utils/classNames';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';

function Layout() {
  const { pathname } = useLocation();

  const [scope, animate] = useAnimate();
  const { isOpen: isSidebarOpen } = useSidebar();

  const animateCards = useCallback(async () => {
    // Animate Each item that has 'card' class, one by one
    await animate(
      '.card',
      { opacity: 1 },
      { delay: stagger(0.5, { startDelay: 1 }) }
    );
  }, [animate]);

  useEffect(() => {
    animateCards().catch(() => {});
  }, [animateCards, pathname]);

  return (
    <>
      {/* Wrapper */}
      <div className='fixed top-0 left-0 bottom-0 right-0 flex overflow-hidden'>
        <Sidebar />

        {/* Main Content */}
        <div className='flex-1 bg-stone-100' ref={scope}>
          <main
            className={classNames(
              'py-8 h-full transition-all duration-300 overflow-y-auto px-2 sm:px-8 max-w-[100vw]',
              !isSidebarOpen ? 'lg:px-24' : ''
            )}
          >
            <div className='relative'>
              <Header />
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
