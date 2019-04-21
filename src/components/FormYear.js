// Компонент выводит форму выбора года типа select (выпадающее меню). Компонент имеет собственное
// состояние и метод его изменения handleChange, срабатывающий при изменении выбранного в форме значения,
// кроме того используется функция mapDispatchToProps, которая передает текущее состояние компонента в хранилище.
// Функция использует действие changeYear, объявленное в actions/index, вызов производится после обновления компонента
// с помощью функции componentDidUpdate. Вызов действия changeYear сразу из функции handleChange нежелателен, 
// поскольку setState срабатывает не мгновенно и есть опасность передачи в хранилище состояния, которое было ДО применения
// setState. Конкретно с этим кодом у меня происходило именно это.
import React from 'react';
import { connect } from 'react-redux';
import { changeYear } from '../redux/actions/index';


function mapDispatchToProps (dispatch) { // функция обеспечивает передачу данных из компонента в хранилище
  return{
    changeYear: year => dispatch(changeYear(year))
  };
}

class FormYear extends React.Component {
    constructor() { // компоненты форм выполняются с собственными состояними (stateful), исходное состояние задано пустой строкой.
      super();
      this.state = {year: ''};
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) { // функция вызывается при изменении значения, выбранного в форме, и устанавливает соответствующее состояние
      this.setState({year: event.target.value});
    }

    componentDidUpdate() { // функция вызывает действие для изменения состояния хранилища только после обновления состояния компонента.
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
