import Button from '../../../components/common/Button';
import Input, { NumberInput } from '../../../components/common/Input';
import Modal from '../../../components/common/Modal';
import SelectInput from '../../../components/common/SelectInput';

const EditInformationModal = () => {
  return (
    <div className='mt-10'>
      <div className='grid grid-cols-2 gap-8'>
        <Input label='First name' />
        <Input label='Last name' />
        <Input label='Phone number' />
        <Input label='Email' />
        <NumberInput label='Years Experience' />
        <NumberInput label='Hour appointment' currency='£' />
        <NumberInput label='Hour speak now' currency='£' />
        <NumberInput label='Hourly rate' currency='£' />
        <Input label='Country of Residence' />
        <Input label='Address' />
        <SelectInput
          label='Languages'
          options={[
            { value: 'english', label: 'English' },
            { value: 'french', label: 'French' },
          ]}
        />
      </div>
      <div className='flex items-center gap-5 mt-5 max-w-sm ml-auto'>
        <Modal.Close asChild>
          <Button full>Cancel</Button>
        </Modal.Close>
        <Button full variant='primary'>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditInformationModal;
