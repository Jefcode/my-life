import Button from '../common/Button';
import { ReactComponent as CameraIcon } from '../../icons/camera.svg';
import { ReactComponent as FilterIcon } from '../../icons/filter-active.svg';
import { useMemo } from 'react';
import meetings from '../../data/meetings';
import { parseISO } from 'date-fns';
import CallRow from './CallRow';
import Panel from '../common/Panel';

const NextCalls = () => {
	const nextMeetings = useMemo(() => {
		return meetings.filter(
			(meeting) =>
				parseISO(meeting.startDatetime) > parseISO(new Date().toISOString()) &&
				meeting.done !== true
		);
	}, []);

	return (
		<Panel className="card flex-auto">
			{/* Panel Name / Filter Flex Container */}
			<div className="flex items-center flex-wrap gap-2 justify-between">
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
			<div className="overflow-y-auto mt-2 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-neutral-100 overflow-x-auto">
				<table className="w-full text-left whitespace-nowrap">
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
							<CallRow key={meeting.id} meeting={meeting} />
						))}
					</tbody>
				</table>
				{nextMeetings.length === 0 && (
					<div className="w-full p-6 text-center">No calls ahead!</div>
				)}
			</div>
		</Panel>
	);
};

export default NextCalls;
