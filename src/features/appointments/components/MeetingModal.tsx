import { format, parseISO } from 'date-fns';
import Button from '../../../components/ui/Button';
import type { Meeting } from '../../../data/meetings';
import { CalendarIcon, ClockIcon, UsersIcon } from '../../../assets/icons';

interface MeetingModalProps {
  meeting: Meeting;
}

const MeetingModal = ({ meeting }: MeetingModalProps) => {
  return (
    <>
      <div className='flex flex-col sm:flex-row items-center gap-5 mb-8'>
        <img
          src={meeting.imageUrl}
          alt='User Image'
          className='w-20 h-20 rounded-full object-cover'
        />

        <div className='flex flex-col sm:w-full text-center sm:text-left'>
          <span className='text-neutral-500'>Meeting with</span>
          <p className='text-xl mb-1 font-semibold text-stone-800'>
            {meeting.name}
          </p>
          <div className='text-primary'>Drugs</div>
        </div>
      </div>

      {/* Description */}
      <div className='text-stone-500 mb-10'>
        {meeting.description}{' '}
        <a
          href=''
          className='text-primary inline-block border-b border-primary transition hover:text-red-700 hover:border-red-700'
        >
          View More
        </a>
      </div>

      {/* Steps */}
      <div className='flex flex-col gap-2 mb-10'>
        <div className='flex items-center gap-3'>
          <CalendarIcon className='text-primary w-6 h-6' />
          <span className='text-stone-500'>
            {format(parseISO(meeting.startDatetime), 'MMMM d, EEEE')}
          </span>
        </div>
        <div className='w-0.5 ml-2.5 h-10 bg-stone-300'></div>
        <div className='flex items-center gap-3'>
          <ClockIcon className='text-primary w-6 h-6' />
          <span className='text-stone-500'>
            {format(parseISO(meeting.startDatetime), 'hh:mm')} -{' '}
            {format(parseISO(meeting.endDatetime), 'hh:mm')}
          </span>
        </div>
        <div className='w-0.5 ml-2.5 h-10 bg-stone-300'></div>
        <div className='flex items-center gap-3'>
          <UsersIcon className='text-primary w-6 h-6' />
          <ul className='flex items-center'>
            <li className='first:ml-0 -ml-2'>
              <img
                src='/imgs/user-1.png'
                alt='User Picture'
                className='w-8 h-8 rounded-full object-cover border border-white'
              />
            </li>
            <li className='first:ml-0 -ml-2'>
              <img
                src='/imgs/user-2.jpg'
                alt='User Picture'
                className='w-8 h-8 rounded-full object-cover border border-white'
              />
            </li>
          </ul>
        </div>
      </div>

      {/* Button to start Call */}
      <Button variant='primary' className='!px-14'>
        Start Call
      </Button>
    </>
  );
};

export default MeetingModal;
