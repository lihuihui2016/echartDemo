// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('content-first'));
// 指定图表的配置项和数据
var option = {
    title: {
        text: '演出活动经费支出构成分析',
        textStyle: {
            fontWeight: 'normal',              //标题颜色
            color: '#ff0'
        },
    },
    color: ['#f0b926'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['创作', '排练', '场租', '演员劳务', '宣传', '其他'],
            axisTick: {
                alignWithLabel: true
            },
            axisLine: {
                lineStyle: {
                    color: '#fff',
                    width: 2
                },
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLine: {
                lineStyle: {
                    color: '#7e9ec2',
                    width: 0
                },
            },
        }
    ],
    series: [
        {
            name: '直接访问',
            type: 'bar',
            barWidth: '20%',
            data: [85, 43, 78, 60, 38, 16]
        }
    ]

};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
// window.addEventListener("resize", function () {
//     myChart.resize();
// });