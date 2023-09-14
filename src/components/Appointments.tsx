import Button from './common/Button';
import Panel from './common/Panel';
import Calendar from './calendar/Calendar';
import { CalendarActiveIcon } from '../icons';

const Appointments = () => {
  return (
    <Panel className='card h-full'>
      {/* Panel Title Flex Container */}
      <div className='flex items-center flex-wrap gap-5 justify-between mb-10'>
        <div className='flex items-center gap-2'>
          <CalendarActiveIcon />
          <span className='text-stone-800 font-semibold text-xl'>
            Appointments
          </span>
        </div>

        <Button>See all</Button>
      </div>
      <Calendar />
    </Panel>
  );
};

export default Appointments;
