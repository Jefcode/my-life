import { useMemo } from 'react';
import { parseISO } from 'date-fns';

import appointments from '../../../data/appointments';

export default function useAppointments() {
  const nextAppointments = useMemo(() => {
    return appointments.filter(
      (appointment) =>
        parseISO(appointment.startDatetime) >
          parseISO(new Date().toISOString()) && appointment.done !== true
    );
  }, []);

  return { nextMeetings: nextAppointments };
}
