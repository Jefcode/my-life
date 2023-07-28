import Dashboard from './Dashboad';
// import MeetingModal from './components/modals/MeetingModal';
import Sidebar from './components/sidebar/Sidebar';

function App() {
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
