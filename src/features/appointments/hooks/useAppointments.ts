import { useMemo } from 'react';
import { parseISO } from 'date-fns';

import meetings from '../../../data/meetings';

export default function useAppointments() {
  const nextMeetings = useMemo(() => {
    return meetings.filter(
      (meeting) =>
        parseISO(meeting.startDatetime) > parseISO(new Date().toISOString()) &&
        meeting.done !== true
    );
  }, []);

  return { nextMeetings };
}
