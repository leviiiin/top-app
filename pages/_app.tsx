import { AppProps } from 'next/app';
import '../styles/global.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return <>
        <Head>
            <title>OWLtop</title>
            <link href="https://fonts.googleapis.com/css?family=Noto+Sans:100,200,300,regular,500,600,700,800,900,100italic,200italic,300italic,italic,500italic,600italic,700italic,800italic,900italic" rel="stylesheet" />
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css"></link>
        </Head>
        <Component {...pageProps} />
    </>
}

export default MyApp;