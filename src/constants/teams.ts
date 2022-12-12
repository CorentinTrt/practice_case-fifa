type Team = {
	id: string;
	label: string;
	idPlayerA: string;
	idPlayerB: string;
};

const teams: Team[] = [
	{ id: '1', label: 'Swimming Unicorns', idPlayerA: '1', idPlayerB: '2' },
	{ id: '2', label: 'Flying Beavers', idPlayerA: '3', idPlayerB: '4' },
	{ id: '3', label: 'Crying Mooses', idPlayerA: '5', idPlayerB: '6' },
	{ id: '4', label: 'Shouting Frogs', idPlayerA: '7', idPlayerB: '8' },
	{ id: '5', label: 'Diving Chikens', idPlayerA: '9', idPlayerB: '10' },
	{ id: '6', label: 'Jumping Sloths', idPlayerA: '11', idPlayerB: '12' },
	{ id: '7', label: 'Running Dolphins', idPlayerA: '13', idPlayerB: '14' },
	{ id: '8', label: 'Dancing Worms', idPlayerA: '15', idPlayerB: '16' },
];

export type { Team };

export default teams;
