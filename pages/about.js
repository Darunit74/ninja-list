
import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';

const About = () => {
    return (
        <>
            <Head>
                <title>Ninja List | About</title>
                <meta name="keywords" content="ninjas" />
            </Head>
            <div>
                <h1>About</h1>
                <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo impedit sint dolor vero provident non tenetur odio a minima. Beatae accusantium itaque commodi repudiandae repellat quidem doloremque velit qui exercitationem?</p>
                <p className={ styles.text }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo impedit sint dolor vero provident non tenetur odio a minima. Beatae accusantium itaque commodi repudiandae repellat quidem doloremque velit qui exercitationem?</p>
            </div>
        </>
    )
}

export default About;
