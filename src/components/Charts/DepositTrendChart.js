import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import equal from 'fast-deep-equal';
import cx from 'classnames';

import styles from './Charts.module.css';

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

        // Prepare the data
        // Use props containing data passed in from Charts.js
        let map = this.props.data.reduce(function (map, item) {
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
        dateAxis.renderer.grid.template.location = 0.5;
        dateAxis.renderer.labels.template.location = 0.5;
        dateAxis.baseInterval = {
            "timeUnit": "day",
            "count": 1
          };
        // dateAxis.skipEmptyPeriods = true;
        // dateAxis.dateFormats.setKey("day", "MMMM");

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
            <div className={styles.chartBoxShadow}>
                <p className={styles.chartHeader}>Deposit Trend</p>
                <div id="DepositTrendChart" className={cx(styles.chartBoxShadow,styles.firstLineChart)} />
            </div>
        )
    }
}

export default DepositTrendChart;