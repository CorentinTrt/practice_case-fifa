import { Match } from '@constants/matchsHistory';
import { TeamWithStats } from './copyTeamForRanking';

const getTotalGoals = (team: TeamWithStats, matchHistory: Match[]): number => {
	const { id } = team;

	let goals: number = 0;

	const playedMatches = matchHistory.filter(
		(e) => id === e.idTeamA || id === e.idTeamB
	);

	for (let match of playedMatches) {
		const { idTeamA, scoreTeamA, scoreTeamB } = match;

		idTeamA === id ? (goals += scoreTeamA) : (goals += scoreTeamB);
	}

	return goals;
};

export default getTotalGoals;
