import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import equal from 'fast-deep-equal';

class DepositTrendChart extends React.Component {
    state = {
        data: {},
    }

    componentDidMount() {
        this.initChart();
    }

    componentDidUpdate(prevProps) {
        if (!equal(this.props.data, prevProps.data)) {
            this.initChart();
        }
    }

    initChart() {
        console.log(this.state.data);
        this.state.data = this.props.data;
        console.log(this.state.data);
        // Prepare the data
        let map = this.state.data.reduce(function (map, item) {
            let Date = item.Date
            let TotalDeposit = +item.TotalDeposit
            map[Date] = (map[Date] || 0) + TotalDeposit
            return map
        }, {})

        let preparedData = Object.keys(map).map(function (Date) {
            return {
                Date: Date,
                TotalDeposit: map[Date]
            }
        })

        let chart = am4core.create("DepositTrendChart", am4charts.XYChart);

        chart.data = preparedData;

        let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
        dateAxis.renderer.grid.template.location = 0;

        let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
        valueAxis.tooltip.disabled = true;
        valueAxis.renderer.minWidth = 35;

        let lineSeries = chart.series.push(new am4charts.LineSeries());
        lineSeries.dataFields.dateX = "Date";
        lineSeries.dataFields.valueY = "TotalDeposit";
        lineSeries.tooltipText = "{valueY.value}";
        
        chart.cursor = new am4charts.XYCursor();

        am4core.useTheme(am4themes_animated);
        chart.legend = new am4charts.Legend();
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="DepositTrendChart" style={{ width: "100%", height: "250px", 'backgroundColor': '#ffffff' }}></div>
        )
    }
}

export default DepositTrendChart;