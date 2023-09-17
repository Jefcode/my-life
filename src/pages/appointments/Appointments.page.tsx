import { useMemo } from 'react';
import Button from '../../components/common/Button';
import PageTitle from '../../components/common/PageTitle';
import Panel from '../../components/common/Panel';
import PanelHeading from '../../components/common/PanelHeading';
import meetings from '../../data/meetings';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  FilterActiveIcon,
  VideoActiveIcon,
} from '../../icons';
import { isSameDay, parseISO, startOfToday } from 'date-fns';
import MeetingItem from '../../components/calendar/MeetingItem';
import Schadule from './Schadule';

const AppointmentsPage = () => {
  const today = startOfToday();

  const todaysMeetings = useMemo(() => {
    return meetings.filter((meeting) =>
      isSameDay(parseISO(meeting.startDatetime), today)
    );
  }, [today]);

  return (
    <>
      <PageTitle
        title='Appointments'
        breadcrumb={[{ title: 'Appointments' }]}
      />

      {/* Flex Container */}
      <div className='flex items-stretch'>
        {/* Calendar */}
        <div className='w-3/5 pr-5'>
          {/* Header */}
          <div className='flex items-center justify-between mb-5'>
            {/* My Availibilty */}
            <button className='px-8 py-2 bg-white text-primary rounded-md border border-transparent hover:border-stone-200 transition active:scale-95'>
              My Availablity
            </button>

            {/* Tabs */}
            <div className='flex items-center shadow-lg shadow-stone-200/30 gap-2 p-1 bg-white rounded-full'>
              {/* Calendar */}
              <button className='bg-primary text-white text-sm px-4 py-1 rounded-full'>
                Calendar
              </button>
              <button className='text-sm px-4 py-1 rounded-full'>
                Appointments
              </button>
            </div>
          </div>

          {/* Month */}
          <div className='flex items-center justify-center gap-5 mb-5'>
            <button>
              <ChevronLeftIcon className='w-4 h-4 text-primary' />
            </button>
            <span className='text-stone-800 uppercase text-lg'>may 2023</span>
            <button>
              <ChevronRightIcon className='w-4 h-4 text-primary' />
            </button>
          </div>

          {/* Days */}
          <div className='flex items-center gap-3 justify-between'>
            {/* Day */}
            <div className='bg-white cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-800 font-medium'>15</span>
              <span className='text-stone-400 text-sm font-light'>Mon</span>
            </div>
            <div className='bg-primary cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-100 font-medium'>16</span>
              <span className='text-stone-100 text-sm font-light'>Tue</span>

              {/* Red dot indicator */}
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white'></div>
            </div>

            <div className='bg-white cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-800 font-medium'>15</span>
              <span className='text-stone-400 text-sm font-light'>Mon</span>

              {/* Red dot indicator */}
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white'></div>
            </div>

            <div className='bg-white cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-800 font-medium'>15</span>
              <span className='text-stone-400 text-sm font-light'>Mon</span>

              {/* Red dot indicator */}
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white'></div>
            </div>
            <div className='bg-white cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-800 font-medium'>15</span>
              <span className='text-stone-400 text-sm font-light'>Mon</span>

              {/* Red dot indicator */}
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white'></div>
            </div>
            <div className='bg-white cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-800 font-medium'>15</span>
              <span className='text-stone-400 text-sm font-light'>Mon</span>

              {/* Red dot indicator */}
              <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white'></div>
            </div>
            <div className='bg-white cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-800 font-medium'>15</span>
              <span className='text-stone-400 text-sm font-light'>Mon</span>
            </div>
            <div className='bg-white cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-800 font-medium'>15</span>
              <span className='text-stone-400 text-sm font-light'>Mon</span>
            </div>
            <div className='bg-white cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-800 font-medium'>15</span>
              <span className='text-stone-400 text-sm font-light'>Mon</span>
            </div>
            <div className='bg-white cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative'>
              <span className='text-stone-800 font-medium'>15</span>
              <span className='text-stone-400 text-sm font-light'>Mon</span>
            </div>
          </div>

          {/* Schadule */}
          <Schadule meetings={todaysMeetings} />
        </div>

        {/* Today's meetings/Appointments stats */}
        <div className='w-2/5'>
          <Panel>
            <Panel.Header>
              <PanelHeading title="Today's meetings" icon={VideoActiveIcon} />
              <Button icon={FilterActiveIcon}>Filter</Button>
            </Panel.Header>

            <div className='mt-4'>
              <ul className='flex flex-col gap-5'>
                {todaysMeetings.map((meeting) => (
                  <MeetingItem key={meeting.id} meeting={meeting} />
                ))}
              </ul>

              {todaysMeetings.length === 0 && (
                <p className='py-4 text-stone-600 text-center'>
                  There is no meeting for today.
                </p>
              )}
            </div>
          </Panel>
        </div>
      </div>
    </>
  );
};

export default AppointmentsPage;
