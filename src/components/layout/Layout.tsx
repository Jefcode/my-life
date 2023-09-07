import { stagger, useAnimate } from 'framer-motion';
import { useEffect, useCallback } from 'react';

import useSidebar from '../../hooks/useSidebar';
import classNames from '../../utils/classNames';
import Sidebar from '../sidebar/Sidebar';
import Header from '../header/Header';

interface LayoutProps {
  children?: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
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

  // Remove the loader once the app mounts
  useEffect(() => {
    removeLoader();

    animateCards();
  }, [animate, animateCards]);

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
              {children}
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

// Remove preloader on component mount
function removeLoader() {
  const loader = document.querySelector('.loader-wrapper') as HTMLDivElement;
  loader.classList.add('opacity-0', 'invisible');
}

export default Layout;
