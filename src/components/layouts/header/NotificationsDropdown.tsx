import { motion } from 'framer-motion';
import Button from '../../ui/Button';
import { CalendarIcon, ClockIcon } from '../../../assets/icons';

interface NotificationsDropdownProps {
  onClose?: () => void;
}

const NotificationsDropdown = ({ onClose }: NotificationsDropdownProps) => {
  return (
    <motion.div
      className='relative z-50'
      variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      {/* Backdrop */}
      <div
        className='fixed top-0 right-0 left-0 bottom-0 bg-black/50 z-10'
        onClick={onClose}
      ></div>

      {/* Triangle shape */}
      <div className='w-0 h-0 border-t-0 border-r-[10px] border-l-[10px] border-b-[10px]  absolute z-20 border-t-transparent border-r-transparent border-b-white border-l-transparent top-full mt-2.5 right-1/2 translate-x-1/2'></div>

      {/* Dropdown */}
      <div className='bg-white top-full mt-5 rounded-xl w-[350px] p-5 absolute right-0 translate-x-1/4 md:translate-x-0 md:-right-10 z-20'>
        {/* Header */}
        <div className='flex items-center justify-between'>
          <p className='font-semibold text-lg'>Notifications</p>

          <Button className='text-xs'>Mark all as read</Button>
        </div>

        {/* Divider */}
        <div className='mt-5 border-b border-gray-100 w-full'></div>

        {/* Notifications List */}
        <ul className='divide-y divide-gray-100 text-sm'>
          <li className='py-5 last:pb-0'>
            <div className='w-full flex items-start gap-4 mb-4'>
              <img
                src='/imgs/user-1.png'
                alt='User image'
                className='w-8 h-8 rounded-full object-cover'
              />

              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  {/* User name */}
                  <div className='font-semibold'>Luke Addams</div>

                  {/* Date */}
                  <div className='text-stone-300 font-light'>1 hour ago</div>
                </div>
                <p className='text-stone-400 font-light mb-2'>
                  Has scheduled a meeting with you
                </p>

                {/* Date and time */}
                <div className='flex items-center gap-3 text-primary text-xs'>
                  <div className='flex items-center gap-1'>
                    <CalendarIcon className='w-3.5 h-3.5' />
                    <span>May 15, Thursday</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <ClockIcon className='w-3.5 h-3.5' />
                    <span>12:00 - 01:00</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons Flex Container */}
            <div className='flex items-center justify-between gap-1'>
              <Button variant='primary' className='w-full text-xs !py-2'>
                Accept
              </Button>
              <Button variant='tertiary' className='w-full text-xs !py-2'>
                Reschadule
              </Button>
              <Button variant='tertiary' className='w-full text-xs !py-2'>
                Decline
              </Button>
            </div>
          </li>
          <li className='py-5 last:pb-0'>
            <div className='w-full flex items-start gap-4 mb-4'>
              <img
                src='/imgs/user-1.png'
                alt='User image'
                className='w-8 h-8 rounded-full object-cover'
              />

              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  {/* User name */}
                  <div className='font-semibold'>Luke Addams</div>

                  {/* Date */}
                  <div className='text-stone-300 font-light'>1 hour ago</div>
                </div>
                <p className='text-stone-400 font-light mb-2'>
                  Has scheduled a meeting with you
                </p>

                {/* Date and time */}
                <div className='flex items-center gap-3 text-primary text-xs'>
                  <div className='flex items-center gap-1'>
                    <CalendarIcon className='w-3.5 h-3.5' />
                    <span>May 15, Thursday</span>
                  </div>
                  <div className='flex items-center gap-1'>
                    <ClockIcon className='w-3.5 h-3.5' />
                    <span>12:00 - 01:00</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Buttons Flex Container */}
            <div className='flex items-center justify-between gap-1'>
              <Button variant='primary' className='w-full text-xs !py-2'>
                Accept
              </Button>
              <Button variant='tertiary' className='w-full text-xs !py-2'>
                Reschadule
              </Button>
              <Button variant='tertiary' className='w-full text-xs !py-2'>
                Decline
              </Button>
            </div>
          </li>
          <li className='py-5 last:pb-0'>
            <div className='w-full flex items-start gap-4 mb-4'>
              <img
                src='/imgs/user-1.png'
                alt='User image'
                className='w-8 h-8 rounded-full object-cover'
              />

              <div className='w-full'>
                <div className='flex items-center justify-between'>
                  {/* User name */}
                  <div className='font-semibold'>Luke Addams</div>

                  {/* Date */}
                  <div className='text-stone-300 font-light'>1 hour ago</div>
                </div>
                <p className='text-stone-400 font-light'>
                  Has scheduled a meeting with you
                </p>
              </div>
            </div>

            {/* Button */}
            <Button variant='primary' className='w-full !py-2'>
              View updates
            </Button>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default NotificationsDropdown;
