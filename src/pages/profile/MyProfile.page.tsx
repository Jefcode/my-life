import { Link } from 'react-router-dom';
import Button from '../../components/common/Button';
import EditButton from '../../components/common/EditButton';
import PageTitle from '../../components/common/PageTitle';
import Panel from '../../components/common/Panel';
import PanelHeading from '../../components/common/PanelHeading';

import MyTabs from '../../components/common/MyTabs';
import Row from '../../components/common/Row';
import Input from '../../components/common/Input';
import {
  ChevronRightIcon,
  FilterActiveIcon,
  JournalIcon,
  MailIcon,
  MediaIcon,
  PhoneIcon,
  WalletIcon,
} from '../../icons';

const MyProfilePage = () => {
  return (
    <>
      <PageTitle title='My Profile' breadcrumb={[{ title: 'My Profile' }]} />
      <Panel className='mb-5'>
        <div className='w-full flex flex-col xl:flex-row gap-4 items-center justify-between'>
          {/* Doctor's info */}
          <div className='flex flex-col text-center xl:text-left xl:flex-row items-center gap-5'>
            <div className='relative'>
              <div className='w-24 h-24'>
                <img
                  src='/imgs/profile.png'
                  alt='Doctor photo'
                  className='rounded-full'
                />
              </div>

              <EditButton className='absolute -bottom-1 right-2' />
            </div>

            <div className='flex flex-col gap-1'>
              <p className='text-xl font-semibold text-stone-700'>
                Dr. Maria Gott
              </p>

              <p className='text-stone-500 text-sm'>
                British Association for Counselling & Psychotheraphy
              </p>

              {/* Categories of specialty */}
              <div className='flex flex-wrap items-center justify-center xl:justify-start gap-2 mt-2'>
                <div className='text-primary text-sm bg-rose-100 rounded-md px-3.5 py-1.5 font-medium'>
                  Smoking
                </div>
                <div className='text-primary text-sm bg-rose-100 rounded-md px-3.5 py-1.5 font-medium'>
                  Drugs
                </div>
                <div className='text-primary text-sm bg-rose-100 rounded-md px-3.5 py-1.5 font-medium'>
                  Anxiety
                </div>
              </div>
            </div>
          </div>

          {/* Right Half */}
          <div className='flex w-full sm:w-auto flex-col xl:flex-row gap-7 items-stretch'>
            {/* Stats */}
            <div className='xl:border-x border-stone-200/50 sm:divide-x divide-stone-200/50 flex flex-col sm:flex-row items-center'>
              {/* Track */}
              <div className='w-1/2 h-full flex flex-col justify-center items-center p-4'>
                <span className='bg-gradient-to-r from-gradientRed-200 to-gradientRed-100 bg-clip-text whitespace-nowrap text-transparent font-bold text-xl'>
                  11 years
                </span>
                <span className='text-stone-400 font-light'>experience</span>
              </div>
              <div className='w-1/2 h-full flex flex-col justify-center items-center p-4'>
                <span className='bg-gradient-to-r from-gradientRed-200 to-gradientRed-100 bg-clip-text whitespace-nowrap text-transparent font-bold text-xl'>
                  £70/hour
                </span>
                <span className='text-stone-400 font-light'>appointment</span>
              </div>
              <div className='w-1/2 h-full flex flex-col justify-center items-center p-4'>
                <span className='bg-gradient-to-r from-gradientRed-200 to-gradientRed-100 bg-clip-text whitespace-nowrap text-transparent font-bold text-xl'>
                  £75/hour
                </span>
                <span className='text-stone-400 font-light'>speak now</span>
              </div>
            </div>

            {/* Buttons */}
            <div className='flex flex-col xs:flex-row xl:flex-col items-stretch justify-between gap-2'>
              <Button className='w-full' variant='primary'>
                Edit Profile
              </Button>
              <Button className='w-full'>My License</Button>
            </div>
          </div>
        </div>
      </Panel>

      {/* Grid (Payment/Media/Setting/Email/Phone/About me) */}
      <div className='w-full grid grid-cols-1 xl:grid-cols-3 grid-rows-3 gap-5 mb-5'>
        {/* Payment */}
        <Panel className='flex items-center'>
          <Panel.Header>
            <PanelHeading
              className='text-slate-800'
              icon={WalletIcon}
              title='My Payment'
            />

            <Link
              to='/profile/my-payment'
              className='border w-8 h-8 rounded-md border-stone-200 p-2 flex items-center justify-center text-primary'
            >
              <ChevronRightIcon className='w-3 h-3' />
            </Link>
          </Panel.Header>
        </Panel>

        {/* Media */}
        <Panel className='flex items-center'>
          <Panel.Header>
            <PanelHeading
              className='text-slate-800'
              icon={MediaIcon}
              title='My Media'
            />

            <Link
              to='/profile/my-media'
              className='border w-8 h-8 rounded-md border-stone-200 p-2 flex items-center justify-center text-primary'
            >
              <ChevronRightIcon className='w-3 h-3' />
            </Link>
          </Panel.Header>
        </Panel>

        {/* Settings */}
        <Panel className='flex items-center'>
          <Panel.Header>
            <PanelHeading
              className='text-slate-800'
              icon={FilterActiveIcon}
              title='Settings'
            />
            <Link
              to='/'
              className='border w-8 h-8 rounded-md border-stone-200 p-2 flex items-center justify-center text-primary'
            >
              <ChevronRightIcon className='w-3 h-3' />
            </Link>
          </Panel.Header>
        </Panel>

        {/* About */}
        <Panel className='xl:col-span-2 row-span-2'>
          <Panel.Header>
            <PanelHeading title='About me' icon={JournalIcon} />
            <EditButton />
          </Panel.Header>

          <p className='text-stone-600 mt-4'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptatedolore eu fugiat nulla
            <a
              href=''
              className='text-primary decoration-primary underline mx-1'
            >
              Read More
            </a>
          </p>
        </Panel>

        {/* Email */}
        <Panel className='flex items-center'>
          <div className='flex items-center gap-4'>
            <MailIcon className='w-7 h-7' />
            <a
              href='mailto:rioyaexample@gmail.com'
              className='text-slate-800 font-medium text-lg underline'
            >
              rioyaexample@gmail.com
            </a>
          </div>
        </Panel>

        {/* Phone */}
        <Panel className='flex items-center'>
          <div className='flex items-center gap-4'>
            <PhoneIcon className='w-7 h-7' />
            <a
              href='tel:rioyaexample@gmail.com'
              className='text-slate-800 font-medium text-lg underline'
            >
              075 0000 0000
            </a>
          </div>
        </Panel>
      </div>

      {/* My Information */}
      <Panel>
        <Panel.Header>
          <PanelHeading icon={JournalIcon} title='My Information' />
          <Button>Edit Information</Button>
        </Panel.Header>

        <div className='mt-3'>
          <MyTabs defaultValue='general-info'>
            <MyTabs.List fullBorder>
              <MyTabs.Trigger value='general-info' text='General Information' />
              <MyTabs.Trigger
                value='personal-info'
                text='Personal Information'
              />
              <MyTabs.Trigger value='qualifications' text='Qualifications' />
            </MyTabs.List>

            <div className='mt-8 min-h-[300px]'>
              <MyTabs.Content value='general-info'>
                {/* Inputs Flex Container */}
                <Row>
                  <div className='w-full sm:w-1/2 md:w-1/3 px-4'>
                    <Input label='Firstname' />
                  </div>
                  <div className='w-full sm:w-1/2 md:w-1/3 px-4'>
                    <Input label='Lastname' />
                  </div>
                  <div className='w-full md:w-1/3 px-4'>
                    <Input label='Phone Number' />
                  </div>
                  <div className='w-full md:w-1/3 px-4'>
                    <Input type='email' label='Email' />
                  </div>
                  <div className='w-full md:w-1/3 px-4'>
                    <Input label='Years experience' />
                  </div>
                  <div className='w-full md:w-1/3 px-4'>
                    <Input label='Hour appointment' />
                  </div>
                </Row>
              </MyTabs.Content>
            </div>
            <MyTabs.Content value='personal-info'></MyTabs.Content>
            <MyTabs.Content value='qualifications'></MyTabs.Content>
          </MyTabs>
        </div>
      </Panel>
    </>
  );
};

export default MyProfilePage;
