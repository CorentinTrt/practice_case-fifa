import { ReactNode } from 'react';
import s from './layout.module.scss';

import Header from '@blocs/Header';

type Props = {
	children: ReactNode;
};

const Layout = (props: Props) => {
	const { children } = props;

	return (
		<div className={s['layout']}>
			<Header />
			{children}
		</div>
	);
};

export default Layout;
