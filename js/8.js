// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('content-we'));
// 指定图表的配置项和数据
option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: [{
            name: '直接访问',
            textStyle: { color: "yellow" }
        }, {
            name: '邮件营销',
            textStyle: { color: "yellow" }
        }, {
            name: '联盟广告',
            textStyle: { color: "yellow" }
        }, {
            name: '视频广告',
            textStyle: { color: "yellow" }
        }]
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
                normal: {
                    show: false,
                    position: 'center'
                },
                emphasis: {
                    show: true,
                    textStyle: {
                        fontSize: '30',
                        fontWeight: 'bold'
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ]
        }
    ]
}
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// window.addEventListener("resize", function () {
//     myChart.resize();
// });