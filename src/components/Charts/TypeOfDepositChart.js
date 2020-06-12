import React from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

class TypeOfDepositChart extends React.Component {
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
            let DepositType = item.DepositType
            let count = +1
            map[DepositType] = (map[DepositType] || 0) + count
            return map
        }, {})

        let preparedData = Object.keys(map).map(function (DepositType) {
            return {
                DepositType: DepositType,
                Count: map[DepositType]
            }
        })

        let chart = am4core.create("TypeOfDepositChart", am4charts.PieChart);

        chart.data = preparedData;
        console.log(preparedData);

        let pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.category = "DepositType";
        pieSeries.dataFields.value = "Count";

        chart.innerRadius = am4core.percent(40);

        pieSeries.slices.template.stroke = am4core.color("#4a2abb");
        pieSeries.slices.template.strokeWidth = 2;
        pieSeries.slices.template.strokeOpacity = 1;

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
            <div id="TypeOfDepositChart" style={{ width: "100%", height: "250px" }}></div>
        )
    }
}

export default TypeOfDepositChart;