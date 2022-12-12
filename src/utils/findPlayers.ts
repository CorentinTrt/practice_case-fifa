import players, { Player } from '@constants/players';
import { Team } from '@constants/teams';

const findPlayers = (team: Team): Player[] | null => {
	const { idPlayerA, idPlayerB } = team;

	const playerA = players.find((e) => e.id === idPlayerA);
	if (!playerA) return null;
	const playerB = players.find((e) => e.id === idPlayerB);
	if (!playerB) return null;

	return [playerA, playerB];
};

export default findPlayers;
