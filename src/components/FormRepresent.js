import React from 'react';
import { connect } from 'react-redux';
import { changeRepresent } from '../redux/actions/index';

function mapDispatchToProps (dispatch) {
    return{
      changeRepresent: represent => dispatch(changeRepresent(represent))
    };
  }

class FormRepresent extends React.Component {
    constructor() {
      super();
      this.state = {represent: ''}
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({represent: event.target.value});
      }

    componentDidUpdate() {
        this.props.changeRepresent(this.state.represent);
    }
    
      render () {
          const represent = this.props.represent;
    return (
        <form>
            <label>
                Choose representation: 
            </label>
        <select value={represent} onChange={this.handleChange}>
            <option selected value="Goods">Goods</option>
            <option value="Categories">Categories</option>
        </select>
        </form>
    )
}
};

const ConnectedFormRepresent = connect(null, mapDispatchToProps)(FormRepresent)
export default ConnectedFormRepresent;