import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default class PageContent extends Component {
  static contextType = ThemeContext;

  render() {
    const { theme } = this.context;

    const styles = {
      backgroundColor: theme ? "rgb(64, 72, 79)" : "white",
      height: "100vh",
      width: "100wh",
    };

    return <div style={styles}>{this.props.children}</div>;
  }
}
