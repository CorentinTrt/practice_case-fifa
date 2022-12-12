import s from './scorerow.module.scss';

import { TeamWithStats } from '@utils/copyTeamForRanking';

type Props = {
	rank: number;
	team: TeamWithStats;
};

const ScoreRow = (props: Props) => {
	const { rank, team } = props;
	const { label, namePlayerA, namePlayerB, wins, ties, looses, goals } = team;

	const classeRank =
		rank == 1
			? s['first']
			: rank == 2
			? s['second']
			: rank == 3
			? s['third']
			: '';

	return (
		<div className={s['scorerow']}>
			<div className={s['details']}>
				<p className={`${s['details--rank']} ${classeRank}`}>{rank}</p>
				<p className={s['details--team-label']}>{label}</p>
				<div className={s['details--players']}>
					<p className={s['player']}>{namePlayerA}</p>
					<p className={s['player']}>{namePlayerB}</p>
				</div>
			</div>

			<div className={s['stats']}>
				<p className={s['stats--wins']}>{`Wins: ${wins}`}</p>
				<p className={s['stats--ties']}>{`Ties: ${ties}`}</p>
				<p className={s['stats--looses']}>{`Looses: ${looses}`}</p>

				<p className={s['stats--goals']}>{`Total goals: ${goals}`}</p>
			</div>
		</div>
	);
};

export default ScoreRow;
