import Head from 'next/head';
import s from './home.module.scss';

import LeaderBoard from '@blocs/LeaderBoard';

const HomePage = () => {
	return (
		<div className={s['home']}>
			<Metas />

			<div className={s['home--content']}>
				<LeaderBoard />
			</div>
		</div>
	);
};

const Metas = () => {
	return (
		<Head>
			<title>Fifa Scores - Scoreboard</title>
			<meta name='description' content='Home page of the Fifa tracking tool' />
		</Head>
	);
};

export default HomePage;
