import { useMemo } from 'react';
import { ClockIcon } from '../../../assets/icons';
import EditButton from '../../../components/ui/EditButton';
import { Meeting } from '../../../data/meetings';
import { differenceInMinutes, format, getHours, getMinutes } from 'date-fns';

const blockSizeInPixels = 60;

const Schadule = ({
  meetings,
  selectedDay,
}: {
  meetings: Meeting[];
  selectedDay: Date;
}) => {
  const meetingTimeBlocks = useMemo(() => {
    const data: {
      id: number;
      height: number;
      user: string;
      startTime: string;
      endTime: string;
      image: string;
      top: number;
    }[] = [];

    meetings.forEach((meeting, idx) => {
      const startDateTime = new Date(meeting.startDatetime);
      const endDateTime = new Date(meeting.endDatetime);

      const duration = differenceInMinutes(endDateTime, startDateTime);
      data.push({
        id: idx,
        height: duration / 60,
        user: meeting.name,
        startTime: format(startDateTime, 'HH:mm'),
        endTime: format(endDateTime, 'HH:mm'),
        image: meeting.imageUrl,
        top: getHours(startDateTime) + getMinutes(startDateTime) / 60,
      });
    });

    return data;
  }, [meetings]);

  const hoursOfTheDay = useMemo(() => {
    const hrs: string[] = [];

    for (let i = 0; i < 24; i++) {
      hrs.push(`${i < 10 ? '0' : ''}${i}:00`);
    }

    return hrs;
  }, []);

  return (
    <div className='mt-10'>
      <p className='text-center mb-8 font-medium'>
        {format(selectedDay, 'MMMM dd, EEEE')}
      </p>

      {/* Blocks Container */}
      <div className='xl:max-h-[500px] overflow-y-auto pr-3 py-2 scrollbar-thin scrollbar-track-slate-200 scrollbar-thumb-primary'>
        <div className='relative'>
          {/* time blocks */}
          <div>
            {hoursOfTheDay.map((hour, idx) => (
              <div
                key={idx}
                className='relative border-t border-stone-200'
                style={{ height: blockSizeInPixels }}
              >
                <span className='absolute top-0 left-0 text-stone-700 -translate-y-1/2 bg-stone-100 pr-2'>
                  {hour}
                </span>
              </div>
            ))}
          </div>

          {/* Meetings */}
          <div className='absolute inset-0 left-14 right-[10px] z-10'>
            <div className='relative w-full h-full'>
              {/* Meeting Block */}
              {meetingTimeBlocks.map((meeting) => (
                <div
                  key={meeting.id}
                  className='w-full absolute bg-[#FFF2F3] border border-primary rounded-l-lg overflow-hidden rounded-r-xl'
                  style={{
                    height: blockSizeInPixels * meeting.height,
                    top: blockSizeInPixels * meeting.top,
                  }}
                >
                  <div className='relative w-full h-full p-4'>
                    {/* Left border */}
                    <div className='w-[5px] h-full absolute top-0 left-0 bg-primary'></div>

                    {/* Meeting Info */}
                    <div className='flex items-center gap-3'>
                      <div className='w-11 h-11'>
                        <img
                          src={meeting.image}
                          className='w-full h-full rounded-full object-cover'
                          alt='User image'
                        />
                      </div>
                      <div className='flex flex-col gap-0.5'>
                        <span className='text-slate-800 font-semibold text-lg'>
                          {meeting.user}
                        </span>
                        <div className='flex items-center text-primary gap-1 text-sm'>
                          <ClockIcon />
                          <span>
                            {meeting.startTime} - {meeting.endTime}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* EditButton */}
                    <div className='absolute top-3 right-3'>
                      <EditButton className='!bg-primary' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schadule;
