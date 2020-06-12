import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class TopTenDepositChart extends React.Component {
    state = {
        data: {},
    }

    componentDidMount() {
        this.initChart();
    }

    initChart() {
        this.data = this.props.data;

        // Prepare the data
        let map = this.data.reduce(function (map, item) {
            let BranchName = item.BranchName
            let deposit = +item.TotalDeposit
            map[BranchName] = (map[BranchName] || 0) + deposit
            return map
        }, {})

        let preparedData = Object.keys(map).map(function (BranchName) {
            return {
                BranchName: BranchName,
                TotalDeposit: map[BranchName]
            }
        })

        let chart = am4core.create("TopTenDepositChart", am4charts.XYChart);

        chart.data = preparedData;

        let valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
        valueAxis.title.text = "Total Deposit";

        let categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        categoryAxis.dataFields.category = "BranchName";
        categoryAxis.title.text = "Branch Name";
        categoryAxis.tooltip.disabled = true;

        let series = chart.series.push(new am4charts.ColumnSeries());
        series.dataFields.valueX = "TotalDeposit";
        series.dataFields.categoryY = "BranchName";
        series.name = "Total Deposit";

        series.tooltipText = "{categoryY}: [bold]{valueX.value}";
        chart.cursor = new am4charts.XYCursor();

        am4core.useTheme(am4themes_animated);
        this.chart = chart;
    }

    componentWillUnmount() {
        if (this.chart) {
            this.chart.dispose();
        }
    }

    render() {
        return (
            <div id="TopTenDepositChart" style={{ width: "100%", height: "500px" }}></div>
        )
    }
}

export default TopTenDepositChart;