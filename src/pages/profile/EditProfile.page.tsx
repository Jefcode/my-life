import Select from 'react-select';

import Button from '../../components/ui/Button';
import Input, { NumberInput, Textarea } from '../../components/ui/Input';
import PageTitle from '../../components/ui/PageTitle';
import Panel from '../../components/ui/Panel';
import PanelHeading from '../../components/ui/PanelHeading';
import { JournalIcon } from '../../assets/icons';
import classNames from '../../utils/classNames';
import { useState } from 'react';

const options = [
  { value: 'drugs', label: 'Drugs' },
  { value: 'alcohol', label: 'Alcohol' },
  { value: 'gambling', label: 'Gambling' },
];

const EditProfilePage = () => {
  const [number, setNumber] = useState<number>(11);
  return (
    <>
      <PageTitle
        title='My Profile'
        breadcrumb={[
          { title: 'My Profile', href: '/profile' },
          { title: 'Edit My Profile' },
        ]}
      />

      <Panel>
        <Panel.Header>
          <PanelHeading title='Profile Information' icon={JournalIcon} />
          <Button href='/profile'>Back To My Profile</Button>
        </Panel.Header>

        {/* full-width Line */}
        <div className='border-b border-stone-200 w-[200%] mt-5 mb-7 -ml-[50%]'></div>

        {/* Grid Container for the inputs */}
        <div className='min-h-[calc(100vh-400px)]'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {/* Upload Image */}
            <div className='flex items-center gap-3'>
              <div className='w-16 h-16'>
                <img
                  src='/imgs/profile.png'
                  alt='Profile image'
                  className='w-full h-full rounded-full'
                />
              </div>
              <div>
                <p className='text-stone-400 mb-2 font-light'>
                  (Accepted file types: JPG or PNG)
                </p>
                <Button
                  variant='primary'
                  className='!px-10 !py-2 !text-sm !rounded-lg'
                >
                  Upload new photo
                </Button>
              </div>
            </div>
            <div className='flex flex-col items-stretch justify-center'>
              <Input label='First name' />
            </div>
            <div className='flex flex-col items-stretch justify-center'>
              <Input label='Last name' />
            </div>
            <div className='flex flex-col items-stretch justify-center'>
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
                    dropdownIndicator: () =>
                      classNames('text-orange-500 cursor-pointer'),
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
                  Area of Expertise
                </label>
              </div>
            </div>

            <div className='flex flex-col items-stretch justify-center'>
              <NumberInput
                onChange={setNumber}
                value={number}
                label='Years Experience'
              />
            </div>

            <div className='flex flex-col items-stretch justify-center'>
              <NumberInput value={70} currency label='Hour appointment' />
            </div>

            <div className='flex flex-col items-stretch justify-center'>
              <NumberInput value={70} currency label='Hour speak now' />
            </div>

            <div className='flex flex-col items-stretch justify-center'>
              <Input label='Email' type='email' />
            </div>

            <div className='flex flex-col items-stretch justify-center'>
              <Input label='Phone number' />
            </div>

            <div className='col-span-full flex flex-col items-stretch justify-center'>
              <Textarea
                label='About me'
                value='Est eu ea sunt eu irure cupidatat tempor duis. In aliqua velit ut amet esse magna deserunt eiusmod aute aute. Excepteur est proident enim occaecat est magna tempor ea ipsum aliqua magna. Ipsum aliqua id adipisicing adipisicing reprehenderit laboris sint ipsum culpa laboris proident ipsum exercitation cillum. Duis sint excepteur ut sunt occaecat esse minim magna sunt pariatur.'
              />
            </div>
          </div>

          {/* full-width Line */}
          <div className='border-b border-stone-200 w-[200%] mt-5 -ml-[50%]'></div>

          <div className='flex justify-center mt-7 mb-3'>
            <Button variant='primary'>Update my profile</Button>
          </div>
        </div>
      </Panel>
    </>
  );
};

export default EditProfilePage;
