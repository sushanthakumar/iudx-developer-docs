import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    link:"../../docs/consumer",
    Svg: require('../../static/img/getting_started.svg').default,
    description: (
      <>
        What is <a href={"https://iudx.org.in/"} target={"_blank"}>IUDX?</a>
        
      </>
    ),
  },
  {
    title: 'Consuming datasets',
    link:"",
    Svg: require('../../static/img/consuming_data.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Add your datasets to IUDX',
    link:"",
    Svg: require('../../static/img/datasets.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'IUDX for data providers',
    link:"",
    Svg: require('../../static/img/provider.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'API provider resources',
    link:"",
    Svg: require('../../static/img/Api.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  {
    title: 'How to subscribe to a resource?',
    link:"",
    Svg: require('../../static/img/subscribe.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({Svg, link, title, description}) {
  return (
    
    <a className={`${clsx('col col--4')} ${styles.featureCard}`} href={link}><div className={clsx('border border--1')}>
    <div classname={styles.featureCard}>
    <div className="text--center">
      <Svg className={styles.featureSvg} alt={title} />
    </div>
    <div className="text--center padding-horiz--md">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
  </div></a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
