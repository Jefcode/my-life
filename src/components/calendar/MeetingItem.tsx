import { format, parseISO } from 'date-fns';

import MeetingModal from '../modals/MeetingModal';
import Button from '../common/Button';
import Modal from '../common/Modal';
import { Meeting } from '../../data/meetings';
import { CheckIcon, ClockIcon } from '../../icons';

interface MeetingItemProps {
  meeting: Meeting;
}

const MeetingItem = ({ meeting }: MeetingItemProps) => {
  return (
    <li className='p-5 border border-stone-100 rounded-lg'>
      {/* Flex Container */}
      <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0'>
        <img
          src={meeting.imageUrl}
          alt='User Image'
          className='hidden sm:block rounded-full w-14 h-14 object-cover mr-5'
        />
        <div className='flex flex-col'>
          <span
            className={`${
              meeting.done ? 'text-green-500' : 'text-primary'
            } flex items-center gap-2`}
          >
            {meeting.done ? (
              <CheckIcon className='w-4 h-4' />
            ) : (
              <ClockIcon className='w-4 h-4' />
            )}
            <span
              className={`${meeting.done && 'text-slate-400 line-through'}`}
            >
              {format(parseISO(meeting.startDatetime), 'hh:mm')} -{' '}
              {format(parseISO(meeting.endDatetime), 'hh:mm')}
            </span>
          </span>
          <p className='font-semibold text-xl'>{meeting.name}</p>
        </div>

        {/* Button */}

        <Modal>
          <Modal.Button asChild>
            <Button
              className='sm:ml-auto'
              variant='primary'
              disabled={meeting.done}
            >
              Join Call
            </Button>
          </Modal.Button>

          <Modal.Content>
            <MeetingModal meeting={meeting} />
          </Modal.Content>
        </Modal>
      </div>
    </li>
  );
};

export default MeetingItem;
