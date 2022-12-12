import { useEffect, useState } from 'react';
import s from './leaderboard.module.scss';

import ScoreRow from '@shared/ScoreRow/Index';

import getRanking from '@utils/getRanking';
import { TeamWithStats } from '@utils/copyTeamForRanking';

import matchsHistory from '@constants/matchsHistory';
import teams from '@constants/teams';

const LeaderBoard = () => {
	const [state_ranking, setState_ranking] = useState<TeamWithStats[]>([]);

	useEffect(() => {
		setState_ranking([...getRanking(teams, matchsHistory)]);
	}, []);

	return (
		<div className={s['leaderboard']}>
			{state_ranking.map((e, i) => (
				<ScoreRow key={`score_${i}}`} rank={i + 1} team={e} />
			))}
		</div>
	);
};

export default LeaderBoard;
