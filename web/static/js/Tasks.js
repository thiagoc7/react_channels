import React, { Component, PropTypes } from 'react';

export default class Tasks extends Component {

  render() {
    return (
        <div className="row">
          <h3>Tasks</h3>
          <ul>
            {this.props.tasks.map((task, idx) => <li key={idx}>{task.date}  =>  {task.description}</li>)}
          </ul>
        </div>
    )
  }
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
};