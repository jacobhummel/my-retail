import styled from "react-emotion";

import * as styles from "../styles";

interface IButtonProps {
  background?: string;
  color?: string;
  padding?: string;
}

const Button = styled("button")((props: IButtonProps) => ({
  display: "flex",
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  padding: props.padding ? props.padding : styles.standardGap,
  borderRadius: styles.borderRadius,
  fontSize: 18,
  fontWeight: 100,
  width: "100%",
  height: "100%",
  textTransform: "uppercase",
  cursor: "pointer",
  border: `1px solid ${styles.neutralColor}`,
  background: props.background ? props.background : styles.primaryColorGradiant,
  color: props.color ? props.color : styles.whiteColor,
  ":hover": {
    opacity: 0.8,
    border: `1px solid ${styles.neutralDarkColor}`
  }
}));

export default Button;
