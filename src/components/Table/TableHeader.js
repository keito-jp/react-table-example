import * as React from "react";

export default class TableHeader extends React.Component {
  render() {
    return <thead>{this.props.children}</thead>;
  }
}
