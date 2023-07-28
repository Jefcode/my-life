import ReactDOM from 'react-dom';
import { format, parseISO } from 'date-fns';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Meeting } from '../../data/meetings';
import { ReactComponent as ClockIcon } from '../../icons/clock.svg';
import { ReactComponent as CheckIcon } from '../../icons/check.svg';
import Button from '../Button';
import MeetingModal from '../modals/MeetingModal';

interface MeetingItemProps {
	meeting: Meeting;
}

const MeetingItem = ({ meeting }: MeetingItemProps) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	const openModal = () => setModalOpen(true);

	return (
		<li className="p-5 border border-stone-100 rounded-lg">
			{/* Flex Container */}
			<div className="flex items-center">
				<img
					src={meeting.imageUrl}
					alt="User Image"
					className="rounded-full w-14 h-14 object-cover mr-5"
				/>
				<div className="flex flex-col">
					<span
						className={`${
							meeting.done ? 'text-green-500' : 'text-primary'
						} flex items-center gap-2`}
					>
						{meeting.done ? (
							<CheckIcon className="w-4 h-4" />
						) : (
							<ClockIcon className="w-4 h-4" />
						)}
						<span
							className={`${meeting.done && 'text-slate-400 line-through'}`}
						>
							{format(parseISO(meeting.startDatetime), 'hh:mm')} -{' '}
							{format(parseISO(meeting.endDatetime), 'hh:mm')}
						</span>
					</span>
					<p className="font-semibold text-xl">{meeting.name}</p>
				</div>

				{/* Button */}
				<Button
					className="ml-auto"
					variant="primary"
					disabled={meeting.done}
					onClick={openModal}
				>
					Join Call
				</Button>
			</div>

			{/* Meeting Modal */}
			{ReactDOM.createPortal(
				<AnimatePresence>
					{modalOpen && (
						<MeetingModal
							meeting={meeting}
							onClose={() => setModalOpen(false)}
						/>
					)}
				</AnimatePresence>,
				document.getElementById('overlay') as HTMLElement
			)}
		</li>
	);
};

export default MeetingItem;
