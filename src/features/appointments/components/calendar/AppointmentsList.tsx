import { IAppointment } from '../../../../data/appointments';
import AppointmentsListItem from './AppointmentsListItem';

const AppointmentsList = ({ data }: { data: IAppointment[] }) => {
  return (
    <div className='w-full'>
      {/* Meetings List */}
      <ul className='flex flex-col gap-5'>
        {data.map((meeting) => (
          <AppointmentsListItem key={meeting.id} appointment={meeting} />
        ))}
      </ul>

      {data.length === 0 && (
        <p className='py-4 text-stone-600 text-center'>
          There is no meeting for this day.
        </p>
      )}
    </div>
  );
};

export default AppointmentsList;
