import { useMemo } from 'react';
import { ReactComponent as VideoIcon } from '../icons/video-background.svg';
import meetings from '../data/meetings';
import {
	add,
	format,
	isToday,
	parseISO,
	startOfToday,
	getDay,
	isSameDay,
} from 'date-fns';
import { daysOfTheWeek } from './calendar/Calendar';

const TodayStats = () => {
	const today = startOfToday();
	const tomarrow = add(today, { days: 1 });

	const todaysMeetings = useMemo(() => {
		return meetings.filter((meeting) =>
			isToday(parseISO(meeting.startDatetime))
		).length;
	}, []);

	const tomarrowsMeetings = useMemo(() => {
		return meetings.filter((meeting) =>
			isSameDay(parseISO(meeting.startDatetime), tomarrow)
		).length;
	}, [tomarrow]);

	return (
		<div className="">
			{/* Cards Flex Container */}
			<div className="flex flex-col sm:flex-row items-stretch gap-5 h-full">
				{/* Card => Todays Calls and meetings */}
				<div className="card bg-gradient-to-l from-gradientRed-100 via-primary to-gradientRed-200 rounded-2xl p-4 flex-1 text-white flex flex-col justify-between">
					<div className="flex items-center gap-3 mb-12">
						<VideoIcon className="w-14 h-14" />
						<div className="flex flex-col">
							<span className="uppercase text-xl">
								{format(today, 'MMMM d')}
							</span>
							<span className="font-light">Today's meetings</span>
						</div>
					</div>

					{/* Number of calls */}
					<div className="flex gap-1 text-3xl font-light">
						<span className="font-medium">{todaysMeetings}</span>
						<span>Calls</span>
					</div>
				</div>

				{/* Card => Tomarrow's Calls and meetings */}
				<div className="card bg-gradient-to-l from-gradientBlue-100 via-gradientBlue-200 to-gradientBlue-300 rounded-2xl p-4 flex-1 text-white flex flex-col justify-between">
					<div className="flex items-center gap-3 mb-12">
						<VideoIcon className="w-14 h-14" />
						<div className="flex flex-col">
							<span className="uppercase text-lg">
								{' '}
								{format(tomarrow, 'MMMM d')}
							</span>
							<span className="font-light text-sm">
								{daysOfTheWeek[getDay(tomarrow)]}
							</span>
						</div>
					</div>

					{/* Number of calls */}
					<div className="flex gap-1 text-3xl font-light">
						<span className="font-medium">{tomarrowsMeetings}</span>
						<span>Calls</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TodayStats;
