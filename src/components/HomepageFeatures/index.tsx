import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type Capability = {
  text: string;
  link: string;
};

type FeatureItem = {
  title: string;
  icon: string;
  description: ReactNode;
  docsLink: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Type-Safe Architecture',
    icon: '🛡️',
    description: (
      <>
        Eliminate runtime UI errors with Front's strict type system. 
        Define clear interfaces for your components and data structures.
      </>
    ),
    docsLink: '/docs/category/specification',
  },
  {
    title: 'High-Performance Core',
    icon: '⚡',
    description: (
      <>
        Powered by a low-level engine (Rust), Front ensures 
        lightning-fast parsing and minimal memory overhead for any scale.
      </>
    ),
    docsLink: '/docs/category/specification',
  },
  {
    title: 'Modern Developer Experience',
    icon: '🛠️',
    description: (
      <>
        Full-featured ecosystem designed for current workflows, 
        including LSP support, auto-formatting, and modular imports.
      </>
    ),
    docsLink: '/docs/category/specification',
  },
];

function Feature({title, icon, description, docsLink}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={styles.featureCard}>
        <div className={styles.featureHeader}>
          <div className={styles.featureIcon}>{icon}</div>
          <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
        
        <div className={styles.featureFooter}>
          <Link className={styles.learnMore} to={docsLink}>
            Explore Docs <span className={styles.arrow}>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">Why Front?</Heading>
          <p>Next-generation markup for building robust and scalable systems</p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}