import { GrMenu, GrFormClose } from 'react-icons/gr';
import { ReactComponent as BellIcon } from '../icons/bell.svg';
import useSidebar from '../hooks/useSidebar';
import UserMenuDropdown from './UserMenuDropdown';
// import NotificationsDropdown from './NotificationsDropdown';

interface HeaderProps {
	pageTitle: string;
}

const Header = ({ pageTitle }: HeaderProps) => {
	const { open, close, isOpen } = useSidebar();

	return (
		<div className="flex items-center justify-between mb-8">
			{/* Title of the page */}
			<div className="flex items-center gap-3">
				<h1 className="text-2xl font-semibold">{pageTitle}</h1>
			</div>

			{/* NOTIFICATION/USER MENU Flex container */}
			<div className="flex items-center gap-4">
				<div className="relative">
					<button className="rounded-full flex items-center justify-center cursor-pointer text-stone-700 w-10 h-10 bg-white relative">
						<BellIcon />
						<div className="bg-primary absolute flex items-center justify-center top-0 -right-1 text-white w-4 h-4 text-xs rounded-full">
							3
						</div>
					</button>

					{/* <NotificationsDropdown /> */}
				</div>

				{/* User Menu */}
				<div className="relative">
					<button
						className="h-10 w-10 rounded-full bg-cover bg-center relative"
						// For Dynamic Image rendering
						style={{ backgroundImage: 'url("/imgs/profile.png")' }}
					>
						{/* Online Status */}
						<div className="w-2.5 h-2.5 bg-primary rounded-full border-2 border-white absolute bottom-0 right-0"></div>
					</button>

					<UserMenuDropdown />
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
