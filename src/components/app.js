import _ from 'lodash';
import AddTask from './addTask';
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

  createTask(task) {
    this.state.tasks.push({
      task: task,
      isCompleted: false
    });
    this.setState({ tasks: this.state.tasks })
  }

  deleteTask(taskToDelete) {
    _.remove(this.state.tasks, todo => todo.task = taskToDelete);
    this.setState({ tasks: this.state.tasks });
  }

  saveTask(oldTask, newTask) {
    const foundTask = _.find(this.state.tasks, todo => todo.task === oldTask);
    foundTask.task = newTask;
    this.setState({ tasks: this.state.tasks });
  }

  toggleTask(task) {
    const foundTask = _.find(this.state.tasks, todo => todo.task === task);
    foundTask.isCompleted = !foundTask.isCompleted;
    this.setState({ tasks: this.state.tasks })
  }

  render() {
    return (
      <div>
        <h1>React Todos!</h1>
        <AddTask tasks={this.state.tasks} createTask={this.createTask.bind(this)}/>
        <TaskList
          toggleTask={this.toggleTask.bind(this)}
          tasks={this.state.tasks}
          saveTask={this.saveTask.bind(this)}
          deleteTask={this.deleteTask.bind(this)}
         />
      </div>
    );
  }
}
