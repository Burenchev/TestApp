import React from 'react';
import Highcharts, { reduce } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

import DataRow from './data.tsx';
import FormYear from './FormYear';
import FormRepresent from './FormRepresent';




class SortArr extends React.Component {
    constructor(props) {
        super(props);
        this.state = {year: '2016', represent: 'Goods'};
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleRepresentChange = this.handleRepresentChange.bind(this);
    }

    handleYearChange(year) {
        this.setState({year: year});
      }

      handleRepresentChange(represent) {
          this.setState({represent: represent})
      }

    render () {
    var result = [];
    var sortedDataYear = [];
    var sortedDataCat = [{
        name: 'More than 150',
        color: 'rgba(223, 83, 83, .5)',
        data: []
        },{
        name: 'Less than 100',
        color: 'rgba(83, 223, 83, .5)',
        data: []
        },{
        name: 'Others',
        color: 'rgba(83, 83, 223, .5)',
        data: []}] 
        
    for (var i = 0; i < DataRow.length; i++) {
        if (DataRow[i].year === parseFloat(this.state.year) && this.state.represent === 'Goods') {
            sortedDataYear.push({name: DataRow[i].name, data: [{x: DataRow[i].feature1, y: DataRow[i].feature2}]})
            result = sortedDataYear;
        } 
        
        if (DataRow[i].year === parseFloat(this.state.year) && this.state.represent === 'Categories') {

            if (DataRow[i].feature1 > 150) {
                sortedDataCat[0].data.push([DataRow[i].feature1, DataRow[i].feature2]);
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
    
    const options = {
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
        series: result
    };

    return (
        <div>
        <FormYear year={this.state.year} yearChange={this.handleYearChange}/>
        <FormRepresent represent={this.state.represent} representChange={this.handleRepresentChange}/>
        <HighchartsReact highcharts = {Highcharts} options = {options} />
    </div>)
    }
};

export default SortArr;