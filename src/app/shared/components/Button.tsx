import styled from "react-emotion";

import * as styles from "../styles";

interface IButtonProps {
  backgroundColor?: string;
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
  textTransform: "uppercase",
  margin: styles.standardGap,
  cursor: "pointer",
  backgroundColor: props.backgroundColor
    ? props.backgroundColor
    : styles.primaryColor,
  color: props.color ? props.color : styles.whiteColor,
  ":hover": {
    opacity: 0.8
  }
}));

export default Button;
