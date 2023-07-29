import Appointments from './Appointments';
import Header from './Header';
import NextCalls from './next-calls/NextCalls';
import TodayStats from './TodayStats';
import UserGreeting from './UserGreeting';

const Dashboard = () => {
	return (
		<>
			<Header pageTitle="Dashboard" />

			{/* Panels Flex Container */}
			<div className="flex items-stretch flex-wrap">
				<div className="w-full xl:w-3/5">
					<div className="h-full flex flex-col gap-5">
						{/* Panel - User Greeting */}
						<UserGreeting />

						<TodayStats />

						{/* Panel - Next Calls */}
						<NextCalls />
					</div>
				</div>
				<div className="w-full py-5 xl:w-2/5 xl:pl-5 xl:py-0">
					{/* Panel - Calendar */}
					<Appointments />
				</div>
			</div>
		</>
	);
};

export default Dashboard;
