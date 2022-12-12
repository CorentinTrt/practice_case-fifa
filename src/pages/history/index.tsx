import Head from 'next/head';

import s from './history.module.scss';

import HistoryBoard from '@blocs/HistoryBoard';
import Modal from '@blocs/Modals';

import matchsHistory from '@constants/matchsHistory';
import { useState } from 'react';

const History = () => {
	const [state_isModalOpen, setState_isModalOpen] = useState(false);

	const toggleModal = () => {
		setState_isModalOpen(!state_isModalOpen);
	};

	return (
		<div className={s['history']}>
			<Metas />

			<Modal isOpen={state_isModalOpen} onClose={toggleModal} />

			<div className={s['add-match']} onClick={toggleModal}>
				ADD MATCH
			</div>

			<HistoryBoard matchs={matchsHistory} />
		</div>
	);
};

const Metas = () => {
	return (
		<Head>
			<title>Fifa Scores - History</title>
			<meta
				name='description'
				content='History page of the Fifa tracking tool'
			/>
		</Head>
	);
};

export default History;
