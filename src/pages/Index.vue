<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <info-box box-icon="fa fa-cog" box-text="CPU Traffic" box-number="80%"
                  icon-bgcolor="bg-aqua"></info-box>
      </div>
      <div class="col-md-3">
        <info-box box-icon="fa fa-google-plus" box-text="喜欢" box-number="41,410"
                  icon-bgcolor="bg-red"></info-box>
      </div>
      <div class="col-md-3">
        <info-box box-icon="fa fa-shopping-cart" box-text="销售" box-number="720"
                  icon-bgcolor="bg-green"></info-box>
      </div>
      <div class="col-md-3">
        <info-box box-icon="fa fa-group" box-text="新增人数" box-number="999" icon-bgcolor="bg-yellow">
        </info-box>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <box border-color="box-success">
          <h3 slot="header" class="box-title">财务报告</h3>
          <div class="row">
            <div class="col-md-9">
              <div class="charts">
                <canvas id="chartmix"></canvas>
              </div>
            </div>
            <div class="col-md-3">
              <div class="des-panel">
                <p class="text-center">
                  <strong>任务进度</strong>
                </p>
                <div class="progress-group">
                  <span class="progress-text">客户约谈</span>
                  <span class="progress-number"><b>160</b>/200</span>

                  <div class="progress">
                    <div class="progress-bar" role="progressbar" style="width: 80%; height: 10px;"
                         aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <progress-group ptext="电脑维修" pcolor="bg-danger" pNnumber="50" pTnumber="100"
                                :pstyle="styleObj"></progress-group>
                <progress-group ptext="楼价会议" pcolor="bg-info" pNnumber="70" pTnumber="100"
                                :pstyle="styleObj2"></progress-group>
                <progress-group ptext="文章数" pcolor="bg-success" pNnumber="50" pTnumber="100"
                                :pstyle="styleObj"></progress-group>
                <canvas id="chartpie"></canvas>
              </div>
            </div>
          </div>
          <div class="row" slot="footer">
            <div class="col-sm-3 col-xs-6">
              <div class="description-block border-right">
                <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 17%</span>
                <h5 class="description-header">$35,210.43</h5>
                <span class="description-text">TOTAL REVENUE</span>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="description-block border-right">
                <span class="description-percentage text-yellow"><i class="fa fa-caret-left"></i> 0%</span>
                <h5 class="description-header">$10,390.90</h5>
                <span class="description-text">TOTAL COST</span>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="description-block border-right">
                <span class="description-percentage text-green"><i class="fa fa-caret-up"></i> 20%</span>
                <h5 class="description-header">$24,813.53</h5>
                <span class="description-text">TOTAL PROFIT</span>
              </div>
            </div>
            <div class="col-sm-3 col-xs-6">
              <div class="description-block">
                <span class="description-percentage text-red"><i class="fa fa-caret-down"></i> 18%</span>
                <h5 class="description-header">1200</h5>
                <span class="description-text">GOAL COMPLETIONS</span>
              </div>
            </div>
          </div>
        </box>
      </div>
    </div>
  </div>
</template>
<script>
  import infoBox from '../components/infoBox/infoBox'
  import box from '../components/Box/box'
  import progressGroup from '../components/Progress/progressGroup'
  /* import randomChart from '../components/Chart/randomChart'*/
  /*  import chartDemo from '../components/echart/chartDemo'*/
  import Chart from 'chart.js'
  import randomNumber from '../lib/randomNumber'
  import chartColor from '../lib/chartColor'
  export default {
    name: 'index',
    data() {
      return {
        msg: 'index',
        styleObj: {
          width: '50%',
          height: '10px'
        },
        styleObj2: {
          width: '70%',
          height: '10px'
        }
      }
    },
    methods: {
      drawMix(){
        var chartData = {
          labels: ["一月", "二月", "三月", "四月", "五月", "六月", "七月"],
          datasets: [{
            type: 'line',
            label: '支出',
            borderColor: chartColor.blue,
            borderWidth: 2,
            fill: false,
            data: [
              randomNumber(),
              randomNumber(),
              randomNumber(),
              randomNumber(),
              randomNumber(),
              randomNumber(),
              randomNumber()
            ]
          }, {
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
        var ctx = document.getElementById('chartmix').getContext('2d');
        new Chart(ctx, {
          type: 'bar',
          data: chartData,
          options: {
            responsive: true,
            title: {
              display: true
              /* text:'mix chart'*/
            },
            tooltips: {
              mode: 'index',
              intersect: true
            }
          }
        })
      },
      drawPie(){
        var config = {
          type: 'pie',
          data: {
            datasets: [{
              data: [20, 30, 50, 100, 35],
              backgroundColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
              ],
              label: 'DataSet'
            }],
            labels: [
              "黄金",
              "白银",
              "青铜",
              "钻石",
              "玻璃"
            ]
          },
          options: {
            responsive: true,
            title: {
              display: true,
              text: '统计饼图'
            }
          }
        };
        var ctx = document.getElementById('chartpie').getContext('2d');
        new Chart(ctx, config);
      }
    },
    mounted(){
      this.drawMix();
      this.drawPie();
    },
    components: {infoBox, box, progressGroup}
  }
</script>
<style lang="scss">
  .des-panel {
    p {
      strong {
        font-size: 14px;
      }
    }

    .progress-group {
      margin-bottom: .9rem;

      .progress-text {
        font-size: 14px;
      }
      .progress-number {
        font-size: 14px;
        float: right;
      }
    }
  }

  .description-block {
    padding:5px 0;
    text-align: center;
    h5{
      margin:0;
    }
  }
  .border-right {
    border-right: 1px solid #f4f4f4;
  }
  .text-green{
    color: #00a65a !important;
  }
  .text-yellow {
    color: #f39c12 !important;
  }
  .text-red {
    color: #dd4b39 !important;
  }
</style>
