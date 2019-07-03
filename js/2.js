// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('content-middle'));
// 指定图表的配置项和数据


var option = {
    title: {
        // text: '某站点用户访问来源',
        subtext: '调查显示',
        x: 'center',
        subtextStyle: {
            fontWeight: 'normal',              //标题颜色
            color: 'yellow'
        },
    },
    textStyle: {
        color: '#fff'
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: [{
            name: '直接访问',
            textStyle: { color: "#fff" }
        }, {
            name: '邮件营销',
            textStyle: { color: "#fff" }
        }, {
            name: '联盟广告',
            textStyle: { color: "#fff" }
        }, {
            name: '视频广告',
            textStyle: { color: "#fff" }
        }, {
            name: '搜索引擎',
            textStyle: { color: "#fff" }
        }]
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: '直接访问' },
                { value: 310, name: '邮件营销' },
                { value: 234, name: '联盟广告' },
                { value: 135, name: '视频广告' },
                { value: 1548, name: '搜索引擎' }
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.8)'
                }
            }
        }
    ]

};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// window.addEventListener("resize", function () {
//     myChart.resize();
// });
