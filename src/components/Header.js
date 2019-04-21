// Компонент обозначает наличие "шапки" в структуре выводом строки текста
// и выводит навигационную панель, созданную компонентом AppRouter.
import React from 'react';
import AppRouter from './AppRouter';


function Header () {
    return (
        <header>
            <h2>This is my header (or may be a logo)</h2>
            <AppRouter />
        </header>
    )
}

export default Header;