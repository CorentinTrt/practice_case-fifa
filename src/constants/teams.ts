type Team = {
	id: String;
	label: String;
	idPlayerA: String;
	idPlayerB: String;
};

const teams: Team[] = [
	{ id: '1', label: 'Team A', idPlayerA: '1', idPlayerB: '2' },
	{ id: '2', label: 'Team B', idPlayerA: '3', idPlayerB: '4' },
	{ id: '3', label: 'Team C', idPlayerA: '5', idPlayerB: '6' },
	{ id: '4', label: 'Team D', idPlayerA: '7', idPlayerB: '8' },
	{ id: '5', label: 'Team E', idPlayerA: '9', idPlayerB: '10' },
	{ id: '6', label: 'Team F', idPlayerA: '11', idPlayerB: '12' },
	{ id: '7', label: 'Team G', idPlayerA: '13', idPlayerB: '14' },
	{ id: '8', label: 'Team H', idPlayerA: '15', idPlayerB: '16' },
];

export type { Team };

export default teams;
