import * as React from "react";

export default class TableyRow extends React.Component {
  render() {
    return (
      <tr>
        <td>
          <input type="checkbox" onChange={e => {}} />
        </td>
        {this.props.children}
      </tr>
    );
  }
}
