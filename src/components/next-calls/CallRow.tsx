import { useState } from 'react';
import { Meeting } from '../../data/meetings';
import Button from '../common/Button';
import { format, parseISO } from 'date-fns';

import ReactDOM from 'react-dom';
import { AnimatePresence } from 'framer-motion';
import MeetingModal from '../modals/MeetingModal';

interface CallRowProps {
	meeting: Meeting;
}

const CallRow = ({ meeting }: CallRowProps) => {
	const [modalOpen, setModalOpen] = useState<boolean>(false);

	const openModalHandler = () => {
		setModalOpen(true);
	};

	return (
		<tr key={meeting.id} className="bg-white hover:bg-stone-50">
			{/* Client */}
			<td className="py-4 px-2">
				<div className="flex items-center gap-3">
					<img
						src={meeting.imageUrl}
						className="hidden sm:block w-12 h-12 rounded-full object-cover object-center"
						alt="Client's image"
					/>
					<div>
						<p className="font-semibold text-lg leading-tight text-stone-700">
							{meeting.name}
						</p>
						<span className="text-primary">Drugs</span>
					</div>
				</div>
			</td>
			<td className="py-4 px-2">
				<span className="text-stone-500">
					{format(parseISO(meeting.startDatetime), 'MMMM d')}
				</span>
			</td>
			<td className="py-4 px-2">
				<span className="text-stone-500">
					{format(parseISO(meeting.startDatetime), 'hh:mm')} -{' '}
					{format(parseISO(meeting.endDatetime), 'hh:mm')}
				</span>
			</td>
			<td className="py-4 px-2 pr-2">
				<Button
					variant="tertiary"
					className="ml-auto"
					onClick={openModalHandler}
				>
					Join Call
				</Button>
			</td>

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
		</tr>
	);
};

export default CallRow;
