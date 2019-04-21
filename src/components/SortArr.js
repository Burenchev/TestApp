// Компонент импортирует массив данных из файла data.tsx, сортирует полученные
// данные по шаблону, понятному Highcharts, на основе критериев, полученных из хранилища
// с помощью функции mapStateToProps и с помощью HighCharts выводит график и формы выбора
// года и представления.
import React from 'react';
import Highcharts, { reduce } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { connect } from 'react-redux';
import DataRow from './data.tsx';
import FormYear from './FormYear';
import FormRepresent from './FormRepresent';


const mapStateToProps = (state) => { // функция преобразует состояния хранилища в свойства компонента.
    return {year: state.year, represent: state.represent}
    
};

class SortArr extends React.Component {

    render () {
    var result = []; // массив для передачи данных в Highcharts, изначально задан пустым и заполняется в процессе сортировки
    var sortedDataYear = []; // переменные-шаблоны использованы для удобства сортировки массива данных
    var sortedDataCat = [{   // в понятном Highcharts виде. При этом для представления "Товары" шаблон изначально может быть пустым, а его структура
        name: 'More than 150', // формируется в процессе заполнения, а для представления "Категории товаров" шаблон для удобства сразу сформирован с
        color: 'rgba(223, 83, 83, .5)', // готовой структурой, названиями серий данных и принудительно заданными цветами.
        data: []
        },{
        name: 'Less than 100',
        color: 'rgba(83, 223, 83, .5)',
        data: []
        },{
        name: 'Others',
        color: 'rgba(83, 83, 223, .5)',
        data: []}] 
        
    for (var i = 0; i < DataRow.length; i++) { // простой цикл сортировки данных
        if (DataRow[i].year === parseFloat(this.props.year) && this.props.represent === 'Goods') { // Сортировка по году в режиме представления "Товары"
            sortedDataYear.push({name: DataRow[i].name, data: [{x: DataRow[i].feature1, y: DataRow[i].feature2}]}) // Заполнение шаблона данными
            result = sortedDataYear; 
        } 
        
        if (DataRow[i].year === parseFloat(this.props.year) && this.props.represent === 'Categories') { // Сортировка по году в режиме представления "Категории товаров"

            if (DataRow[i].feature1 > 150) { 
                sortedDataCat[0].data.push([DataRow[i].feature1, DataRow[i].feature2]); // заполнение шаблона данными выполняется для каждой отдельной категории по очереди
            }
            if (DataRow[i].feature1 < 100) {
                sortedDataCat[1].data.push([DataRow[i].feature1, DataRow[i].feature2]);
            }
            if (DataRow[i].feature1 <= 150 && DataRow[i].feature1 >= 100) {
                sortedDataCat[2].data.push([DataRow[i].feature1, DataRow[i].feature2]);
            }
            result = sortedDataCat;
        }
    }
    
    const options = { // options используется для конфигурирования графика Highcharts, в типовой форме взята прямо из демо на официальном сайте.
        chart: {
            type: "scatter",
            zoomType: 'xy'
        },
        title: {
            text: "Goods"
        },
        xAxis: {
            title: {
                enabled: true,
                text: 'feature1'
            },
            startOnTick: true,
            endOnTick: true,
            showLastLabel: true
        },
        yAxis: {
            title: {
                text: 'feature2'
            }
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'top',
            x: 0,
            y: 0,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
            borderWidth: 1
        },
        series: result // в этом месте в качестве серии данных передается переменная result, значение которой присваивается в ходе сортировки.
    };

    return (
        <div>
        <FormYear />
        <FormRepresent />
        <HighchartsReact highcharts = {Highcharts} options = {options} />
    </div>)
    }
};

const ConnectedArr = connect(mapStateToProps) (SortArr); // вызывается connect для привязки компонента к хранилищу

export default ConnectedArr; 