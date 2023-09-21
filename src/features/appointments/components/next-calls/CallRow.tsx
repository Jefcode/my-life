import { format, parseISO } from 'date-fns';

import Button from '../../../../components/ui/Button';
import { Meeting } from '../../../../data/meetings';
import Modal from '../../../../components/ui/Modal';
import MeetingModal from '../MeetingModal';
import Table from '../../../../components/ui/Table';

interface CallRowProps {
  meeting: Meeting;
}

const CallRow = ({ meeting }: CallRowProps) => {
  return (
    <Table.Row key={meeting.id} className='bg-white hover:bg-stone-50'>
      {/* Client */}
      <Table.BodyColumn>
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
      </Table.BodyColumn>
      <Table.BodyColumn>
        <span className='text-stone-500'>
          {format(parseISO(meeting.startDatetime), 'MMMM d')}
        </span>
      </Table.BodyColumn>
      <Table.BodyColumn>
        <span className='text-stone-500'>
          {format(parseISO(meeting.startDatetime), 'hh:mm')} -{' '}
          {format(parseISO(meeting.endDatetime), 'hh:mm')}
        </span>
      </Table.BodyColumn>
      <Table.BodyColumn>
        <Modal>
          <Modal.Button asChild>
            <Button variant='tertiary' className='ml-auto'>
              Join Call
            </Button>
          </Modal.Button>

          <Modal.Content>
            <MeetingModal meeting={meeting} />
          </Modal.Content>
        </Modal>
      </Table.BodyColumn>
    </Table.Row>
  );
};

export default CallRow;
