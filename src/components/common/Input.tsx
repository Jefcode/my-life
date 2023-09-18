/**
 * This Component handles both inputs and textareas
 */

import { ChevronRightIcon } from '../../icons';
import classNames from '../../utils/classNames';

interface SharedProps {
  label: string;
  type?: string;
  id?: string;
  value?: string;
  onChange?: React.Dispatch<React.SetStateAction<string>>;
  className?: string;
}

const Input = ({
  label,
  type = 'text',
  id,
  value,
  onChange,
  className = '',
}: SharedProps) => {
  /**
   * Normal Input
   */
  return (
    <div className='relative'>
      <input
        id={id}
        type={type}
        className={classNames(
          'w-full rounded-xl border border-stone-300 py-4 px-6 outline-none focus:border-stone-500 peer transition',
          className
        )}
        placeholder=' '
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
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

export const Textarea = ({
  label,
  id,
  value,
  onChange,
  className = '',
}: SharedProps) => {
  return (
    <div className='relative'>
      <textarea
        id={id}
        className={classNames(
          'w-full rounded-xl border border-stone-300 py-5 px-6 outline-none focus:border-stone-500 peer transition h-40 scrollbar-thin scrollbar-track-stone-100 scrollbar-thumb-stone-300',
          className
        )}
        onChange={(e) => onChange?.(e.target.value)}
        defaultValue={value}
        placeholder=' '
      ></textarea>

      <label
        htmlFor={id}
        className='absolute peer-placeholder-shown:top-7 -top-0.5 peer-focus:-top-0.5 transition-all duration-300 left-2 -translate-y-1/2 bg-white px-3 py-0.5 text-stone-500 whitespace-nowrap pointer-events-none'
      >
        {label}
      </label>
    </div>
  );
};

type NumberInputProps = Omit<SharedProps, 'onChange' | 'value'> & {
  onChange?: React.Dispatch<React.SetStateAction<number>>;
  value?: number;
  currency?: string;
};

export const NumberInput = ({
  label,
  type = 'number',
  id,
  value,
  onChange,
  className = '',
  currency,
}: NumberInputProps) => {
  const handleIncrease = () => {
    onChange?.((val) => val + 1 ?? 1);
  };

  const handleDecrease = () => {
    onChange?.((val) => val - 1 ?? 1);
  };

  return (
    <div className='relative'>
      <input
        id={id}
        type={type}
        className={classNames(
          'w-full rounded-xl border border-stone-300 py-4 outline-none focus:border-stone-500 peer transition',
          currency ? 'px-8' : 'px-6',
          className
        )}
        placeholder=' '
        value={value}
        onChange={(e) => onChange?.(parseInt(e.target.value))}
      />
      <label
        htmlFor={id}
        className='absolute peer-placeholder-shown:top-1/2 -top-0.5 peer-focus:-top-0.5 transition-all duration-300 left-2 -translate-y-1/2 bg-white px-3 py-0.5 text-stone-500 whitespace-nowrap pointer-events-none'
      >
        {label}
      </label>

      {/* Currency */}
      <div className='absolute top-1/2 -translate-y-1/2 left-6 text-stone-800'>
        {currency}
      </div>

      {/* Arrow Buttons */}
      <div className='absolute top-1/2 -translate-y-1/2 right-4 flex flex-col gap-0.5'>
        {/* Top Chevron => increase */}
        <button onClick={handleIncrease}>
          <ChevronRightIcon
            className='text-orange-500 -rotate-90 w-2.5 h-2.5'
            strokeWidth={3}
          />
        </button>

        {/* Bottom Chevron => decrease */}
        <button onClick={handleDecrease}>
          <ChevronRightIcon
            className='text-orange-500 rotate-90 w-2.5 h-2.5'
            strokeWidth={3}
          />
        </button>
      </div>
    </div>
  );
};

export default Input;
