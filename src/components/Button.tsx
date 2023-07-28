import classNames from '../utils/classNames';

type ButtonTypes = 'primary' | 'secondary' | 'tertiary';

interface ButtonProps {
	full?: boolean;
	children?: JSX.Element | JSX.Element[] | string;
	variant?: ButtonTypes;
	className?: string;
	disabled?: boolean;
	onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button = ({
	children,
	variant = 'secondary',
	full,
	className = '',
	disabled = false,
	onClick,
}: ButtonProps) => {
	return (
		<button
			className={classNames(
				'py-2.5 px-6 rounded-md flex items-center justify-center gap-2 transition duration-300  active:scale-90 disabled:!bg-slate-100 disabled:!border-0 disabled:!text-slate-400 disabled:hover:!bg-slate-100 disabled:hover:!cursor-not-allowed disabled:active:!scale-100',
				full ? 'w-full' : '',
				variant === 'primary'
					? 'bg-primary text-white border border-transparent hover:bg-white hover:text-stone-800 hover:border-stone-200'
					: variant === 'secondary'
					? 'bg-white border border-stone-200 text-stone-800 hover:bg-stone-100'
					: variant === 'tertiary'
					? 'bg-slate-100 text-stone-800 font-medium hover:bg-slate-200'
					: '',
				className
			)}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
