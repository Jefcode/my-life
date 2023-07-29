import { motion } from 'framer-motion';
import { format, parseISO, getDay } from 'date-fns';
import { Meeting } from '../../data/meetings';
import { ReactComponent as CalendarIcon } from '../../icons/calendar.svg';
import { ReactComponent as ClockIcon } from '../../icons/clock.svg';
import { ReactComponent as UsersIcon } from '../../icons/users.svg';
import { ReactComponent as CloseIcon } from '../../icons/close.svg';
import Button from '../Button';
import { daysOfTheWeek } from '../calendar/Calendar';

interface MeetingModalProps {
	meeting: Meeting;
	onClose?: () => void;
}

const MeetingModal = ({ meeting, onClose }: MeetingModalProps) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="relative z-10"
		>
			{/* Backdrop */}
			<div
				className="fixed top-0 right-0 w-full h-full bg-black bg-opacity-60 z-10"
				onClick={onClose}
			></div>

			{/* Modal */}
			<div className="bg-white rounded-2xl fixed top-[50%] right-[50%] -translate-y-[50%] translate-x-[50%] max-w-[calc(100vw-20px)] w-[700px] max-h-[calc(100vh-20px)] z-20 overflow-y-auto scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-neutral-100">
				<div className="w-full h-full p-10 relative">
					{/* User Info */}
					<div className="flex flex-col sm:flex-row items-center gap-5 mb-8">
						<img
							src={meeting.imageUrl}
							alt="User Image"
							className="w-20 h-20 rounded-full object-cover"
						/>

						<div className="flex flex-col sm:w-full text-center sm:text-left">
							<span className="text-neutral-500">Meeting with</span>
							<p className="text-xl mb-1 font-semibold text-stone-800">
								Roya Simonetti
							</p>
							<div className="text-primary">Drugs</div>
						</div>
					</div>

					{/* Description */}
					<div className="text-stone-500 mb-10">
						{meeting.description}{' '}
						<a
							href=""
							className="text-primary inline-block border-b border-primary transition hover:text-red-700 hover:border-red-700"
						>
							View More
						</a>
					</div>

					{/* Steps */}
					<div className="flex flex-col gap-2 mb-10">
						<div className="flex items-center gap-3">
							<CalendarIcon className="text-primary w-6 h-6" />
							<span className="text-stone-500">
								{format(parseISO(meeting.startDatetime), 'MMMM d')},{' '}
								{daysOfTheWeek[getDay(parseISO(meeting.startDatetime))]}
							</span>
						</div>
						<div className="w-0.5 ml-2.5 h-10 bg-stone-300"></div>
						<div className="flex items-center gap-3">
							<ClockIcon className="text-primary w-6 h-6" />
							<span className="text-stone-500">
								{format(parseISO(meeting.startDatetime), 'hh:mm')} -{' '}
								{format(parseISO(meeting.endDatetime), 'hh:mm')}
							</span>
						</div>
						<div className="w-0.5 ml-2.5 h-10 bg-stone-300"></div>
						<div className="flex items-center gap-3">
							<UsersIcon className="text-primary w-6 h-6" />
							<ul className="flex items-center">
								<li className="first:ml-0 -ml-2">
									<img
										src="/imgs/user-1.png"
										alt="User Picture"
										className="w-8 h-8 rounded-full object-cover border border-white"
									/>
								</li>
								<li className="first:ml-0 -ml-2">
									<img
										src="/imgs/user-2.jpg"
										alt="User Picture"
										className="w-8 h-8 rounded-full object-cover border border-white"
									/>
								</li>
							</ul>
						</div>
					</div>

					{/* Button to start Call */}
					<Button variant="primary" className="!px-14">
						Start Call
					</Button>

					{/* Close Button */}
					<button
						className="absolute top-10 right-10 text-stone-600 hover:text-stone-900 transition"
						onClick={onClose}
					>
						<CloseIcon />
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default MeetingModal;
