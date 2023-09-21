import { format, parseISO } from 'date-fns';

import AppointmentModal from '../AppointmentModal';
import Button from '../../../../components/ui/Button';
import Modal from '../../../../components/ui/Modal';
import { CheckIcon, ClockIcon } from '../../../../assets/icons';
import type { IAppointment } from '../../../../data/appointments';

interface AppointmentItemProps {
  appointment: IAppointment;
}

const AppointmentsListItem = ({ appointment }: AppointmentItemProps) => {
  return (
    <li className='p-5 border border-stone-100 rounded-lg'>
      {/* Flex Container */}
      <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0'>
        <img
          src={appointment.imageUrl}
          alt='User Image'
          className='hidden sm:block rounded-full w-14 h-14 object-cover mr-5'
        />
        <div className='flex flex-col'>
          <span
            className={`${
              appointment.done ? 'text-green-500' : 'text-primary'
            } flex items-center gap-2`}
          >
            {appointment.done ? (
              <CheckIcon className='w-4 h-4' />
            ) : (
              <ClockIcon className='w-4 h-4' />
            )}
            <span
              className={`${appointment.done && 'text-slate-400 line-through'}`}
            >
              {format(parseISO(appointment.startDatetime), 'HH:mm')} -{' '}
              {format(parseISO(appointment.endDatetime), 'HH:mm')}
            </span>
          </span>
          <p className='font-semibold text-xl'>{appointment.name}</p>
        </div>

        {/* Button */}

        <Modal>
          <Modal.Button asChild>
            <Button
              className='sm:ml-auto'
              variant='primary'
              disabled={appointment.done}
            >
              Join Call
            </Button>
          </Modal.Button>

          <Modal.Content>
            <AppointmentModal appointment={appointment} />
          </Modal.Content>
        </Modal>
      </div>
    </li>
  );
};

export default AppointmentsListItem;
