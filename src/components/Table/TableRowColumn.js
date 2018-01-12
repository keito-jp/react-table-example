import * as React from "react";

export default class TableyRowColumn extends React.Component {
  render() {
    return <td>{this.props.children}</td>;
  }
}
