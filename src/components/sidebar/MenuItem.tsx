type IconType = React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

import useSidebar from '../../hooks/useSidebar';
import classNames from '../../utils/classNames';

interface MenuItemProps {
	icon: IconType;
	text: string;
	active?: boolean;
}

const MenuItem = ({ icon: Icon, text, active = false }: MenuItemProps) => {
	const { isOpen } = useSidebar();

	return (
		<li className="relative">
			<a
				href="#"
				className="flex px-8 py-5 items-center gap-4 hover:bg-stone-50 transition"
			>
				<div className="w-6">
					<Icon
						className={classNames(
							active ? 'text-primary' : 'text-stone-700',
							'w-6 h-6'
						)}
					/>
				</div>
				{isOpen && (
					<span
						className={classNames(
							active ? 'text-stone-800 font-medium' : '',
							'whitespace-nowrap flex-1'
						)}
					>
						{text}
					</span>
				)}
			</a>

			{/* Active Item has */}
			{active && (
				<div className="absolute left-0 top-[50%] -translate-y-[50%] w-[6px] h-11 rounded-e-lg bg-primary"></div>
			)}
		</li>
	);
};

export default MenuItem;
