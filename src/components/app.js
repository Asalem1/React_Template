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
    let deleted;
    this.state.tasks.forEach(function(todo, i) {
      if (todo.task === taskToDelete) {
        deleted = i;
        return;
      }
    })
    this.state.tasks.splice(deleted, 1);
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
    <div id="app container" >
      <h1>React Tasks!</h1>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <AddTask
              tasks={this.state.tasks}
              createTask={this.createTask.bind(this)}
             />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <TaskList
                deleteTask={this.deleteTask.bind(this)}
                saveTask={this.saveTask.bind(this)}
                toggleTask={this.toggleTask.bind(this)}
                tasks={this.state.tasks}
              />
          </div>
      </div>
    </div>
    );
  }
}
