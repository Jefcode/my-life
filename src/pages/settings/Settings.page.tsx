import { useState } from 'react';
import { motion } from 'framer-motion';
import * as Tabs from '@radix-ui/react-tabs';
import * as Switch from '@radix-ui/react-switch';
import * as AlertDialog from '@radix-ui/react-alert-dialog';

import PageTitle from '../../components/common/PageTitle';
import Button from '../../components/common/Button';
import { NotificationsIcon, UserDismissIcon } from '../../icons';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState<string>('notifications');

  return (
    <>
      <PageTitle title='Settings' breadcrumb={[{ title: 'Settings' }]} />

      {/* Tabs + Content Flex Container */}
      <Tabs.Root value={activeTab} onValueChange={setActiveTab}>
        <div className='flex gap-4 items center'>
          {/* Tabs */}
          <div className='w-1/4'>
            <div className='w-full bg-white rounded-lg overflow-hidden'>
              {/* Tabs Flex Conainer */}
              <Tabs.List>
                <div className='flex flex-col'>
                  <TabTrigger
                    activeTab={activeTab}
                    text='Notifications'
                    value='notifications'
                  />

                  <TabTrigger
                    activeTab={activeTab}
                    text='Privacy Policy'
                    value='privacy'
                  />
                  <TabTrigger
                    activeTab={activeTab}
                    text='Terms and Conditions'
                    value='terms'
                  />
                  <TabTrigger
                    activeTab={activeTab}
                    text='Account Details'
                    value='account-details'
                  />
                  <TabTrigger
                    activeTab={activeTab}
                    text='Delete account'
                    value='delete-account'
                  />
                </div>
              </Tabs.List>
            </div>
          </div>

          {/* Content */}
          <div className='w-3/4'>
            <div className='w-full min-h-[calc(100vh-150px)] bg-white rounded-lg overflow-hidden'>
              <Tabs.Content value='notifications'>
                {/* Header => Shared */}
                <header className='relative py-5 px-6 w-full border-b border-stone-200/50 text-left transition flex items-center justify-between gap-3 text-lg font-medium h-16'>
                  <div className='text-stone-800 flex items-center gap-3'>
                    <NotificationsIcon className='w-6 h-6' />
                    <span>Notifications</span>
                  </div>

                  {/* For email */}
                  <div className='flex items-center gap-1'>
                    <span className='text-stone-800'>For</span>
                    <a
                      href='mailto:drmariaexample@gmail.com'
                      className='text-gradientRed-200'
                    >
                      drmariaexample@gmail.com
                    </a>
                  </div>
                </header>

                {/* Content */}
                <div className='p-7'>
                  <ul className='flex flex-col divide-y divide-stone-100'>
                    <li className='flex items-center text-stone-700 py-4 first:pt-0 last:pb-0 justify-between'>
                      <span>Administrative emails</span>

                      <Switch.Root className='w-[45px] h-[25px] bg-stone-100 rounded-full relative data-[state=checked]:bg-gradientRed-200 outline-none transition cursor-pointer'>
                        <Switch.Thumb className='block w-[21px] h-[21px] shadow bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]' />
                      </Switch.Root>
                    </li>
                    <li className='flex items-center text-stone-700 py-4 first:pt-0 last:pb-0 justify-between'>
                      <span>Scheduled meetings with you</span>

                      <Switch.Root
                        className='w-[45px] h-[25px] bg-stone-100 rounded-full relative data-[state=checked]:bg-gradientRed-200 outline-none transition cursor-pointer'
                        defaultChecked
                      >
                        <Switch.Thumb className='block w-[21px] h-[21px] shadow bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]' />
                      </Switch.Root>
                    </li>
                    <li className='flex items-center text-stone-700 py-4 first:pt-0 last:pb-0 justify-between'>
                      <span>Updating client profiles</span>

                      <Switch.Root
                        className='w-[45px] h-[25px] bg-stone-100 rounded-full relative data-[state=checked]:bg-gradientRed-200 outline-none transition cursor-pointer'
                        defaultChecked
                      >
                        <Switch.Thumb className='block w-[21px] h-[21px] shadow bg-white rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[22px]' />
                      </Switch.Root>
                    </li>
                  </ul>
                </div>
              </Tabs.Content>

              <Tabs.Content value='delete-account'>
                <header className='relative py-5 px-6 w-full border-b border-stone-200/50 text-left transition flex items-center justify-between gap-3 text-lg font-medium h-16'>
                  <div className='text-stone-800 flex items-center gap-3'>
                    <UserDismissIcon className='w-6 h-6' />
                    <span>Delete account</span>
                  </div>
                </header>

                {/* Content */}
                <div className='p-7'>
                  <AlertDialog.Root>
                    <AlertDialog.Trigger asChild>
                      <Button variant='primary'>Delete Account</Button>
                    </AlertDialog.Trigger>

                    <AlertDialog.Portal>
                      <AlertDialog.Overlay className='fixed inset-0 bg-black/50' />
                      <AlertDialog.Content className='w-96 bg-white fixed top-1/2 right-1/2 z-10 -translate-y-1/2 translate-x-1/2 rounded-xl text-center p-5 data-[state=open]:animate-[dialog-content-show_200ms] data-[state=closed]:animate-[dialog-content-hide_200ms]'>
                        <AlertDialog.Title className='text-stone-900 m-0 font-semibold text-2xl'>
                          Delete Your Account?
                        </AlertDialog.Title>

                        <AlertDialog.Description className='mt-2 mb-5 leading-normal'>
                          <p className='text-stone-600 '>
                            Are you sure you want to delete your account?
                          </p>
                          <p className='text-primary font-semibold'>
                            This action is final.
                          </p>
                        </AlertDialog.Description>

                        <div className='flex justify-between gap-4'>
                          <AlertDialog.Cancel asChild>
                            <button className='w-full rounded-md px-5 py-2 bg-stone-100 text-primary outline-none border-2 border-transparent transition active:scale-95 focus:border-stone-200'>
                              Cancel
                            </button>
                          </AlertDialog.Cancel>
                          <AlertDialog.Action asChild>
                            <button className='w-full rounded-md px-5 py-2 bg-stone-100 text-primary outline-none border-2 border-transparent transition active:scale-95 focus:border-stone-200'>
                              Delete
                            </button>
                          </AlertDialog.Action>
                        </div>
                      </AlertDialog.Content>
                    </AlertDialog.Portal>
                  </AlertDialog.Root>
                </div>
              </Tabs.Content>
            </div>
          </div>
        </div>
      </Tabs.Root>
    </>
  );
};

function TabTrigger({
  activeTab,
  value,
  text,
}: {
  activeTab: string;
  value: string;
  text: string;
}) {
  return (
    <Tabs.Trigger
      value={value}
      className='relative py-5 px-6 font-medium text-stone-800 w-full hover:bg-stone-50 cursor-pointer border-b border-stone-200/50 last:border-none text-left transition data-[state=active]:text-primary data-[state=active]:bg-stone-50 h-16'
    >
      <span>{text}</span>

      {activeTab === value && (
        <motion.div
          layoutId='active-indicator'
          className='absolute z-10 left-0 top-1/2 w-[6px] -mt-5 h-10 rounded-e-lg bg-primary'
        ></motion.div>
      )}
    </Tabs.Trigger>
  );
}

export default SettingsPage;
