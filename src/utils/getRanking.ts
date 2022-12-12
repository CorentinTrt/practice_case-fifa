import getMatchOutcome from './getMatchOutcome';

import assignStats from './assignStats';
import copyTeamForRanking, { TeamWithStats } from '@utils/copyTeamForRanking';
import getTotalGoals from './getTotalGoals';

import { Match } from '@constants/matchsHistory';
import { Team } from '@constants/teams';

const getRanking = (teams: Team[], matchsHistory: Match[]): TeamWithStats[] => {
	// sort this array by total win (if same rank, look on the goals)

	const _teams: TeamWithStats[] = [];
	for (let team of teams) {
		_teams.push(copyTeamForRanking(team));
	}

	for (let match of matchsHistory) {
		const { idTeamA, idTeamB } = match;
		const result = getMatchOutcome(match);

		const teamA = _teams.find((e) => e.id === idTeamA);
		if (!teamA) return [];
		const indexTeamA = _teams.findIndex((e) => e.id === teamA?.id);
		_teams[indexTeamA] = assignStats(teamA, result);

		const teamB = _teams.find((e) => e.id === idTeamB);
		if (!teamB) return [];
		const indexTeamB = _teams.findIndex((e) => e.id === teamB?.id);
		_teams[indexTeamB] = assignStats(teamB, result);
	}

	// calculate total goals
	for (let i = 0; i < _teams.length; i++) {
		_teams[i] = {
			..._teams[i],
			goals: getTotalGoals(_teams[i], matchsHistory),
		};
	}

	const sortedTeams = _teams
		.sort((t1, t2) => (t1.wins < t2.wins ? 1 : t1.wins > t2.wins ? -1 : 0))
		.sort((t1, t2) => {
			if (t1.wins === t2.wins) {
				return t1.goals < t2.goals ? 1 : -1;
			} else {
				return 0;
			}
		});

	return sortedTeams;
};

export default getRanking;
