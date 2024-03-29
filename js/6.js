// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('content-three'));
// 指定图表的配置项和数据
var data = [];

for (var i = 0; i <= 360; i++) {
    var t = i / 180 * Math.PI;
    var r = Math.sin(2 * t) * Math.cos(2 * t);
    data.push([r, i]);
}

option = {
    title: {
        text: '极坐标双数值轴',
        textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#ff0'
        },
    },
    legend: {
        data: [{
            name: 'line',
            textStyle: { color: "#f00" }
        }]
    },
    polar: {
        center: ['50%', '54%']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    angleAxis: {
        type: 'value',
        startAngle: 0
    },
    radiusAxis: {
        min: 0
    },
    series: [{
        coordinateSystem: 'polar',
        name: 'line',
        type: 'line',
        showSymbol: false,
        data: data
    }],
    animationDuration: 2000
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// window.addEventListener("resize", function () {
//     myChart.resize();
// });