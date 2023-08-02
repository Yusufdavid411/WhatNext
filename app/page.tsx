import Header from '../components/header';
import Head from 'next/head';
// import Navigation from '@components/navigation';
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextjs</title>
      </Head>

      <main className={styles.main}>
        <Header></Header>
      </main>
    </>
  )
}
