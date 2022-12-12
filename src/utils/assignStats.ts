import { TeamWithStats } from './copyTeamForRanking';
import { MatchOutcome } from './getMatchOutcome';

const assignStats = (
	team: TeamWithStats,
	result: MatchOutcome
): TeamWithStats => {
	const { id, wins, ties, looses } = team;
	const { isTie, idWinner } = result;

	if (isTie) {
		return { ...team, ties: ties + 1 };
	} else if (id === idWinner) {
		return { ...team, wins: wins + 1 };
	} else {
		return { ...team, looses: looses + 1 };
	}
};

export default assignStats;
