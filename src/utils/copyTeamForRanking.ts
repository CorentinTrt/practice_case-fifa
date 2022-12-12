import players from '@constants/players';
import { Team } from '@constants/teams';

type TeamWithStats = {
	id: string;
	namePlayerA: string;
	namePlayerB: string;
	label: string;
	wins: number;
	ties: number;
	looses: number;
	goals: number;
};

const copyTeamForRanking = (team: Team): TeamWithStats => {
	const { idPlayerA, idPlayerB } = team;

	const _team = team;

	const playerA = players.find((e) => e.id === idPlayerA);
	const playerB = players.find((e) => e.id === idPlayerB);

	if (!playerA || !playerB)
		return {
			..._team,
			namePlayerA: '',
			namePlayerB: '',
			wins: 0,
			ties: 0,
			looses: 0,
			goals: 0,
		};

	return {
		..._team,
		namePlayerA: playerA?.name,
		namePlayerB: playerB?.name,
		wins: 0,
		ties: 0,
		looses: 0,
		goals: 0,
	};
};

export type { TeamWithStats };

export default copyTeamForRanking;
