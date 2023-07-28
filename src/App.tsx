import { useEffect } from 'react';
import Dashboard from './Dashboad';
// import MeetingModal from './components/modals/MeetingModal';
import Sidebar from './components/sidebar/Sidebar';

function App() {
	// Remove the loader once the app mounts
	useEffect(() => {
		const loader = document.querySelector('.loader-wrapper') as HTMLDivElement;

		loader.classList.add('opacity-0', 'invisible');
	}, []);

	return (
		<>
			{/* <MeetingModal /> */}

			{/* Wrapper */}
			<div className="flex w-screen overflow-hidden">
				<Sidebar />

				{/* Main Content */}
				<div className="flex-1 h-screen bg-stone-100">
					<main className="px-8 py-8 h-full overflow-y-auto">
						<Dashboard />
					</main>
				</div>
			</div>
		</>
	);
}

export default App;
