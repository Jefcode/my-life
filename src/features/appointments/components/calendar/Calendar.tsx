import { useMemo } from 'react';
import {
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parseISO,
} from 'date-fns';

import { ChevronLeftIcon, ChevronRightIcon } from '../../../../assets/icons';
import classNames from '../../../../utils/classNames';
import useCalendar from '../../hooks/useCalendar';
import useAppointments from '../../hooks/useAppointments';
import AppointmentsList from './AppointmentsList';

export default function Calendar() {
  const {
    today,
    selectedDay,
    firstDayCurrentMonth,
    daysOfTheMonth,
    setSelectedDay,
    nextMonth,
    previousMonth,
    getCurrentMonthAndYear,
  } = useCalendar();

  const { appointments, getAppoinmentsForDate } = useAppointments();

  const selectedDayAppointments = useMemo(
    () => getAppoinmentsForDate(selectedDay),
    [selectedDay, getAppoinmentsForDate]
  );

  return (
    <div>
      <div className='mx-auto'>
        <div className='px-0 xl:px-5'>
          <div className='flex items-center justify-center gap-4'>
            <button
              type='button'
              onClick={previousMonth}
              className='-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-600 hover:text-gray-700'
            >
              <span className='sr-only'>Previous month</span>
              <ChevronLeftIcon className='w-4 h-4' aria-hidden='true' />
            </button>
            <h2 className='text-gray-900 uppercase text-lg'>
              {getCurrentMonthAndYear()}
            </h2>
            <button
              onClick={nextMonth}
              type='button'
              className='-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-600 hover:text-gray-700'
            >
              <span className='sr-only'>Next month</span>
              <ChevronRightIcon className='w-4 h-4' aria-hidden='true' />
            </button>
          </div>
          <div className='text-center text-gray-400 font-light text-sm'>
            {format(today, 'MMMM d, EEEE')}
          </div>

          <div className='grid grid-cols-7 mt-10 text-sm sm:text-lg leading-6 text-center text-primary'>
            <div>S</div>
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>T</div>
            <div>F</div>
            <div>S</div>
          </div>
          <div className='grid grid-cols-7 mt-2 text-sm sm:text-lg'>
            {daysOfTheMonth.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 ? colStartClasses[getDay(day)] : '',
                  'flex justify-center'
                )}
              >
                <button
                  type='button'
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) ? 'text-white' : '',
                    !isEqual(day, selectedDay) && isToday(day)
                      ? 'text-red-500'
                      : '',
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      isSameMonth(day, firstDayCurrentMonth)
                      ? 'text-gray-900'
                      : '',
                    !isEqual(day, selectedDay) &&
                      !isToday(day) &&
                      !isSameMonth(day, firstDayCurrentMonth)
                      ? 'text-gray-400'
                      : '',
                    isEqual(day, selectedDay) && isToday(day)
                      ? 'bg-primary'
                      : '',
                    isEqual(day, selectedDay) && !isToday(day)
                      ? 'bg-gray-900'
                      : '',
                    !isEqual(day, selectedDay) ? 'hover:text-blue-600' : '',
                    isEqual(day, selectedDay) || isToday(day)
                      ? 'font-semibold'
                      : '',
                    'mx-auto flex flex-col h-8 w-8 sm:h-14 sm:w-14 items-center justify-center rounded-xl transition'
                  )}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>

                  <div className='flex items-center gap-0.5 justify-center mx-auto'>
                    {appointments
                      .filter((meeting) =>
                        isSameDay(parseISO(meeting.startDatetime), day)
                      )
                      .map((meething) => (
                        <div
                          key={meething.id}
                          className={classNames(
                            'w-1 h-1 rounded-full',
                            isSameDay(day, selectedDay)
                              ? 'bg-white'
                              : 'bg-primary'
                          )}
                        ></div>
                      ))}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Appointments of today */}
      <AppointmentsList data={selectedDayAppointments} />
    </div>
  );
}

const colStartClasses = [
  '',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
  'col-start-7',
];
