import * as React from "react";
import styled from "react-emotion";

import * as styles from "../../shared/styles";

interface IFeatureListProps {
  title: string;
  featuresHtml: string[];
}

const FeatureContainer = styled("div")`
  margin: ${styles.standardGap};
`;

const FeatureTitle = styled("div")`
  line-height: 1.25em;
  font-size: 2em;
  text-transform: lowercase;
  color: ${styles.textColor};
`;

const FeatureUl = styled("ul")`
  padding-left: ${styles.biggerGap};
`;

const FeatureList: React.SFC<IFeatureListProps> = props => {
  return (
    <FeatureContainer>
      <FeatureTitle>{props.title}</FeatureTitle>
      <FeatureUl>
        {props.featuresHtml.map((feature: string) => (
          <li dangerouslySetInnerHTML={{ __html: feature }} />
        ))}
      </FeatureUl>
    </FeatureContainer>
  );
};

export default FeatureList;
