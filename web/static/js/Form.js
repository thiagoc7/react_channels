import React, { Component, PropTypes } from 'react';

export default class Form extends Component {

  onSubmit(e) {
    e.preventDefault();
    let date = this.refs.date;
    let description = this.refs.description;

    this.props.onCreate({
      date: date.value,
      description: description.value
    });

    date.value = "";
    description.value = "";
  }

  render() {
    return (
        <div className="row" style={{marginBottom: 30}}>

          <h3>New Task</h3>

          <form onSubmit={this.onSubmit.bind(this)}>

            <div className="two columns">
              <input
                  className="u-full-width"
                  type="text"
                  placeholder="2016-01-01"
                  ref="date"
              />
            </div>

            <div className="six columns">
              <input
                  className="u-full-width"
                  type="text"
                  placeholder="description"
                  ref="description"
              />
            </div>

            <div className="two columns">
              <input type="submit" value="Create Task" />
            </div>

          </form>

        </div>
    )
  }
}

Form.propTypes = {
  onCreate: PropTypes.func.isRequired
};