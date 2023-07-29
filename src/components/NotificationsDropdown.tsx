import { ReactComponent as CalendarIcon } from '../icons/calendar.svg';
import { ReactComponent as ClockIcon } from '../icons/clock.svg';
import Button from './Button';

const NotificationsDropdown = () => {
	return (
		<>
			{/* Backdrop */}
			<div className="fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-10"></div>
			{/* Dropdown */}
			<div className="bg-white top-full mt-5 rounded-xl w-[350px] p-5 absolute -right-10 z-20">
				{/* Header */}
				<div className="flex items-center justify-between">
					<p className="font-semibold text-lg">Notifications</p>

					<Button className="text-xs">Mark all as read</Button>
				</div>

				{/* Divider */}
				<div className="mt-5 border-b border-gray-100 w-full"></div>

				{/* Notifications List */}
				<ul className="divide-y divide-gray-100 text-sm">
					<li className="py-5 last:pb-0">
						<div className="w-full flex items-start gap-4 mb-4">
							<img
								src="/imgs/user-1.png"
								alt="User image"
								className="w-8 h-8 rounded-full object-cover"
							/>

							<div className="w-full">
								<div className="flex items-center justify-between">
									{/* User name */}
									<div className="font-semibold">Luke Addams</div>

									{/* Date */}
									<div className="text-stone-300 font-light">1 hour ago</div>
								</div>
								<p className="text-stone-400 font-light mb-2">
									Has scheduled a meeting with you
								</p>

								{/* Date and time */}
								<div className="flex items-center gap-3 text-primary text-xs">
									<div className="flex items-center gap-1">
										<CalendarIcon className="w-3.5 h-3.5" />
										<span>May 15, Thursday</span>
									</div>
									<div className="flex items-center gap-1">
										<ClockIcon className="w-3.5 h-3.5" />
										<span>12:00 - 01:00</span>
									</div>
								</div>
							</div>
						</div>
						{/* Buttons Flex Container */}
						<div className="flex items-center justify-between gap-1">
							<Button variant="primary" className="w-full text-xs !py-2">
								Accept
							</Button>
							<Button variant="tertiary" className="w-full text-xs !py-2">
								Reschadule
							</Button>
							<Button variant="tertiary" className="w-full text-xs !py-2">
								Decline
							</Button>
						</div>
					</li>
					<li className="py-5 last:pb-0">
						<div className="w-full flex items-start gap-4 mb-4">
							<img
								src="/imgs/user-1.png"
								alt="User image"
								className="w-8 h-8 rounded-full object-cover"
							/>

							<div className="w-full">
								<div className="flex items-center justify-between">
									{/* User name */}
									<div className="font-semibold">Luke Addams</div>

									{/* Date */}
									<div className="text-stone-300 font-light">1 hour ago</div>
								</div>
								<p className="text-stone-400 font-light mb-2">
									Has scheduled a meeting with you
								</p>

								{/* Date and time */}
								<div className="flex items-center gap-3 text-primary text-xs">
									<div className="flex items-center gap-1">
										<CalendarIcon className="w-3.5 h-3.5" />
										<span>May 15, Thursday</span>
									</div>
									<div className="flex items-center gap-1">
										<ClockIcon className="w-3.5 h-3.5" />
										<span>12:00 - 01:00</span>
									</div>
								</div>
							</div>
						</div>
						{/* Buttons Flex Container */}
						<div className="flex items-center justify-between gap-1">
							<Button variant="primary" className="w-full text-xs !py-2">
								Accept
							</Button>
							<Button variant="tertiary" className="w-full text-xs !py-2">
								Reschadule
							</Button>
							<Button variant="tertiary" className="w-full text-xs !py-2">
								Decline
							</Button>
						</div>
					</li>
					<li className="py-5 last:pb-0">
						<div className="w-full flex items-start gap-4 mb-4">
							<img
								src="/imgs/user-1.png"
								alt="User image"
								className="w-8 h-8 rounded-full object-cover"
							/>

							<div className="w-full">
								<div className="flex items-center justify-between">
									{/* User name */}
									<div className="font-semibold">Luke Addams</div>

									{/* Date */}
									<div className="text-stone-300 font-light">1 hour ago</div>
								</div>
								<p className="text-stone-400 font-light">
									Has scheduled a meeting with you
								</p>
							</div>
						</div>

						{/* Button */}
						<Button variant="primary" className="w-full !py-2">
							View updates
						</Button>
					</li>
				</ul>
			</div>
		</>
	);
};

export default NotificationsDropdown;
