import { GrMenu, GrFormClose } from 'react-icons/gr';
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import { ReactComponent as CalendarIcon } from '../icons/calendar-active.svg';
import Button from './Button';
import Calendar from './calendar/Calendar';
import NextCalls from './next-calls/NextCalls';
import TodayStats from './TodayStats';
import useSidebar from '../hooks/useSidebar';

const Dashboard = () => {
	const { open, close, isOpen } = useSidebar();

	return (
		<>
			{/* Header Flex Container */}
			<div className="flex items-center justify-between mb-8">
				{/* Title of the page */}
				<div className="flex items-center gap-3">
					<h1 className="text-2xl font-semibold">Dashboard</h1>
				</div>

				{/* NOTIFICATION/USER MENU Flex container */}
				<div className="flex items-center gap-4">
					<button className="rounded-full flex items-center justify-center cursor-pointer text-stone-700 w-10 h-10 bg-white relative">
						<BellIcon />
						<div className="bg-primary absolute flex items-center justify-center top-0 -right-1 text-white w-4 h-4 text-xs rounded-full">
							3
						</div>
					</button>

					{/* User Menu */}
					<button
						className="h-10 w-10 rounded-full bg-cover bg-center relative"
						// For Dynamic Image rendering
						style={{ backgroundImage: 'url("/imgs/profile.png")' }}
					>
						{/* Online Status */}
						<div className="w-2.5 h-2.5 bg-primary rounded-full border-2 border-white absolute bottom-0 right-0"></div>
					</button>

					<button className="rounded-full lg:hidden  cursor-pointer text-stone-700 bg-white relative">
						{!isOpen ? (
							<div
								className="w-10 h-10 flex items-center justify-center"
								onClick={open}
							>
								<GrMenu />
							</div>
						) : (
							<div
								className="w-10 h-10 flex items-center justify-center"
								onClick={open}
							>
								<GrFormClose size={22} onClose={close} />
							</div>
						)}
					</button>
				</div>
			</div>

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
