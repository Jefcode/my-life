import { format, parseISO } from 'date-fns';

import Button from '../common/Button';
import { Meeting } from '../../data/meetings';
import Modal from '../common/Modal';
import MeetingModal from '../modals/MeetingModal';

interface CallRowProps {
  meeting: Meeting;
}

const CallRow = ({ meeting }: CallRowProps) => {
  return (
    <tr key={meeting.id} className='bg-white hover:bg-stone-50'>
      {/* Client */}
      <td className='py-4 px-2'>
        <div className='flex items-center gap-3'>
          <img
            src={meeting.imageUrl}
            className='hidden sm:block w-12 h-12 rounded-full object-cover object-center'
            alt="Client's image"
          />
          <div>
            <p className='font-semibold text-lg leading-tight text-stone-700'>
              {meeting.name}
            </p>
            <span className='text-primary'>Drugs</span>
          </div>
        </div>
      </td>
      <td className='py-4 px-2'>
        <span className='text-stone-500'>
          {format(parseISO(meeting.startDatetime), 'MMMM d')}
        </span>
      </td>
      <td className='py-4 px-2'>
        <span className='text-stone-500'>
          {format(parseISO(meeting.startDatetime), 'hh:mm')} -{' '}
          {format(parseISO(meeting.endDatetime), 'hh:mm')}
        </span>
      </td>
      <td className='py-4 px-2 pr-2'>
        <Modal>
          <Modal.Button>
            <Button variant='tertiary' className='ml-auto'>
              Join Call
            </Button>
          </Modal.Button>

          <Modal.Content>
            <MeetingModal meeting={meeting} />
          </Modal.Content>
        </Modal>
      </td>
    </tr>
  );
};

export default CallRow;
