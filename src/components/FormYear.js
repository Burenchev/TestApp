import React from 'react';
import { connect } from 'react-redux';
import { changeYear } from '../redux/actions/index';


function mapDispatchToProps (dispatch) {
  return{
    changeYear: year => dispatch(changeYear(year))
  };
}

class FormYear extends React.Component {
    constructor() {
      super();
      this.state = {year: ''};
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({year: event.target.value});
    }

    componentDidUpdate() {
      this.props.changeYear(this.state.year);
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

  const ConnectedFormYear = connect(null, mapDispatchToProps)(FormYear)
export default ConnectedFormYear;
