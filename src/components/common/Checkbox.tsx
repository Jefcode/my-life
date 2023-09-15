import * as Checkbox2 from '@radix-ui/react-checkbox';
import { CheckRawIcon } from '../../icons';

interface CheckboxProps {
  id: string;
  defaultChecked?: boolean;
}

const Checkbox = ({ id, defaultChecked = false }: CheckboxProps) => {
  return (
    <Checkbox2.Root
      className='flex h-6 w-6 appearance-none items-center justify-center rounded-[4px] bg-white transition duration-100 border border-primary data-[state=checked]:bg-primary outline-none'
      defaultChecked={defaultChecked}
      id={id}
    >
      <Checkbox2.Indicator className='text-white'>
        <CheckRawIcon className='w-3 h-3' />
      </Checkbox2.Indicator>
    </Checkbox2.Root>
  );
};

export default Checkbox;
