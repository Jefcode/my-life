import { useMemo } from 'react';
import Button from '../../components/common/Button';
import PageTitle from '../../components/common/PageTitle';
import Panel from '../../components/common/Panel';
import PanelHeading from '../../components/common/PanelHeading';
import meetings from '../../data/meetings';
import {
  CheckRawIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockActiveIcon,
  FilterActiveIcon,
  VideoActiveIcon,
} from '../../icons';
import { isSameDay, parseISO, startOfToday } from 'date-fns';
import MeetingItem from '../../components/calendar/MeetingItem';
import Schadule from './Schadule';
import AppointmentsChart from './AppointmentsChart';
import Modal from '../../components/common/Modal';
import MyAvaliblityModal from '../../components/modals/MyAvaliblityModal';

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
            <Modal>
              <Modal.Button asChild>
                <button className='px-8 py-2 bg-white text-primary rounded-md border border-transparent hover:border-stone-200 transition active:scale-95'>
                  My Availablity
                </button>
              </Modal.Button>

              <Modal.Content size='sm'>
                <Modal.Header title='My Availability' icon={ClockActiveIcon} />
                <MyAvaliblityModal />
              </Modal.Content>
            </Modal>

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
          <div className='flex flex-col gap-5 h-full'>
            <Panel className='flex-1'>
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

            <Panel>
              <Panel.Header>
                <div className='flex items-center gap-4'>
                  {/* Check Icon */}
                  <div className='w-10 h-10 rounded bg-slate-100 text-slate-700 flex items-center justify-center'>
                    <CheckRawIcon className='w-5 h-5' strokeWidth={0.9} />
                  </div>
                  <div className='flex flex-col text-slate-700'>
                    <span className='text-xl font-medium'>Completed</span>
                    <span className='text-stone-400 font-light'>
                      Number of completed appointments
                    </span>
                  </div>
                </div>

                <div className='text-primary text-3xl font-medium'>1230</div>
              </Panel.Header>

              <AppointmentsChart />
            </Panel>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppointmentsPage;
