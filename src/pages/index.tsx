import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function randomEmoji() {
  const emojis = ['🚀', '✨', '🔥', '💻', '📐', '🛠️'];
  const randomIndex = Math.floor(Math.random() * emojis.length);

  return emojis[randomIndex];
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  
  const features = [
    'An open-source markup language built for modern web',
    'Strictly typed, secure, and highly scalable',
    'Modular architecture with a fast Rust-based parser',
    'Rich ecosystem of tools'
  ];

  return (
    <header className={styles.heroBanner}>
      <div className={clsx('container', styles.heroContainer)}>
        <div className={styles.heroContent}>
          <Heading as="h1" className={styles.heroTitle}>
            Build simple, secure, scalable interfaces with Front
          </Heading>
          
          <ul className={styles.featureList}>
            {features.map((text, idx) => (
              <li key={idx} className={styles.featureItem}>
                <span className={styles.checkIcon}>✓</span> {text}
              </li>
            ))}
          </ul>

          <div className={styles.buttons}>
            <Link
              className={clsx('button button--lg', styles.buttonPrimary)}
              to="/docs/intro">
              Get Started
            </Link>
            <Link
              className={clsx('button button--lg', styles.buttonOutline)}
              to="/#">
              Download
            </Link>
          </div>
          
          <p className={styles.downloadLinks}>
            Download packages for <Link to="#">Windows 64-bit</Link>, <Link to="#">macOS</Link>, <Link to="#">Linux</Link>, and <Link to="#">more</Link>
          </p>
        </div>

        <div className={styles.heroImage}>
          <div className={styles.placeholderMascot}>{randomEmoji()}</div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="Next-generation markup language for the modern web">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
