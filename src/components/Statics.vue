<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="7">
                <el-card class="statics-card">
                    <div id="articleCountReport" class="report-charts"></div>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="statics-card">
                    <div id="starCountReport" class="report-charts"></div>
                </el-card>
            </el-col>
        </el-row>
        <el-row :gutter="10">
            <el-col :span="7">
                <el-card class="statics-card">
                    <div id="commentCountReport" class="report-charts"></div>
                </el-card>
            </el-col>
            <el-col :span="7">
                <el-card class="statics-card">
                    <div id="userCountReport" class="report-charts"></div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Statics',
  data () {
    return {
      chartsOption: {
        title: {
          text: ''
        },
        xAxis: {
          data: ['第一季度', '第二季度', '第三季度', '第四季度']
        },
        yAxis: {
        },
        series: [{
          name: '',
          type: 'bar',
          data: []
        }]
      },
      reports: [
        {
          id: 'articleCountReport',
          title: '文章数',
          option: {},
          data: [2, 5, 10, 18]
        },
        {
          id: 'starCountReport',
          title: '点赞数',
          option: {},
          data: [20, 15, 40, 35]
        },
        {
          id: 'commentCountReport',
          title: '评论数',
          option: {},
          data: [12, 10, 20, 18]
        },
        {
          id: 'userCountReport',
          title: '用户数',
          option: {},
          data: [2, 4, 9, 18]
        }
      ]
    }
  },
  mounted () {
    this.initReport()
    // this.draw()
  },
  methods: {
    initReport () {
      this.reports.forEach((report, index) => {
        report.option = JSON.parse(JSON.stringify(this.chartsOption))
        report.option.title.text = report.title
        report.option.series[0].name = report.title
        report.option.series[0].data = report.data
        let countReport = this.$echarts.init(document.getElementById(report.id))
        countReport.setOption(report.option)
        console.log(report.option)
      })
    },
    draw () {
      let articleCountReport = this.$echarts.init(document.getElementById('articleCountReport'))
      let option = {
        title: {
          text: '文章数'
        },
        xAxis: {
          data: ['第一季度', '第二季度', '第三季度', '第四季度']
        },
        yAxis: {
        },
        series: [{
          name: '文章数',
          type: 'bar',
          data: [2, 5, 10, 18]
        }]
      }
      articleCountReport.setOption(option)
    }
  }
}
</script>

<style scoped>
    .statics-card {
        position: relative;
        left: 40%;
        width: 400px;
        height: 350px;
    }
    .report-charts {
        width: 400px;
        height: 350px;
    }
</style>
