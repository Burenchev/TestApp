// Компонет react-router построен по примеру из официальной документации
// с минимальными изменениями. Функция MainPage выводит условный контент домашней 
// страницы (в данном случае просто строку текста), функция Chart выводит компонет
// SortArr, содержащий график на основе сортированного массива данных.
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainContent from './MainContent'
import SortArr from './SortArr';

function MainPage() {
  return (
  <div>
    <h3>Main Page</h3>
    <MainContent />
    </div>
  )
}

function Chart() {
  return (
  <div>
      <h3>Chart</h3>
      <SortArr />
    </div>
  )
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Main Page</Link>
            </li>
            <li>
              <Link to="/chart/">Chart</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={MainPage} />
        <Route path="/chart/" component={Chart} />
      </div>
    </Router>
  );
}

export default AppRouter;