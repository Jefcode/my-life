import { motion } from 'framer-motion';
import { ReactComponent as LogoutIcon } from '../icons/logout.svg';

interface UserMenuDropdown {
	onClose?: () => void;
}

const UserMenuDropdown = ({ onClose }: UserMenuDropdown) => {
	return (
		<motion.div
			className="relative z-[101]"
			variants={{ visible: { opacity: 1 }, hidden: { opacity: 0 } }}
			initial="hidden"
			animate="visible"
			exit="hidden"
		>
			{/* Backdrop */}
			<div
				className="fixed top-0 right-0 left-0 bottom-0 z-10"
				onClick={onClose}
			></div>

			<div className="bg-white top-full mt-5 rounded-xl w-64 absolute -right-4 z-20 shadow-lg shadow-stone-200 overflow-hidden">
				<ul>
					<li className="relative">
						<a
							href="#"
							className="inline-block w-full px-7 py-3 hover:bg-stone-50 text-stone-500  hover:text-stone-700"
						>
							My Profile
						</a>
					</li>
					{/* Active */}
					<li className="relative">
						<a
							href="#"
							className="inline-block w-full px-7 py-3 hover:bg-stone-50  hover:text-stone-700 font-medium text-stone-700"
						>
							Account Settings
						</a>

						{/* Active Item has this */}
						<div className="absolute left-0 top-[50%] -translate-y-[50%] w-[6px] h-9 rounded-e-lg bg-primary"></div>
					</li>
					<li className="relative">
						<a
							href="#"
							className="inline-block w-full px-7 py-3 hover:bg-stone-50 text-stone-500  hover:text-stone-700"
						>
							My Payment
						</a>
					</li>

					<li className="relative border-t border-stone-100">
						<button className="w-full px-7 py-4 hover:bg-stone-50 text-primary flex items-center gap-2">
							<LogoutIcon />
							<span>Log Out</span>
						</button>
					</li>
				</ul>
			</div>
		</motion.div>
	);
};

export default UserMenuDropdown;
