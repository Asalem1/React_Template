import React from 'react';

export default class TaskListEntry extends React.Component {
  render() {
    return (
        <thead>
          <tr>
            <th>{this.props.task}</th>
            <th>{this.props.complete.toString()}</th>
          </tr>
        </thead>
    );
  }
}
