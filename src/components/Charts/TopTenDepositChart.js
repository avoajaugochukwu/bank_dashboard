import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class TopTenDepositChart extends React.Component {
    state = {
        data: {},
    }

    componentDidMount() {
        this.data = this.props.data;
        console.log(this.data);
        // Prepare the data
        var map = this.data.reduce(function (map, item) {
            var BranchName = item.BranchName
            var price = +item.TotalDeposit
            map[BranchName] = (map[BranchName] || 0) + price
            return map
        }, {})

        var preparedData = Object.keys(map).map(function (BranchName) {
            return {
                BranchName: BranchName,
                TotalDeposit: map[BranchName]
            }
        })

        let chart = am4core.create("chartdiv", am4charts.XYChart);

        chart.paddingRight = 20;

        let data = [];
        let visits = 10;
        for (let i = 1; i < 366; i++) {
            visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
            data.push({ date: new Date(2018, 0, i), name: "name" + i, value: visits });
        }

        chart.data = preparedData;
        

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Total Deposit";


        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "BranchName";
        categoryAxis.title.text = "Branch Name";
        categoryAxis.tooltip.disabled = true;

        var series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = "TotalDeposit";
        series.dataFields.categoryY = "BranchName";
        series.name = "Total Deposit";

        series.tooltipText = "{categoryY}: [bold]{valueX.value}";
        chart.cursor = new am4charts.XYCursor();
        
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        // this.data = this.props.data;
        // console.log(this.data);
        return (
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        )
    }
}


export default TopTenDepositChart;


const TopTenDepositChartt = ({ data }) => {

    if (typeof data === 'undefined') {
        return 'loading..';
    }

    // let {data: {ItemsCount, Financials}} = data;


    let BranchName = data.map(item => [item.BranchName, item.TotalDeposit]);
    // console.log(BranchName);

    var map = data.reduce(function (map, item) {
        var BranchName = item.BranchName
        var price = +item.TotalDeposit
        map[BranchName] = (map[BranchName] || 0) + price
        return map
    }, {})

    var array = Object.keys(map).map(function (BranchName) {
        return {
            BranchName: BranchName,
            TotalDeposit: map[BranchName]
        }
    })

    console.log(array);

    let chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.data = array;

    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.grid.template.location = 0;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.tooltip.disabled = true;
    valueAxis.renderer.minWidth = 35;

    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.dateX = "date";
    series.dataFields.valueY = "value";

    series.tooltipText = "{valueY.value}";
    chart.cursor = new am4charts.XYCursor();

    let scrollbarX = new am4charts.XYChartScrollbar();
    scrollbarX.series.push(series);
    chart.scrollbarX = scrollbarX;

    return (
        <div>
            <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
        </div>
    )
}

// export default TopTenDepositChart;