import {
  CalendarIcon,
  FilterIcon,
  HomeIcon,
  HubIcon,
  LogoutIcon,
  SupportIcon,
  UserIcon,
  UsersIcon,
} from '../../../assets/icons';
import MenuItem from './MenuItem';

const Menu = () => (
  <div className='flex flex-col h-full justify-between'>
    <ul className='flex flex-col text-stone-500'>
      <MenuItem to='/dashboard' icon={HomeIcon} text='Dashboard' />
      <MenuItem to='/clients' icon={UsersIcon} text='Clients' />
      <MenuItem to='/appointments' icon={CalendarIcon} text='Appointments' />
      <MenuItem to='/hub' icon={HubIcon} text='The Hub' />
      <MenuItem to='/settings' icon={FilterIcon} text='Settings' />
    </ul>

    {/* Extra CTA */}
    <ul className='flex flex-col mt-auto text-stone-500'>
      <MenuItem to='/support' icon={SupportIcon} text='Support' />
      <MenuItem to='/profile' icon={UserIcon} text='My Profile' />
      <MenuItem to='/logout' icon={LogoutIcon} text='Log Out' />
    </ul>
  </div>
);

export default Menu;
