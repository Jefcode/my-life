interface InputProps {
  label: string;
  type?: string;
  id?: string;
  value?: string;
  onChange?: (value: string) => void;
}

const Input = ({ label, type = 'text', id, value, onChange }: InputProps) => {
  return (
    <div className='relative mb-10'>
      <label
        htmlFor={id}
        className='absolute -top-0.5 left-2 -translate-y-1/2 bg-white px-3 py-0.5 text-stone-500 whitespace-nowrap'
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        className='w-full rounded-xl border border-stone-300 py-4 px-6 outline-none focus:border-stone-500 peer transition'
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
};

export default Input;
