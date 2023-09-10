import { ReactComponent as HomeIcon } from '../../icons/home.svg';
import { ReactComponent as UsersIcon } from '../../icons/users.svg';
import { ReactComponent as HubIcon } from '../../icons/hub.svg';
import { ReactComponent as FilterIcon } from '../../icons/filter.svg';
import { ReactComponent as SupportIcon } from '../../icons/support.svg';
import { ReactComponent as UserIcon } from '../../icons/user.svg';
import { ReactComponent as LogoutIcon } from '../../icons/logout.svg';
import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div className='flex flex-col h-full justify-between'>
      <ul className='flex flex-col text-stone-500'>
        <MenuItem to='/dashboard' icon={HomeIcon} text='Dashboard' />
        <MenuItem to='/clients' icon={UsersIcon} text='Clients' />
        <MenuItem to='/hub' icon={HubIcon} text='The Hub' />
        <MenuItem to='/settings' icon={FilterIcon} text='Settings' />
      </ul>

      {/* Extra CTA */}
      <ul className='flex flex-col mt-auto text-stone-500'>
        <MenuItem to='/support' icon={SupportIcon} text='Support' />
        <MenuItem to='/my-profile' icon={UserIcon} text='My Profile' />
        <MenuItem to='/logout' icon={LogoutIcon} text='Log Out' />
      </ul>
    </div>
  );
};

export default Menu;
