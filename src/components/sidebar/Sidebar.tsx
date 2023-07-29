import { IoIosClose } from 'react-icons/io';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery, useOnClickOutside } from 'usehooks-ts';

import useSidebar from '../../hooks/useSidebar';
import { ReactComponent as ChevronLeftIcon } from '../../icons/chevron-left.svg';
import { ReactComponent as ChevronRightIcon } from '../../icons/chevron-right.svg';
import Menu from './Menu';

const Sidebar = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isLargeScreen = useMediaQuery('(min-width: 1024px)');
	const { toggle, isOpen, close } = useSidebar();

	const handleClickOutside = () => {
		if (!isLargeScreen) {
			close();
		}
	};

	useOnClickOutside(ref, handleClickOutside);

	// Framer motion variant
	const sidebarWidth = '250px';
	const sidebarVariants = isLargeScreen
		? {
				expanded: {
					width: sidebarWidth,
					transform: 'translateX(0)',
				},
				collapsed: {
					width: '90px',
					transform: 'translateX(0)',
				},
		  }
		: {
				expanded: { width: sidebarWidth, transform: 'translateX(0)' },
				collapsed: { width: sidebarWidth, transform: 'translateX(-100%)' },
		  };

	return (
		<motion.div
			ref={ref}
			className="fixed shadow-xl lg:shadow-none h-screen bg-white z-50 lg:relative before:bg-black backdrop-blur-lg"
			variants={sidebarVariants}
			initial={isOpen ? 'expanded' : 'collapsed'}
			animate={!isOpen ? 'collapsed' : 'expanded'}
		>
			{/* Content */}
			<div className="flex flex-col h-full pb-16 relative overflow-y-auto overflow-x-hidden">
				{/* Logo */}
				<div
					className={`h-32 min-h-[8rem] flex items-center pl-8 transition-all ${
						!isOpen && 'pl-[20px]'
					}`}
				>
					<a href="#" className="flex items-center gap-3">
						<img src="/imgs/Logo-icon.svg" />
						{isOpen && <img src="/imgs/Logo-text.svg" />}
					</a>
				</div>

				<Menu />
			</div>

			{/* Close Buttons */}
			<button
				className={`hidden lg:flex absolute bottom-5 right-5 border border-stone-200 rounded-full items-center cursor-pointer justify-center w-12 h-12 p-3 text-stone-600 hover:bg-stone-50 transition-all ${
					isOpen ? 'visible opacity-100' : 'invisible opacity-0'
				}`}
				onClick={toggle}
			>
				<ChevronLeftIcon className="h-4 w-4" />
			</button>

			{/* On Mobile */}
			<button
				className="block sm:hidden absolute top-[52px] right-5 z-50"
				onClick={close}
			>
				<IoIosClose
					size={24}
					className=" text-stone-600 hover:text-stone-900"
				/>
			</button>

			{/* When Collapsed */}
			<button
				className={`hidden lg:flex absolute top-[50%] -translate-y-[50%] right-0 translate-x-[50%] bg-primary text-white rounded-full items-center cursor-pointer justify-center w-10 h-10 p-3 hover:bg-red-500 transition-all ${
					isOpen ? 'invisible opacity-0' : 'visible opacity-100'
				}`}
				onClick={toggle}
			>
				<ChevronRightIcon className="h-4 w-4" />
			</button>
		</motion.div>
	);
};

export default Sidebar;
