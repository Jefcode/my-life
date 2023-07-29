import { useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Sidebar from './components/sidebar/Sidebar';
import useSidebar from './hooks/useSidebar';
import classNames from './utils/classNames';

function App() {
	const { isOpen: isSidebarOpen } = useSidebar();

	// Remove the loader once the app mounts
	useEffect(() => {
		removeLoader();
	}, []);

	return (
		<>
			{/* Wrapper */}
			<div className="fixed top-0 left-0 bottom-0 right-0 flex overflow-hidden">
				<Sidebar />

				{/* Main Content */}
				<div className="flex-1 bg-stone-100">
					<main
						className={classNames(
							'py-8 h-full transition-all duration-300  overflow-y-auto px-2 sm:px-8 max-w-[100vw]',
							!isSidebarOpen ? 'lg:px-24' : ''
						)}
					>
						<Dashboard />
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

export default App;
