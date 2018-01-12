import * as React from "react";

export default class Table extends React.Component {
  render() {
    return <table>{this.props.children}</table>;
  }
}
