import Button from './Button';

const UserGreeting = () => {
	return (
		<div className="rounded-2xl bg-white p-8">
			<div className="flex flex-col sm:flex-row sm:items-center">
				{/* User Image/text */}
				<div className="flex items-center">
					<img
						src="/imgs/profile.png"
						className="hidden sm:block w-26 h-26 rounded-full mr-4"
						alt="Profile picture"
					/>

					{/* User Greeting */}
					<div className="flex flex-col gap-1">
						{/* Current Day */}
						<time className="text-primary" dateTime="5-5-2023">
							May 15, Thursday
						</time>

						{/* Greeting Text */}
						<p className="font-semibold text-3xl text-stone-700">
							Hello Dr. Maria!
						</p>

						{/* User Info */}
						<p className="text-stone-400 leading-tight mt-2 max-w-[220px]">
							British Association for Counselling & Psychotheraphy
						</p>
					</div>
				</div>

				{/* Buttons */}
				<div className="flex flex-row flex-wrap sm:flex-col gap-4 mt-4 sm:mt-0 sm:ml-auto">
					<Button className="!px-8 flex-1">My License</Button>
					<Button className="!px-8 flex-1">Edit Profile</Button>
				</div>
			</div>
		</div>
	);
};

export default UserGreeting;
