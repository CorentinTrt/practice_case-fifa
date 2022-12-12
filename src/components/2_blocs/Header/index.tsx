import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import s from './header.module.scss';

const Header = () => {
	const [state_navItem, setState_navItem] = useState({ href: '', label: '' });

	const router = useRouter();

	useEffect(() => {
		const { pathname } = router;

		pathname === '/'
			? setState_navItem({ href: '/history', label: 'Matchs History' })
			: pathname === '/history'
			? setState_navItem({ href: '/', label: 'LeaderBoard' })
			: setState_navItem({ href: '', label: '' });
	}, [router]);

	const handleClickNav = () => {
		router.push(state_navItem.href);
	};

	return (
		<div className={s['header']}>
			<div className={s['logo']}>
				<img src='images/logo_signifly.png' alt='Signifly Logo' />

				<h2 className={s['logo--text']}>Fifa Tournament Tracking</h2>
			</div>

			<div className={s['nav']}>
				<h3 className={s['nav--item']} onClick={handleClickNav}>
					{state_navItem.label}
				</h3>
			</div>
		</div>
	);
};

export default Header;
