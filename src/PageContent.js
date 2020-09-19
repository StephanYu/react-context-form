import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default function PageContent(props) {
  const { theme } = useContext(ThemeContext);
  const styles = {
    backgroundColor: theme ? "rgb(64, 72, 79)" : "white",
    height: "100vh",
    width: "100wh",
  };
  return <div style={styles}>{props.children}</div>;
}
