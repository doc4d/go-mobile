import React from "react";
import clsx from "clsx";
import Translate from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
import { useColorMode } from '@docusaurus/theme-common'

const features = [
  {
    title: "Native apps builder",
    imageUrl: "img/native.png",
    description: (
      <>
        <Translate>
          Build your native iOS and Android apps in pure Swift and Kotlin
          using an integrated 4D component without needing any prior expertise.
        </Translate>
      </>
    ),
  },
  {
    title: "Open solution",
    imageUrl: "img/open.png",
    description: (
      <>
        <Translate>
          You can reopen your generated projects with Xcode or Android Studio
          and continue to work on them.
        </Translate>
      </>
    ),
  },
  {
    title: "Online and offline",
    imageUrl: "img/offline.png",
    description: (
      <>
        <Translate>
          All of your data is embedded in your app and available
          without needing an internet connection.
        </Translate>
      </>
    ),
  },
];

function HeroBanner() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <div className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container text--center padding-vert--lg">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx(
              "button button--secondary button--lg",
              styles.getStarted
            )}
            to={useBaseUrl(
              "docs/getting-started/introduction"
            )}
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  )
}

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  const { isDarkTheme } = useColorMode();
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <Link to={useBaseUrl(
        "docs/getting-started/introduction"
      )} style={{ textDecoration: 'none', color: isDarkTheme ? "#fff" : "#000" }}>
        {imgUrl && (
          <div className="text--center">
            <img className={styles.featureImage} src={imgUrl} alt={title} />
          </div>
        )}
        <h3>{title}</h3>
        <p>{description}</p>
      </Link>
    </div>
  );
};

function FeatureContainer() {
  return (
    <div className="container text--center margin-vert--lg">
      <h2>
        <Translate>Main features</Translate>
      </h2>
      <div className={styles.features}>
        <div className="row margin-top--0">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  )
};

export default function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <main>
        <HeroBanner />
        <FeatureContainer />
      </main>
    </Layout>
  );
}
