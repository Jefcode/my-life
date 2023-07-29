import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { GrMenu, GrFormClose } from 'react-icons/gr';
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import useSidebar from '../hooks/useSidebar';
import UserMenuDropdown from './UserMenuDropdown';
import NotificationsDropdown from './NotificationsDropdown';
import classNames from '../utils/classNames';

interface HeaderProps {
	pageTitle: string;
}

const Header = ({ pageTitle }: HeaderProps) => {
	const { open, close, isOpen } = useSidebar();

	const [notificationsOpen, setNotificationsOpen] = useState<boolean>(false);
	const [userMenuOpen, setUserMenuOpen] = useState<boolean>(false);

	return (
		<div className="flex items-center justify-between mb-8">
			{/* Title of the page */}
			<div className="flex items-center gap-3">
				<h1 className="text-2xl font-semibold">{pageTitle}</h1>
			</div>

			{/* NOTIFICATION/USER MENU Flex container */}
			<div className="flex items-center gap-4">
				{/* Close Notifications dropdown */}
				{notificationsOpen && (
					<button
						className="hidden rounded-full sm:flex items-center justify-center cursor-pointer text-stone-700 w-10 h-10 bg-white relative z-[100] transition hover:bg-stone-100"
						onClick={() => setNotificationsOpen(false)}
					>
						<GrFormClose size={22} />
					</button>
				)}

				<div className="relative hidden sm:block">
					<button
						className={classNames(
							'rounded-full flex items-center justify-center cursor-pointer text-stone-700 w-10 h-10 relative z-[100] transition',
							notificationsOpen ? 'bg-primary text-white' : 'bg-white'
						)}
						onClick={() => setNotificationsOpen(true)}
					>
						<BellIcon />

						{/*
						 * this should be gone when we see the notifications
						 * for now we hide it conditionally based on dropdown open state
						 */}
						{!notificationsOpen && (
							<div className="bg-primary absolute flex items-center justify-center top-0 -right-1 text-white w-4 h-4 text-xs rounded-full">
								3
							</div>
						)}
					</button>

					<AnimatePresence>
						{notificationsOpen && (
							<NotificationsDropdown
								onClose={() => setNotificationsOpen(false)}
							/>
						)}
					</AnimatePresence>
				</div>

				{/* User Menu */}
				<div className="relative">
					<button
						className="h-10 w-10 rounded-full bg-cover bg-center relative"
						// For Dynamic Image rendering
						style={{ backgroundImage: 'url("/imgs/profile.png")' }}
						onClick={() => setUserMenuOpen(true)}
					>
						{/* Online Status */}
						<div className="w-2.5 h-2.5 bg-primary rounded-full border-2 border-white absolute bottom-0 right-0"></div>
					</button>

					<AnimatePresence>
						{userMenuOpen && (
							<UserMenuDropdown onClose={() => setUserMenuOpen(false)} />
						)}
					</AnimatePresence>
				</div>

				{/* Open Sidebar Button */}
				<button className="rounded-full lg:hidden  cursor-pointer text-stone-700 bg-white relative">
					{!isOpen ? (
						<div
							className="w-10 h-10 flex items-center justify-center"
							onClick={open}
						>
							<GrMenu />
						</div>
					) : (
						<div
							className="w-10 h-10 flex items-center justify-center"
							onClick={open}
						>
							<GrFormClose size={22} onClose={close} />
						</div>
					)}
				</button>
			</div>
		</div>
	);
};

export default Header;
