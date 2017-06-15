import React from 'react';
import TaskListEntry from './taskListEntry';

export default class TaskList extends React.Component {
  render() {
    return (
       <table>
          {this.props.tasks.map((task, i) => {
            return <TaskListEntry key={i} task={task.task} complete={task.isCompleted} />
          })
          }
       </table>
    );
  }
}
