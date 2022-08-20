import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja list | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        {/* <Navbar /> */}
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus doloremque quibusdam numquam quisquam ipsam ratione esse dolor consectetur repellendus!</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum doloribus doloremque quibusdam numquam quisquam ipsam ratione esse dolor consectetur repellendus!</p>
        <Link href='/ninjas'>
          <a className={styles.btn}>See Ninja Listing</a>
        </Link>
        {/* <Footer /> */}
      </div>
    </>
  )
}
