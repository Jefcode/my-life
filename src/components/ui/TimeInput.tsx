import TimePicker from 'react-time-picker';

const TimeInput = ({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value?: string;
  onValueChange?: (value: string) => void;
}) => {
  return (
    <div className='relative'>
      <TimePicker
        className='w-full border border-stone-300 rounded-xl py-4 px-5 flex'
        clockClassName='text-stone-400'
        clearIcon={null}
        clockIcon={null}
        format='HH:mm'
        value={value}
        onChange={(value) => onValueChange?.(value as string)}
      />
      {/* label */}
      <span className='absolute top-0 left-3 -translate-y-1/2 bg-white px-2 text-stone-500 -mt-0.5'>
        {label}
      </span>
    </div>
  );
};

export default TimeInput;
