import { ReactComponent as CalendarIcon } from '../icons/calendar-active.svg';
import Button from './Button';
import Calendar from './calendar/Calendar';
import Header from './Header';
import NextCalls from './next-calls/NextCalls';
import TodayStats from './TodayStats';

const Dashboard = () => {
	return (
		<>
			<Header pageTitle="Dashboard" />

			{/* Panels Flex Container */}
			<div className="flex items-stretch flex-wrap">
				<div className="w-full xl:w-3/5">
					<div className="h-full flex flex-col gap-5">
						{/* Panel - User Greeting */}
						<div className="rounded-2xl bg-white p-8">
							<div className="flex flex-col sm:flex-row sm:items-center">
								{/* User Image/text */}
								<div className="flex items-center">
									<img
										src="/imgs/profile.png"
										className="hidden sm:block w-26 h-26 rounded-full mr-4"
										alt="Profile picture"
									/>

									{/* User Greeting */}
									<div className="flex flex-col gap-1">
										{/* Current Day */}
										<time className="text-primary" dateTime="5-5-2023">
											May 15, Thursday
										</time>

										{/* Greeting Text */}
										<p className="font-semibold text-3xl text-stone-700">
											Hello Dr. Maria!
										</p>

										{/* User Info */}
										<p className="text-stone-400 leading-tight mt-2 max-w-[220px]">
											British Association for Counselling & Psychotheraphy
										</p>
									</div>
								</div>

								{/* Buttons */}
								<div className="flex flex-row flex-wrap sm:flex-col gap-4 mt-4 sm:mt-0 sm:ml-auto">
									<Button className="!px-8 flex-1">My License</Button>
									<Button className="!px-8 flex-1">Edit Profile</Button>
								</div>
							</div>
						</div>

						<TodayStats />

						{/* Panel - Next Calls */}
						<NextCalls />
					</div>
				</div>
				<div className="w-full py-5 xl:w-2/5 xl:pl-5 xl:py-0">
					{/* Panel - Calendar */}
					<div className="bg-white rounded-3xl p-5 h-full">
						{/* Panel Title Flex Container */}
						<div className="flex items-center flex-wrap gap-5 justify-between mb-10">
							<div className="flex items-center gap-2">
								<CalendarIcon />
								<span className="text-stone-800 font-semibold text-xl">
									Appointments
								</span>
							</div>

							<Button>See all</Button>
						</div>
						<Calendar />
					</div>
				</div>
			</div>
		</>
	);
};

export default Dashboard;
