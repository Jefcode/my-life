import * as Switch from '@radix-ui/react-switch';

import TimeInput from '../common/TimeInput';
import Checkbox from '../common/Checkbox';
import Button from '../common/Button';
import { useMemo, useState } from 'react';
import { generateRandomString } from '../../utils';

const daysOfTheWeek = [
  'Sunday',
  'Monday',
  'Thuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const MyAvaliblityModal = () => {
  return (
    <div className='mt-7'>
      <div className='flex flex-col gap-8 h-[calc(100vh-220px)] max-h-[500px] overflow-y-auto pr-2 divide-y divide-stone-200 scrollbar-thin scrollbar-track-stone-100 scrollbar-thumb-slate-300'>
        {daysOfTheWeek.map((day, idx) => (
          <Day key={idx} title={day} />
        ))}
      </div>

      {/* Buttons */}
      <div className='mt-8 flex items-center gap-2'>
        <Button full>Cancel</Button>
        <Button full variant='primary'>
          Save
        </Button>
      </div>
    </div>
  );
};

const Day = ({ title }: { title: string }) => {
  const [blocksCount, setBlocksCount] = useState<number>(1);
  const [dayActive, setDayActive] = useState(true);

  const handleAddTimeBlock = () => {
    setBlocksCount((val) => val + 1);
  };

  const handleRemoveTimeBlock = () => {
    setBlocksCount((val) => (val - 1 > 1 ? val - 1 : 1));
  };

  return (
    <div className='pt-5 first:pt-0 relative'>
      {/* Overlay shown when inactive */}
      {!dayActive && <div className='absolute inset-0 bg-white/80 z-10'></div>}

      {/* Content */}
      <div className='flex items-center flex-wrap justify-between gap-2 mb-8'>
        <p className='text-xl font-medium text-stone-800'>{title}</p>
        {/* Buttons */}
        <div className='flex items-center gap-1'>
          <button
            className='flex items-center justify-center w-7 h-7 rounded-full bg-stone-100 text-stone-900 text-lg leading-none font-medium hover:bg-stone-200 transition active:scale-90 disabled:text-stone-300 disabled:bg-stone-50 disabled:cursor-not-allowed'
            disabled={blocksCount === 1}
            onClick={handleRemoveTimeBlock}
          >
            -
          </button>
          <span className='flex items-center justify-center w-7 h-7 rounded-full bg-stone-100 text-stone-900 text-sm leading-none font-medium'>
            {blocksCount}
          </span>
          <button
            className='flex items-center justify-center w-7 h-7 rounded-full bg-stone-100 text-stone-900 leading-none font-medium hover:bg-stone-200 transition active:scale-90'
            onClick={handleAddTimeBlock}
          >
            +
          </button>
        </div>

        {/* Toggle button */}
        <Switch.Root
          className='w-[50px] h-[30px] bg-stone-100 rounded-full relative data-[state=checked]:bg-primary outline-none transition cursor-pointer z-20'
          checked={dayActive}
          onCheckedChange={setDayActive}
        >
          <Switch.Thumb className='block w-[25px] h-[25px] shadow bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22.5px]' />
        </Switch.Root>
      </div>

      {/* Time blocks flex Container */}
      <div className='flex flex-col gap-8'>
        {new Array(blocksCount).fill(null).map((_, idx) => (
          <TimeBlock key={idx} />
        ))}
      </div>
    </div>
  );
};

const TimeBlock = () => {
  const [fromTime, setFromTime] = useState('10:00');
  const [toTime, setToTime] = useState('12:00');

  // Generate random strings for checkbox and their labels
  const randomStr = useMemo(() => generateRandomString(), []);

  return (
    <div>
      {/* Inputs Flex Container */}
      <div className='flex flex-col xs:flex-row items-center gap-5 xs:gap-2 mb-5'>
        <div className='w-full'>
          <TimeInput
            label='from'
            value={fromTime}
            onValueChange={setFromTime}
          />
        </div>
        <div className='w-full'>
          <TimeInput label='to' value={toTime} onValueChange={setToTime} />
        </div>
      </div>
      {/* Checkboxes Flex Contaienr */}
      <div className='flex flex-col gap-4 xs:flex-row xs:items-center xs:gap-12'>
        <div className='flex items-center gap-3'>
          <Checkbox id={`freeToBook-${randomStr}`} defaultChecked />
          <label htmlFor={`freeToBook-${randomStr}`}>Free to book</label>
        </div>
        <div className='flex items-center gap-3'>
          <Checkbox id={`speakNow-${randomStr}`} />
          <label htmlFor={`speakNow-${randomStr}`}>Speak now</label>
        </div>
      </div>
    </div>
  );
};

export default MyAvaliblityModal;
