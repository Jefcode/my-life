export interface Meeting {
	id: number;
	name: string;
	imageUrl: string;
	description: string;
	startDatetime: string;
	endDatetime: string;
	done: boolean;
}

const meetings: Meeting[] = [
	{
		id: 1,
		name: 'Leslie Alexander',
		imageUrl: '/imgs/user-1.png',
		description: `	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip`,
		startDatetime: '2023-09-11T13:00',
		endDatetime: '2023-09-11T14:30',
		done: false,
	},
	{
		id: 2,
		name: 'Michael Foster',
		imageUrl: '/imgs/user-2.jpg',
		description: `	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip`,
		startDatetime: '2023-09-28T13:53',
		endDatetime: '2023-09-28T14:30',
		done: false,
	},
	{
		id: 3,
		name: 'Dries Vincent',
		imageUrl: '/imgs/user-3.jpg',
		description: `	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip`,
		startDatetime: '2023-09-30T13:53',
		endDatetime: '2023-09-30T14:30',
		done: false,
	},
	{
		id: 4,
		name: 'Leslie Alexander',
		imageUrl: '/imgs/user-1.png',
		description: `	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip`,
		startDatetime: '2023-09-27T13:53',
		endDatetime: '2023-09-27T14:30',
		done: false,
	},
	{
		id: 5,
		name: 'Michael Foster',
		imageUrl: '/imgs/user-3.jpg',
		description: `	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip`,
		startDatetime: '2023-09-29T13:53',
		endDatetime: '2023-09-29T14:30',
		done: true,
	},
];

export default meetings;
