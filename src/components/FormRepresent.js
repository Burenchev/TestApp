import React from 'react';

class FormRepresent extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.representChange(event.target.value);
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

export default FormRepresent;