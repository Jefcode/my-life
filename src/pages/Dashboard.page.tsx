import PageTitle from '../components/ui/PageTitle';
import Appointments from '../features/appointments/components/AppointmentsCard';
import NextCalls from '../features/appointments/components/next-calls/NextCalls';
import TodayStats from '../features/appointments/components/TodayStats';
import UserGreeting from '../features/profile/components/UserGreeting';

const DashboardPage = () => {
  return (
    <>
      <PageTitle title='Dashboard' />

      {/* Panels Flex Container */}
      <div className='flex items-stretch flex-wrap'>
        <div className='w-full xl:w-3/5'>
          <div className='h-full flex flex-col gap-5'>
            <UserGreeting />

            <TodayStats />

            <NextCalls />
          </div>
        </div>
        <div className='w-full py-5 xl:w-2/5 xl:pl-5 xl:py-0'>
          <Appointments />
        </div>
      </div>
    </>
  );
};

export default DashboardPage;
