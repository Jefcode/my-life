import DatePicker from 'react-date-picker';

type ValuePiece = Date | null;
export type Value = ValuePiece | [ValuePiece, ValuePiece];

interface SharedProps {
  label: string;
  id?: string;
  value?: Value;
  onChange?: (value: Value) => void;
  className?: string;
}

const DateInput = ({ label, value, onChange, id }: SharedProps) => {
  return (
    <div className='relative'>
      <DatePicker
        value={value}
        disableCalendar
        clearIcon={null}
        className='w-full border border-stone-300 rounded-xl py-4 px-5 bg-white'
        onChange={(value) => onChange?.(value)}
      />
      <label
        htmlFor={id}
        className='absolute peer-placeholder-shown:top-1/2 -top-0.5 peer-focus:-top-0.5 transition-all duration-300 left-2 -translate-y-1/2 bg-white px-3 py-0.5 text-stone-500 whitespace-nowrap pointer-events-none'
      >
        {label}
      </label>
    </div>
  );
};

export default DateInput;
