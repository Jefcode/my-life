import { useNavigate } from 'react-router-dom';
import { forwardRef } from 'react';
import { IconType } from '../../types';
import classNames from '../../utils/classNames';

type ButtonTypes = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
  full?: boolean;
  children?: JSX.Element | JSX.Element[] | string;
  variant?: ButtonTypes;
  className?: string;
  disabled?: boolean;
  button?: string;
  type?: 'button' | 'submit' | 'reset';

  icon?: IconType;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'secondary',
      full,
      className = '',
      disabled = false,
      type = 'button',
      onClick,
      icon: Icon,
      href,
    }: ButtonProps,
    ref
  ) => {
    const navigate = useNavigate();
    const handleClick = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      if (href) {
        return navigate(href);
      }

      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        className={classNames(
          'py-2.5 px-6 rounded-md flex items-center justify-center gap-2 transition duration-300  active:scale-90 disabled:!bg-slate-100 disabled:!border-0 disabled:!text-slate-400 disabled:hover:!bg-slate-100 disabled:hover:!cursor-not-allowed disabled:active:!scale-100 whitespace-nowrap outline-none',
          full ? 'w-full' : '',
          variant === 'primary'
            ? 'bg-primary text-white border border-transparent hover:bg-transparent hover:text-stone-800 hover:border-stone-500'
            : variant === 'secondary'
            ? 'bg-transparent border border-stone-200 text-stone-800 hover:border-stone-500 focus:border-stone-500'
            : variant === 'tertiary'
            ? 'bg-slate-100 text-stone-800 font-medium hover:bg-slate-200'
            : '',
          className
        )}
        disabled={disabled}
        onClick={handleClick}
        type={type}
      >
        <div className='flex items-center gap-2 justify-center'>
          {Icon && <Icon />}
          {children}
        </div>
      </button>
    );
  }
);

export default Button;
