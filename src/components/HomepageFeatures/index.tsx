import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Open source',
    Svg: require('@site/static/img/oss.svg').default,
    description: (
      <>
        Golden Reports is <strong>free and open source</strong> under <a href="https://github.com/goldenreports/golden-reports/blob/main/LICENSE">Apache 2.0 license</a>.
      </>
    ),
  },
  {
    title: 'Modern',
    Svg: require('@site/static/img/atom.svg').default,
    description: (
      <>
        Built using the <strong>latest technologies</strong> and patterns:<br/>
        Angular, custom elements, graphql and dotnet.
      </>
    ),
  },
  {
    title: 'Easy to learn and use',
    Svg: require('@site/static/img/cake.svg').default,
    description: (
      <>
        Golden Reports was designed from the ground up to be <strong>easily</strong> installed and
        used to get your reports up and running quickly.
      </>
    ),
  },
  {
    title: 'Docker ready',
    Svg: require('@site/static/img/docker.svg').default,
    description: (
        <>
          We love Docker! <br/>
          That's why we have <strong>docker images</strong> ready for you.<br/>
          <strong>Helm charts</strong> too!
        </>
    ),
  },
  {
    title: 'Only standards',
    Svg: require('@site/static/img/html.svg').default,
    description: (
        <>
          We rely strictly on <strong>standard technologies</strong>.<br/>
          No custom implementations or frameworks to learn.<br/>
          You know HTML, CSS and GraphQL? You are good to go!
        </>
    ),
  },
  {
    title: 'Fast',
    Svg: require('@site/static/img/fast.svg').default,
    description: (
        <>
          <strong>Fast and powerful</strong> report rendering engine powered by dotnet.
        </>
    ),
  },
  {
    title: 'GraphQL',
    Svg: require('@site/static/img/graphql.svg').default,
    description: (
        <>
          GraphQL as the query engine <strong>makes data domain creation a breeze</strong>.
        </>
    ),
  },
  {
    title: 'Embeddable',
    Svg: require('@site/static/img/wc.svg').default,
    description: (
        <>
          Reports are <strong>built with custom elements</strong>. You can embed them into your favorite front-end framework (or vanilla JS) very easy.<br/>
          The report's designer too!
        </>
    ),
  },
  {
    title: 'Cross platform editor',
    Svg: require('@site/static/img/design.svg').default,
    description: (
        <>
          Edit your reports <strong>offline</strong> using our free cross platform editor.
        </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
