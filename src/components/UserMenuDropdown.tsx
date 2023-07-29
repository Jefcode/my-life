import { ReactComponent as LogoutIcon } from '../icons/logout.svg';

const UserMenuDropdown = () => {
	return (
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
	);
};

export default UserMenuDropdown;
