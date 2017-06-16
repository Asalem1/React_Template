import React from 'react';

export default class TaskListEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    }
  }

  cancelClick() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onEditClick() {
    this.setState({ isEditing: !this.state.isEditing });
  }

  onSaveClick() {
    event.preventDefault();
    const oldTask = this.props.task
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
   this.setState({ isEditing: false })
  }

  renderActionSection() {
    console.log(this.props)
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}>Save</button>
          <button onClick={this.cancelClick.bind(this)}>Cancel</button>
        </td>
      );
    }
    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}>Edit</button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}>Delete</button>
      </td>
    );
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      color: isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    }

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput" />
          </form>
        </td>
      )
    }
    return (
      <td
        style={taskStyle}
        onClick={this.props.toggleTask.bind(this, task)}
      >
        {task}
      </td>
    );
  }

  render() {
    return (
        <thead>
          <tr>
            {this.renderTaskSection()}
            {this.renderActionSection()}
          </tr>
        </thead>
    );
  }
}
