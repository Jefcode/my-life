import { ReactComponent as CalendarIcon } from '../icons/calendar-active.svg';
import Button from './Button';
import Calendar from './calendar/Calendar';

const Appointments = () => {
	return (
		<div className="card bg-white rounded-2xl p-5 h-full">
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
	);
};

export default Appointments;
