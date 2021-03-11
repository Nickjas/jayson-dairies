var chartDom = document.getElementById('mydiv');
var myChart = echarts.init(chartDom);
var option;

var hours = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
var days=['Saturday', 'Friday', 'Thursday',
        'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

// var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
//         '7a', '8a', '9a','10a','11a',
//         '12p', '1p', '2p', '3p', '4p', '5p',
//         '6p', '7p', '8p', '9p', '10p', '11p'];
// var days = ['Saturday', 'Friday', 'Thursday',
//         'Wednesday', 'Tuesday', 'Monday', 'Sunday'];

var data = [[0,0,2076],[0,1,1940],[0,2,2598],[0,3,2347],[0,4,2482],[0,5,3201],[0,6,2708],[0,7,2908],[0,8,3800],[0,9,3187],[0,10,3315],[0,11,3757],[1,0,2023],[1,1,1937],[1,2,2052],[1,3,2878],[1,4,2500],[1,5,2522],[1,6,3361],[1,7,2928],[1,8,3824],[1,9,3185],[1,10,3355],[1,11,3733],[2,0,2617],[2,1,1954],[2,2,2071],[2,3,2897],[2,4,2478],[2,5,2516],[2,6,3388],[2,7,2961],[2,8,3050],[2,9,3974],[2,10,3434],[2,11,3790],[3,0,2602],[3,1,1928],[3,2,2103],[3,3,2285],[3,4,3094],[3,5,2531],[3,6,3370],[3,7,2907],[3,8,3134],[3,9,3929],[3,10,3431],[3,11,3067],[4,0,2617],[4,1,1954],[4,2,2088],[4,3,2309],[4,4,3117],[4,5,2528],[4,6,2759],[4,7,3623],[4,8,3069],[4,9,4028],[4,10,3414],[4,11,3004],[5,0,2123],[5,1,1952],[5,2,2590],[5,3,2327],[5,4,3113],[5,5,2547],[5,6,2722],[5,7,3645],[5,8,3106],[5,9,3131],[5,10,4154],[5,11,2916],[6,0,2078],[6,1,1946],[6,2,2601],[6,3,2328],[6,4,2482],[6,5,3133],[6,6,2724],[6,7,3605],[6,8,3082],[6,9,3186],[6,10,4216],[6,11,2914]]

option = {
    tooltip: {
        position: 'top',
        formatter: function (params) {
            return params.value[2] + ' liters of milk were sold on  ' + hours[params.value[0]] + 'in the month of ' + days[params.value[1]];
        }
    },
    title: [],
    singleAxis: [],
    series: []
};

days.forEach(function (day, idx) {
    option.title.push({
        textBaseline: 'middle',
        top: (idx + 0.5) * 100 / 7 + '%',
        text: day
    });
    option.singleAxis.push({
        left: 150,
        type: 'category',
        boundaryGap: false,
        data: hours,
        top: (idx * 100 / 7 + 5) + '%',
        height: (100 / 7 - 10) + '%',
        // axisLabel: {
        //     interval: 2
        // }
    });
    option.series.push({
        singleAxisIndex: idx,
        coordinateSystem: 'singleAxis',
        type: 'scatter',
        data: [],
        symbolSize: function (dataItem) {
            return (dataItem[1] - 1800)*50/2288;
        }
    });
});

data.forEach(function (dataItem) {
    option.series[dataItem[0]].data.push([dataItem[1], dataItem[2]]);
});
option && myChart.setOption(option);