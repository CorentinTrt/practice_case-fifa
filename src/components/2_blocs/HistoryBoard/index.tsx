import s from './historyBoard.module.scss';

import HistoryRow from '@shared/HistoryRow';

import { Match } from '@constants/matchsHistory';

type Props = {
	matchs: Match[];
};

const HistoryBoard = (props: Props) => {
	const { matchs } = props;

	const sortedMatchs = matchs.sort((m1, m2) => (m1.date < m2.date ? 1 : -1));

	return (
		<div className={s['history-board']}>
			{sortedMatchs.map((e, i) => (
				<HistoryRow key={`match_${i}`} match={e} />
			))}
		</div>
	);
};

export default HistoryBoard;
