import React, { Component } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

export default class PageContent extends Component {
  static contextType = ThemeContext;

  render() {
    const { isDarkTheme } = this.context;

    const styles = {
      backgroundColor: isDarkTheme ? "rgb(64, 72, 79)" : "white",
      height: "100vh",
      width: "100wh",
    };

    return <div style={styles}>{this.props.children}</div>;
  }
}
