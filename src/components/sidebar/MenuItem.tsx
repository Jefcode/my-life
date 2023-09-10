import { NavLink } from 'react-router-dom';

import useSidebar from '../../hooks/useSidebar';
import classNames from '../../utils/classNames';

type IconType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

interface MenuItemProps {
  to: string;
  icon: IconType;
  text: string;
}

const MenuItem = ({ icon: Icon, text, to }: MenuItemProps) => {
  const { isOpen } = useSidebar();

  return (
    <li>
      <NavLink
        to={to}
        className='relative flex px-8 py-5 items-center gap-4 hover:bg-stone-50 transition'
      >
        {({ isActive }) => (
          <>
            <div className='w-6'>
              <Icon
                className={classNames(
                  isActive ? 'text-primary' : 'text-stone-700',
                  'w-6 h-6'
                )}
              />
            </div>

            <span
              className={classNames(
                isActive ? 'text-stone-800 font-medium' : '',
                'whitespace-nowrap flex-1'
              )}
            >
              {isOpen && text}
            </span>

            {/* Active Item has */}
            {isActive && (
              <div className='absolute left-0 top-[50%] -translate-y-[50%] w-[6px] h-11 rounded-e-lg bg-primary'></div>
            )}
          </>
        )}
      </NavLink>
    </li>
  );
};

export default MenuItem;
