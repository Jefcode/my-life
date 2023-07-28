import Button from '../Button';
import { ReactComponent as CameraIcon } from '../../icons/camera.svg';
import { ReactComponent as FilterIcon } from '../../icons/filter-active.svg';
import { useMemo } from 'react';
import meetings from '../../data/meetings';
import { parseISO } from 'date-fns';
import CallRow from './CallRow';

const NextCalls = () => {
	const nextMeetings = useMemo(() => {
		return meetings.filter(
			(meeting) =>
				parseISO(meeting.startDatetime) > parseISO(new Date().toISOString()) &&
				meeting.done !== true
		);
	}, []);

	return (
		<div className="bg-white rounded-2xl p-5 flex-auto">
			{/* Panel Name / Filter Flex Container */}
			<div className="flex items-center justify-between">
				<div className="flex items-center gap-2">
					<CameraIcon />
					<span className="text-stone-800 font-semibold text-xl">
						Next calls
					</span>
				</div>

				{/* Filter Button */}
				<Button>
					<FilterIcon />
					<span>Filter</span>
				</Button>
			</div>

			{/* Calls Table */}
			<div className="overflow-y-auto mt-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-neutral-100">
				<table className="w-full text-left">
					<thead className="text-stone-400 border-b border-stone-200">
						<tr>
							<td className="py-2 pl-2">Client</td>
							<td className="py-2">Date</td>
							<td className="py-2">Time</td>
							<td className="py-2"></td>
						</tr>
					</thead>
					<tbody className="divide-y divide-stone-100">
						{/* Table Row => Each Call */}
						{nextMeetings.map((meeting) => (
							<CallRow meeting={meeting} />
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default NextCalls;
