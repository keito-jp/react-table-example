import * as React from "react";

export default class TableHeaderColumn extends React.Component {
  render() {
    return <th>{this.props.children}</th>;
  }
}
