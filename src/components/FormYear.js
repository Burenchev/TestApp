import React from 'react';

class FormYear extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.props.yearChange(event.target.value);
    }

    render() {
      const year = this.props.year;
      return (
          <form>
          <label>
            Choose year: 
            <select value={year} onChange={this.handleChange}>
              <option value="2015">2015</option>
              <option selected value="2016">2016</option>
            </select>
          </label>
          </form>
      );
    }
  }

export default FormYear;
