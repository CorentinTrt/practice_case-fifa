import s from './historyRow.module.scss';

import { Match } from '@constants/matchsHistory';

type Props = {
	match: Match;
};

const HistoryRow = (props: Props) => {
	const { labelTeamA, scoreTeamA, labelTeamB, scoreTeamB, duration, date } =
		props.match;

	return (
		<div className={s['history-row']}>
			<div className={s['score']}>
				<div className={s['left']}>
					<h2 className={s['team-name']}>{labelTeamA}</h2>
					<h2 className={s['goal']}>{scoreTeamA}</h2>
				</div>

				<div className={`${s['divider']} ${s['v']}`}></div>

				<div className={s['right']}>
					<h2 className={s['team-name']}>{labelTeamB}</h2>
					<h2 className={s['goal']}>{scoreTeamB}</h2>
				</div>
			</div>

			<div className={`${s['divider']} ${s['h']}`}></div>

			<div className={s['details']}>
				<p className={s['duration']}>{`${duration} min`}</p>

				<p className={s['date']}>{date.toDateString()}</p>
			</div>
		</div>
	);
};

export default HistoryRow;
