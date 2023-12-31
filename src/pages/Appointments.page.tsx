import { format, isEqual, isSameDay, parseISO } from 'date-fns';

import { Swiper, SwiperSlide } from 'swiper/react';

import Button from '../components/ui/Button';
import PageTitle from '../components/ui/PageTitle';
import Panel from '../components/ui/Panel';
import PanelHeading from '../components/ui/PanelHeading';
import appointments from '../data/appointments';
import {
  CheckRawIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockActiveIcon,
  FilterActiveIcon,
  VideoActiveIcon,
} from '../assets/icons';
import Schadule from '../features/appointments/components/Schadule';
import AppointmentsChart from '../features/appointments/components/AppointmentsChart';
import Modal from '../components/ui/Modal';
import MyAvaliblityModal from '../features/appointments/components/MyAvaliblityModal';
import classNames from '../utils/classNames';
import useCalendar from '../features/appointments/hooks/useCalendar';
import AppointmentsList from '../features/appointments/components/calendar/AppointmentsList';
import useAppointments from '../features/appointments/hooks/useAppointments';

const AppointmentsPage = () => {
  const {
    today,
    selectedDay,
    daysOfTheMonth,
    setSelectedDay,
    nextMonth,
    previousMonth,
    getCurrentMonthAndYear,
  } = useCalendar();

  const { getAppoinmentsForDate } = useAppointments();

  const todaysMeetings = getAppoinmentsForDate(today);
  const selectedDayAppointments = getAppoinmentsForDate(selectedDay);

  return (
    <>
      <PageTitle
        title='Appointments'
        breadcrumb={[{ title: 'Appointments' }]}
      />

      {/* Flex Container */}
      <div className='flex items-stretch flex-wrap'>
        {/* Calendar */}
        <div className='w-full xl:w-3/5 xl:pr-5'>
          {/* Header */}
          <div className='flex flex-col gap-3 xs:flex-row items-center justify-between mb-5'>
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
            <button onClick={previousMonth}>
              <ChevronLeftIcon className='w-4 h-4 text-primary' />
            </button>
            <span className='text-stone-800 uppercase text-lg'>
              {getCurrentMonthAndYear()}
            </span>
            <button onClick={nextMonth}>
              <ChevronRightIcon className='w-4 h-4 text-primary' />
            </button>
          </div>

          {/* Wrapper for the Swiper => widths are very necessary */}
          <div className='mb-5 lg:max-w-[70vw] xl:max-w-[50vw]'>
            <Swiper
              initialSlide={today.getDate() - 2}
              spaceBetween={50}
              breakpoints={{
                '375': {
                  slidesPerView: 6,
                },
                '548': {
                  slidesPerView: 8,
                },
                '1024': {
                  slidesPerView: 10,
                },
                '1280': {
                  slidesPerView: 8,
                },
                '1440': {
                  slidesPerView: 10,
                },
              }}
              slidesPerView={4}
              className='py-2 pr-12'
            >
              {daysOfTheMonth.map((day, idx) => (
                <SwiperSlide key={idx}>
                  <div
                    className={classNames(
                      'cursor-pointer rounded-lg w-14 h-16 flex flex-col items-center justify-center relative transition',
                      isEqual(day, selectedDay) ? 'bg-primary' : 'bg-white'
                    )}
                    onClick={() => setSelectedDay(day)}
                  >
                    <span
                      className={classNames(
                        'font-medium',
                        isEqual(day, selectedDay)
                          ? 'text-white'
                          : 'text-stone-800'
                      )}
                    >
                      {day.getDate()}
                    </span>
                    <span
                      className={classNames(
                        'text-sm font-light',
                        isEqual(day, selectedDay)
                          ? 'text-white'
                          : 'text-stone-400'
                      )}
                    >
                      {format(day, 'EE')}
                    </span>

                    {/* Red dot indicator */}
                    {appointments.some((meeting) =>
                      isSameDay(parseISO(meeting.startDatetime), day)
                    ) && (
                      <div className='absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 rounded-full bg-primary border-2 border-white'></div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Schadule */}
          <Schadule
            selectedDay={selectedDay}
            appointments={selectedDayAppointments}
          />
        </div>

        {/* Today's meetings/Appointments stats */}
        <div className='w-full xl:w-2/5'>
          <div className='flex flex-col gap-5 h-full'>
            <Panel className='flex-1'>
              <Panel.Header>
                <PanelHeading title="Today's meetings" icon={VideoActiveIcon} />
                <Button icon={FilterActiveIcon}>Filter</Button>
              </Panel.Header>

              <div className='mt-4 max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-track-stone-100 scrollbar-thumb-stone-200'>
                <AppointmentsList data={todaysMeetings} />
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
