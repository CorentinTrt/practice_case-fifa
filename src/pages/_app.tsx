import Head from 'next/head';
import type { AppProps } from 'next/app';
import '../styles/globals.scss';

import Layout from '@sections/Layout';

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>Home App</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Layout>
				<Component {...pageProps} />;
			</Layout>
		</>
	);
}
