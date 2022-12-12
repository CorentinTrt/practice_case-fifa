import { Match } from '@constants/matchsHistory';
import { Team } from '@constants/teams';

type Stats = {
	wins: number;
	ties: number;
	looses: number;
};

const getTeamStats = (team: Team, matchHistory: Match[]): Stats => {
	const stats = { wins: 0, ties: 0, looses: 0 };

	return stats;
};

export default getTeamStats;
