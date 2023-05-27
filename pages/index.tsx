import { Inter } from 'next/font/google';
import Link from 'next/link';
import Head from 'next/head';
import styles from '@/styles/index.module.css';
import { GithubLogo } from '@/components/icons/github';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      {Title()}
      
      <div className={`${styles.group} ${styles.lowerGroup}`}>
        {GithubLink()}
        {ProjectsLink()}
        {AboutLink()}
        {ContactLink()}
      </div>

      <div className={`${styles.stars}`}></div>
      <div className={`${styles.twinkling}`}></div> 
    </main>
  )
}

const Title = () => {
  return (
    <div className={`${styles.group} ${styles.title}`}>
      <Head>
        <title>Joseph Beck</title>
      </Head>
      <p className={`${inter.className} ${styles.titleText}`}>
        Joseph Beck
      </p>
    </div>
  );
}

const GithubLink = () => {
  return (
    <a
      href="https://github.com/joseph-beck"
      className={`group ${styles.box}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${styles.boxTitleText}`}>
        Github{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none -mb-2">
          {GithubLogo()}
        </span>
      </h2>
      <p
        className={`${inter.className} ${styles.boxText}`}
      >
        Link to my Github.
      </p>
    </a>
  );
}

const ProjectsLink = () => {
  return (
    <Link
      href="/projects"
      className={`group ${styles.box}`}
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${styles.boxTitleText}`}>
        Projects{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} ${styles.boxText}`}
      >
        Projects I have worked on.
      </p>
    </Link>
  );
}

const AboutLink = () => {
  return (
    <Link
      href="/about"
      className={`group ${styles.box}`}
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${styles.boxTitleText}`}>
        About{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} ${styles.boxText}`}
      >
        About me.
      </p>
    </Link>
  );
}

const ContactLink = () => {
  return (
    <Link
      href="/contact"
      className={`group ${styles.box}`}
      rel="noopener noreferrer"
    >
      <h2 className={`${inter.className} ${styles.boxTitleText}`}>
        Contact{' '}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt;
        </span>
      </h2>
      <p
        className={`${inter.className} ${styles.boxText}`}
      >
        Ways to contact me.
      </p>
    </Link>
  );
}
