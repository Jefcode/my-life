import { useCallback, useMemo } from 'react';
import { isSameDay, parseISO } from 'date-fns';

import appointments from '../../../data/appointments';

export default function useAppointments() {
  const nextAppointments = useMemo(() => {
    return appointments.filter(
      (appointment) =>
        parseISO(appointment.startDatetime) >
          parseISO(new Date().toISOString()) && appointment.done !== true
    );
  }, []);

  const getAppoinmentsForDate = useCallback((date: Date) => {
    return appointments.filter((meeting) =>
      isSameDay(parseISO(meeting.startDatetime), date)
    );
  }, []);

  return { appointments, nextAppointments, getAppoinmentsForDate };
}
