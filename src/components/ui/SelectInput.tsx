import Select from 'react-select';
import classNames from '../../utils/classNames';

const SelectInput = ({
  options,
  label,
}: {
  options: { value: string; label: string }[];
  label: string;
}) => {
  return (
    <div className='relative'>
      <Select
        options={options}
        isMulti
        unstyled
        placeholder='Select'
        classNames={{
          control: () =>
            'border border-stone-300 rounded-xl py-4 px-4 text-stone-800',
          input: () => '',
          dropdownIndicator: () => classNames('text-orange-500 cursor-pointer'),
          clearIndicator: () => 'text-primary cursor-pointer w-0 h-0',
          multiValueRemove: () => 'w-0 h-0 invisible',
          multiValue: () =>
            'before:content-[","] first:before:content-[""] before:mr-1 first:before:mr-0',
          placeholder: () => 'text-stone-400 font-light',
          menu: () =>
            'mt-2 bg-white shadow border border-stone-200 rounded-2xl overflow-hidden py-3',
          option: () => 'py-2 px-4 hover:bg-stone-100',
          noOptionsMessage: () => 'py-2 px-4',
        }}
      />

      <label
        htmlFor=''
        className='absolute top-0 left-3 -translate-y-1/2 bg-white px-2 text-stone-500'
      >
        {label}
      </label>
    </div>
  );
};

export default SelectInput;
