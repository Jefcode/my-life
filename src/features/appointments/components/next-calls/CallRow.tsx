import { format, parseISO } from 'date-fns';

import Button from '../../../../components/ui/Button';
import Modal from '../../../../components/ui/Modal';
import AppointmentModal from '../AppointmentModal';
import Table from '../../../../components/ui/Table';
import { IAppointment } from '../../../../data/appointments';

interface CallRowProps {
  appointment: IAppointment;
}

const CallRow = ({ appointment }: CallRowProps) => {
  return (
    <Table.Row key={appointment.id} className='bg-white hover:bg-stone-50'>
      {/* Client */}
      <Table.BodyColumn>
        <div className='flex items-center gap-3'>
          <img
            src={appointment.imageUrl}
            className='hidden sm:block w-12 h-12 rounded-full object-cover object-center'
            alt="Client's image"
          />
          <div>
            <p className='font-semibold text-lg leading-tight text-stone-700'>
              {appointment.name}
            </p>
            <span className='text-primary'>Drugs</span>
          </div>
        </div>
      </Table.BodyColumn>
      <Table.BodyColumn>
        <span className='text-stone-500'>
          {format(parseISO(appointment.startDatetime), 'MMMM d')}
        </span>
      </Table.BodyColumn>
      <Table.BodyColumn>
        <span className='text-stone-500'>
          {format(parseISO(appointment.startDatetime), 'hh:mm')} -{' '}
          {format(parseISO(appointment.endDatetime), 'hh:mm')}
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
            <AppointmentModal appointment={appointment} />
          </Modal.Content>
        </Modal>
      </Table.BodyColumn>
    </Table.Row>
  );
};

export default CallRow;
