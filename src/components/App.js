import * as faker from "faker";
import * as React from "react";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from "./Table";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    const users = [];
    for (let i = 1; i <= 30; i++) {
      users.push({
        id: i,
        name: `${faker.name.firstName()} ${faker.name.lastName()}`,
        email: faker.internet.email(),
      });
    }
    this.state = {users};
  }

  render() {
    return (
      <div style={{margin: "20px"}}>
        <h1>Example of Table in React</h1>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Email</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {this.state.users.map((user, i) => {
              return (
                <TableRow key={user.id}>
                  <TableRowColumn>{user.id}</TableRowColumn>
                  <TableRowColumn>{user.name}</TableRowColumn>
                  <TableRowColumn>{user.email}</TableRowColumn>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}
