/**
 * This Component handles both inputs and textareas
 * to convert this component to textarea, just use type='textarea'
 */

import classNames from '../../utils/classNames';

interface InputProps {
  label: string;
  type?: string;
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Input = ({
  label,
  type = 'text',
  id,
  value,
  onChange,
  className = '',
}: InputProps) => {
  /**
   * Textarea
   */
  if (type === 'textarea') {
    return (
      <div className='relative'>
        <label
          htmlFor={id}
          className='absolute -top-0.5 left-2 -translate-y-1/2 bg-white px-3 text-stone-500'
        >
          {label}
        </label>
        <textarea
          id={id}
          className={classNames(
            'w-full rounded-xl border border-stone-300 py-5 px-6 outline-none focus:border-stone-500 peer transition h-32',
            className
          )}
          onChange={(e) => onChange?.(e.target.value)}
          defaultValue={value}
        ></textarea>
      </div>
    );
  }

  /**
   * Normal Input
   */
  return (
    <div className='relative mb-10'>
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

export default Input;
