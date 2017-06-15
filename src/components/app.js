import React from 'react';
import TaskList from './taskList';

const tasks = [
  {
    task: 'make React tutorial',
    isCompleted: false
  },
  {
    task: 'make coffee',
    isCompleted: true
  }
  ];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: tasks
    }
  }

  render() {
    return (
      <div>
        <h1>React Todos!</h1>
        <TaskList tasks={this.state.tasks} />
      </div>
    );
  }
}
