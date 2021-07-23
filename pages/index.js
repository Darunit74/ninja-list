
import Head from 'next/head';   
import Link from 'next/link';

import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Ninja List | Home</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1 className={styles.title}>Homescreen</h1>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo impedit sint dolor vero provident non tenetur odio a minima. Beatae accusantium itaque commodi repudiandae repellat quidem doloremque velit qui exercitationem?</p>
                <p className={styles.text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo impedit sint dolor vero provident non tenetur odio a minima. Beatae accusantium itaque commodi repudiandae repellat quidem doloremque velit qui exercitationem?</p>
                <Link
                    href="/ninjas"
                >
                    <a className={styles.btn}>See Ninjas Listing</a>
                </Link>
            </div>
        </>
    )
}
