import { Match } from '@constants/matchsHistory';

type MatchOutcome = {
	isTie: Boolean;
	idWinner: string | null;
	labelWinner: string | null;
	idLooser: string | null;
	labelLooser: string | null;
};

const getMatchOutcome = (match: Match): MatchOutcome => {
	const { idTeamA, labelTeamA, scoreTeamA, idTeamB, labelTeamB, scoreTeamB } =
		match;

	return scoreTeamA === scoreTeamB
		? {
				isTie: true,
				idWinner: null,
				labelWinner: null,
				idLooser: null,
				labelLooser: null,
		  }
		: scoreTeamA > scoreTeamB
		? {
				isTie: false,
				idWinner: idTeamA,
				labelWinner: labelTeamA,
				idLooser: idTeamB,
				labelLooser: labelTeamB,
		  }
		: {
				isTie: false,
				idWinner: idTeamB,
				labelWinner: labelTeamB,
				idLooser: idTeamA,
				labelLooser: labelTeamA,
		  };
};

export type { MatchOutcome };

export default getMatchOutcome;
