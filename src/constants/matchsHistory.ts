type Match = {
	date: Date;
	idTeamA: String;
	scoreTeamA: Number;
	idTeamB: String;
	scoreTeamB: Number;
	duration: Number;
};

const History: Match[] = [
	{
		date: new Date('2022,11,02, 12,02,00'),
		idTeamA: '1',
		scoreTeamA: 2,
		idTeamB: '2',
		scoreTeamB: 0,
		duration: 93,
	},
	{
		date: new Date('2022,11,02, 12,14,00'),
		idTeamA: '3',
		scoreTeamA: 1,
		idTeamB: '4',
		scoreTeamB: 1,
		duration: 94,
	},
	{
		date: new Date('2022,11,02, 17,35,00'),
		idTeamA: '5',
		scoreTeamA: 2,
		idTeamB: '7',
		scoreTeamB: 3,
		duration: 93,
	},
	{
		date: new Date('2022,11,02, 17,54,00'),
		idTeamA: '6',
		scoreTeamA: 1,
		idTeamB: '3',
		scoreTeamB: 0,
		duration: 92,
	},
	{
		date: new Date('2022,11,04, 12,12,00'),
		idTeamA: '2',
		scoreTeamA: 2,
		idTeamB: '5',
		scoreTeamB: 0,
		duration: 95,
	},
	{
		date: new Date('2022,11,04, 12,58,00'),
		idTeamA: '8',
		scoreTeamA: 3,
		idTeamB: '1',
		scoreTeamB: 0,
		duration: 91,
	},
	{
		date: new Date('2022,11,04, 17,42,00'),
		idTeamA: '4',
		scoreTeamA: 1,
		idTeamB: '7',
		scoreTeamB: 3,
		duration: 95,
	},
	{
		date: new Date('2022,11,04, 18,02,00'),
		idTeamA: '6',
		scoreTeamA: 1,
		idTeamB: '2',
		scoreTeamB: 0,
		duration: 92,
	},
	{
		date: new Date('2022,11,08, 12,07,00'),
		idTeamA: '8',
		scoreTeamA: 2,
		idTeamB: '3',
		scoreTeamB: 2,
		duration: 94,
	},
	{
		date: new Date('2022,11,08, 13,09,00'),
		idTeamA: '5',
		scoreTeamA: 4,
		idTeamB: '1',
		scoreTeamB: 3,
		duration: 96,
	},
	{
		date: new Date('2022,11,08, 17,27,00'),
		idTeamA: '4',
		scoreTeamA: 4,
		idTeamB: '6',
		scoreTeamB: 3,
		duration: 97,
	},
];

export type { Match };

export default History;
