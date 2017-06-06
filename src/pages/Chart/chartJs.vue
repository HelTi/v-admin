<template>
    <div>

        <div class="row">
            <div class="col-md-6">
                <box>
                    <h3 slot="header" class="box-title">Votes</h3>
                    <canvas id="chartbar"></canvas>
                    <div class="row" slot="footer">
                        <div class="col-md-12">
                            <p>最新数据...</p>
                        </div>
                    </div>
                </box>
            </div>
            <div class="col-md-6">
                <box border-color="box-success">
                    <h3 slot="header" class="box-title">财务报告</h3>
                    <canvas id="chartline"></canvas>
                    <div class="row" slot="footer">
                        <div class="col-md-12">
                            <p>最新数据...</p>
                        </div>
                    </div>
                </box>
            </div>
        </div>
        <div class="row">
            <div class="col-md-8">
                <box border-color="box-info">
                    <h3 slot="header" class="box-title">统计报表</h3>
                    <canvas id="chartmix"></canvas>
                    <div class="row" slot="footer">
                        <div class="col-md-12">
                            <p>最新数据...</p>
                        </div>
                    </div>
                </box>

            </div>
            <div class="col-md-4">
                <box border-color="box-danger">
                    <h3 slot="header" class="box-title">收入来源百分比</h3>
                    <canvas id="chartpie"></canvas>
                    <div class="row" slot="footer">
                        <div class="col-md-12">
                            <p>最新数据...</p>
                        </div>
                    </div>
                </box>
            </div>
        </div>
        <div class="row">


        </div>
    </div>
</template>
<script>
    import Chart from 'chart.js'
    import box from '../../components/Box/box'
    import randomNumber from '../../lib/randomNumber'
    import chartColor from '../../lib/chartColor'
    export default {
        name: 'chartjs',
        data() {
            return {
                dataLable: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                dataSetData: [12, 19, 3, 5, 2, 3]
            }
        },
        methods: {
            drawBar(){
                var that = this;
                var ctx = document.getElementById('chartbar');
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: that.dataLable,
                        datasets: [{
                            label: 'Votes',
                            data: that.dataSetData,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }
                });
            },
            drawLine(){
                var ctx = document.getElementById('chartline');
                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ["1月", "2月", "3月", "4月", "5月", "6月", "7月"],
                        datasets: [
                            {
                                label: '2106年',
                                fillColor: "rgba(220,220,220,0.5)",
                                strokeColor: "rgba(220,220,220,1)",
                                data: [65, 59, 90, 81, 56, 55, 40]
                            },
                            {
                                label: '2017年',
                                fillColor: "rgba(151,187,205,0.5)",
                                strokeColor: "rgba(151,187,205,1)",
                                data: [28, 48, 40, 19, 96, 27, 100]
                            }
                        ]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        },
                        title: {
                            display: true,
                            text: '月销售额（单位/亿）'
                        }
                    }
                })
            },
            drawPie(){
                var config = {
                    type:'pie',
                    data: {
                        datasets:[{
                            data:[20,30,50,100,35],
                            backgroundColor:[
                                    'rgba(255,99,132,1)',
                                    'rgba(54, 162, 235, 1)',
                                    'rgba(255, 206, 86, 1)',
                                    'rgba(75, 192, 192, 1)',
                                    'rgba(153, 102, 255, 1)'
                            ],
                            label: 'DataSet'
                        }],
                        labels:[
                            "黄金",
                            "白银",
                            "青铜",
                            "钻石",
                            "玻璃"
                        ]
                    },
                    options:{
                        responsive: true
                    }
                };
                var ctx=document.getElementById('chartpie').getContext('2d');
                new Chart(ctx,config);
            },
            drawMix(){
                var chartData = {
                    labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
                    datasets:[{
                        type:'line',
                        label:'支出',
                        borderColor:chartColor.blue,
                        borderWidth:2,
                        fill:false,
                        data:[
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber()
                        ]
                    },{
                        type: 'bar',
                        label: '销售',
                        backgroundColor: chartColor.red,
                        data: [
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber()
                        ],
                        borderColor: 'white',
                        borderWidth: 2
                    }, {
                        type: 'bar',
                        label: '预算',
                        backgroundColor: chartColor.green,
                        data: [
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber(),
                            randomNumber()
                        ]
                    }]
                }

                var ctx=document.getElementById('chartmix').getContext('2d');
                new Chart(ctx,{
                    type:'bar',
                    data:chartData,
                    options: {
                        responsive:true,
                        title:{
                            display:true
                           /* text:'mix chart'*/
                        },
                        tooltips:{
                            mode:'index',
                            intersect:true
                        }
                    }
                })
            }
        },
        components: {box},
        mounted(){
            this.drawBar();
            this.drawLine();
            this.drawPie();
            this.drawMix();
        }
    }
</script>
<style>

</style>