import React, { Component, PropTypes } from 'react';

export default class Filter extends Component {

  onSubmit(e) {
    e.preventDefault();
    this.props.onFilter({
      initialDate: this.refs.initialDate.value,
      finalDate: this.refs.finalDate.value
    })
  }

  render() {
    return (
        <div className="row" style={{marginBottom: 30}}>

          <h3>Filter Tasks</h3>

          <form onSubmit={this.onSubmit.bind(this)}>

            <div className="three columns">
              <label htmlFor="initialDate">Initial</label>
              <input
                  className="u-full-width"
                  id="initialDate"
                  ref="initialDate"
                  type="text"
                  defaultValue={this.props.initialDate}
              />
            </div>

            <div className="three columns">
              <label htmlFor="finalDate">Final</label>
              <input
                  className="u-full-width"
                  id="finalDate"
                  ref="finalDate"
                  type="text"
                  defaultValue={this.props.finalDate}
              />
            </div>

            <div className="row">
              <div className="twelve columns">
                <input type="submit" value="Filter" />
              </div>
            </div>

          </form>

        </div>
    )
  }
}

Filter.propTypes = {
  initialDate: PropTypes.string.isRequired,
  finalDate: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired
};