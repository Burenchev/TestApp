// Компонент выводит форму выбора представления типа select (выпадающее меню). Компонент имеет собственное
// состояние и метод его изменения handleChange, срабатывающий при изменении выбранного в форме значения,
// кроме того используется функция mapDispatchToProps, которая передает текущее состояние компонента в хранилище.
// Функция использует действие changeRepresent, объявленное в actions/index, вызов производится после обновления компонента
// с помощью функции componentDidUpdate. Вызов действия changeRepresent сразу из функции handleChange нежелателен, 
// поскольку setState срабатывает не мгновенно и есть опасность передачи в хранилище состояния, которое было ДО применения
// setState. Конкретно с этим кодом у меня происходило именно это.
import React from 'react';
import { connect } from 'react-redux';
import { changeRepresent } from '../redux/actions/index';

function mapDispatchToProps (dispatch) { // функция обеспечивает передачу данных из компонента в хранилище
    return{
      changeRepresent: represent => dispatch(changeRepresent(represent))
    };
  }

class FormRepresent extends React.Component {
    constructor() { // компоненты форм выполняются с собственными состояними (stateful), исходное состояние задано пустой строкой.
      super();
      this.state = {represent: ''}
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) { // функция вызывается при изменении значения, выбранного в форме, и устанавливает соответствующее состояние
        this.setState({represent: event.target.value});
      }

    componentDidUpdate() { // функция вызывает действие для изменения состояния хранилища только после обновления состояния компонента.
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