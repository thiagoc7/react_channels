import React, { Component, PropTypes } from 'react';
import { Socket } from 'phoenix';

import Form from './Form';
import Filter from './Filter';
import Tasks from './Tasks';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      initialDate: '2016-01-01',
      finalDate: '2016-01-31',
      tasks: []
    }
  }

  componentDidMount() {
    let socket = new Socket('/socket', {
      logger: (kind, msg, data) => { console.log(`${kind}: ${msg}`, data); }
    });

    socket.connect();

    this.channel = socket.channel("tasks:filterBy", {
      initialDate: this.state.initialDate,
      finalDate: this.state.finalDate
    });

    this.channel.join()
        .receive("ok", resp => this.setState({tasks: resp.tasks}) )
        .receive("error", reason => console.log("join failed", reason) );

    this.channel.on("new_task", task => this.setState({
      tasks: [task, ...this.state.tasks]
    }));

    this.channel.on("all_tasks", resp => this.setState({
      tasks: resp.tasks
    }));
  }

  onCreate(task) {
    this.channel.push("new_task", task)
        .receive("error", e => console.log(e) )
  }

  onFilter(dates) {
    this.setState(dates);
    this.channel.push("new_query_params", dates)
        .receive("error", e => console.log(e) )
  }

  render() {
    return (
        <div className="container">

          <Form onCreate={this.onCreate.bind(this)}/>

          <Filter
              initialDate={this.state.initialDate}
              finalDate={this.state.finalDate}
              onFilter={this.onFilter.bind(this)}
          />

          <Tasks tasks={this.state.tasks}/>

        </div>
    )
  }
}
