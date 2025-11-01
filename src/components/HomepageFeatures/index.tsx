import Heading from "@theme/Heading";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Drag & Drop Interface",
    Svg: require("@site/static/img/drag_and_drop.svg").default,
    description: (
      <>
        Create stunning layouts with our intuitive drag-and-drop interface
        powered by Craft.js. Build complex UIs without writing a single line of
        code.
      </>
    ),
  },
  {
    title: "DevExtreme Integration",
    Svg: require("@site/static/img/devextreme_Integration.svg").default,
    description: (
      <>
        Leverage the power of DevExtreme components seamlessly integrated with
        Craft.js. Access rich UI controls including grids, charts, forms and
        more in your layout designer.
      </>
    ),
  },
  {
    title: "Dynamic & Flexible",
    Svg: require("@site/static/img/dynamic_and_flexibility.svg").default,
    description: (
      <>
        Build dynamic layouts that adapt to your needs. Save, load, and share
        layouts with our flexible architecture built on React and modern web
        technologies.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
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
