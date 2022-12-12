type Match = {
	date: Date;
	idTeamA: string;
	labelTeamA: string;
	scoreTeamA: number;
	idTeamB: string;
	labelTeamB: string;
	scoreTeamB: number;
	duration: number;
};

const matchsHistory: Match[] = [
	{
		date: new Date('2022,11,02, 12:02:00'),
		idTeamA: '1',
		labelTeamA: 'Swimming Unicorns',
		scoreTeamA: 2,
		idTeamB: '2',
		labelTeamB: 'Flying Beavers',
		scoreTeamB: 0,
		duration: 93,
	},
	{
		date: new Date('2022,11,02, 12:14:00'),
		idTeamA: '3',
		labelTeamA: 'Crying Mooses',
		scoreTeamA: 1,
		idTeamB: '4',
		labelTeamB: 'Shouting Frogs',
		scoreTeamB: 1,
		duration: 94,
	},
	{
		date: new Date('2022,11,02, 17:35:00'),
		idTeamA: '5',
		labelTeamA: 'Diving Chikens',
		scoreTeamA: 2,
		idTeamB: '7',
		labelTeamB: 'Running Dolphins',
		scoreTeamB: 3,
		duration: 93,
	},
	{
		date: new Date('2022,11,02, 17:54:00'),
		idTeamA: '6',
		labelTeamA: 'Jumping Sloths',
		scoreTeamA: 1,
		idTeamB: '3',
		labelTeamB: 'Crying Mooses',
		scoreTeamB: 0,
		duration: 92,
	},
	{
		date: new Date('2022,11,04, 12:12:00'),
		idTeamA: '2',
		labelTeamA: 'Flying Beavers',
		scoreTeamA: 2,
		idTeamB: '5',
		labelTeamB: 'Diving Chikens',
		scoreTeamB: 0,
		duration: 95,
	},
	{
		date: new Date('2022,11,04, 12:58:00'),
		idTeamA: '8',
		labelTeamA: 'Dancing Worms',
		scoreTeamA: 3,
		idTeamB: '1',
		labelTeamB: 'Swimming Unicorns',
		scoreTeamB: 0,
		duration: 91,
	},
	{
		date: new Date('2022,11,04, 17:42:00'),
		idTeamA: '4',
		labelTeamA: 'Shouting Frogs',
		scoreTeamA: 1,
		idTeamB: '7',
		labelTeamB: 'Running Dolphins',
		scoreTeamB: 3,
		duration: 95,
	},
	{
		date: new Date('2022,11,04, 18:02:00'),
		idTeamA: '6',
		labelTeamA: 'Jumping Sloths',
		scoreTeamA: 1,
		idTeamB: '2',
		labelTeamB: 'Flying Beavers',
		scoreTeamB: 0,
		duration: 92,
	},
	{
		date: new Date('2022,11,08, 12:07:00'),
		idTeamA: '8',
		labelTeamA: 'Dancing Worms',
		scoreTeamA: 2,
		idTeamB: '3',
		labelTeamB: 'Crying Mooses',
		scoreTeamB: 2,
		duration: 94,
	},
	{
		date: new Date('2022,11,08, 13:09:00'),
		idTeamA: '5',
		labelTeamA: 'Diving Chikens',
		scoreTeamA: 4,
		idTeamB: '1',
		labelTeamB: 'Swimming Unicorns',
		scoreTeamB: 3,
		duration: 96,
	},
	{
		date: new Date('2022,11,08, 17:27:00'),
		idTeamA: '4',
		labelTeamA: 'Shouting Frogs',
		scoreTeamA: 4,
		idTeamB: '6',
		labelTeamB: 'Jumping Sloths',
		scoreTeamB: 3,
		duration: 97,
	},
	{
		date: new Date('2022,11,08, 18:13:00'),
		idTeamA: '7',
		labelTeamA: 'Running Dolphins',
		scoreTeamA: 3,
		idTeamB: '8',
		labelTeamB: 'Dancing Worms',
		scoreTeamB: 3,
		duration: 94,
	},
];

export type { Match };

export default matchsHistory;
