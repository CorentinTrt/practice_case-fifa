import teams, { Team } from '@constants/teams';

const findTeam = (id: string): Team | undefined => {
	return teams.find((e) => e.id === id);
};

export default findTeam;
