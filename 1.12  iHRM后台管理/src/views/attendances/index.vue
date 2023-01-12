<!-- 考勤 -->
<template>
  <div class="attendances">
    <el-card shadow="always" style="margin-bottom: 20px">
      <div class="box">
        <div class="careful-lab">
          <div>
            <i
              class="el-icon-info"
              style="margin-top: 3px; margin-right: 6px; color: #409eff"
            ></i>
          </div>
          <div>有0条考勤审批尚未处理</div>
        </div>
        <div class="title">
          <el-button type="danger">导出</el-button>
          <el-button type="warning">提醒</el-button>
          <el-button type="primary">设置</el-button>
          <el-button>历史归档</el-button>
          <el-button type="primary">202303报表</el-button>
        </div>
      </div>
    </el-card>

    <el-card shadow="always" style="margin-bottom: 20px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="部门">
          <el-checkbox-group v-model="form.type">
            <el-checkbox
              v-for="item in departmentList"
              :label="item.name"
              name="type"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="考勤状态">
          <el-radio-group v-model="form.city">
            <el-radio v-for="item in city" :label="item" name="type"></el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card shadow="always" class="attendances-body">
      <el-table :data="attendancesList" style="width: 100%" border>
        <el-table-column label="序号" width="60px">
          <template #default="scope">{{ scope.$index + 1 }}</template>
        </el-table-column>
        <el-table-column prop="username" label="姓名" />
        <el-table-column prop="workNumber" label="工号" />
        <el-table-column prop="departmentName" label="部门" />
        <el-table-column
          prop="mobile"
          label="手机"
          width="120px"
        ></el-table-column>
        <el-table-column label="4/1">
          <template #default="scope">
            {{ scope.row.attendanceRecord[0].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/2">
          <template #default="scope">
            {{ scope.row.attendanceRecord[1].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/3">
          <template #default="scope">
            {{ scope.row.attendanceRecord[2].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/4">
          <template #default="scope">
            {{ scope.row.attendanceRecord[3].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/5">
          <template #default="scope">
            {{ scope.row.attendanceRecord[4].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/6">
          <template #default="scope">
            {{ scope.row.attendanceRecord[5].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/7">
          <template #default="scope">
            {{ scope.row.attendanceRecord[6].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/8">
          <template #default="scope">
            {{ scope.row.attendanceRecord[7].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/9">
          <template #default="scope">
            {{ scope.row.attendanceRecord[8].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/10">
          <template #default="scope">
            {{ scope.row.attendanceRecord[9].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/11">
          <template #default="scope">
            {{ scope.row.attendanceRecord[10].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/12">
          <template #default="scope">
            {{ scope.row.attendanceRecord[11].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/13">
          <template #default="scope">
            {{ scope.row.attendanceRecord[12].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/14">
          <template #default="scope">
            {{ scope.row.attendanceRecord[13].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/15">
          <template #default="scope">
            {{ scope.row.attendanceRecord[14].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/16">
          <template #default="scope">
            {{ scope.row.attendanceRecord[15].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/17">
          <template #default="scope">
            {{ scope.row.attendanceRecord[16].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/18">
          <template #default="scope">
            {{ scope.row.attendanceRecord[17].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/19">
          <template #default="scope">
            {{ scope.row.attendanceRecord[18].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/20">
          <template #default="scope">
            {{ scope.row.attendanceRecord[19].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/21">
          <template #default="scope">
            {{ scope.row.attendanceRecord[20].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/22">
          <template #default="scope">
            {{ scope.row.attendanceRecord[21].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/23">
          <template #default="scope">
            {{ scope.row.attendanceRecord[22].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/24">
          <template #default="scope">
            {{ scope.row.attendanceRecord[23].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/25">
          <template #default="scope">
            {{ scope.row.attendanceRecord[24].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/26">
          <template #default="scope">
            {{ scope.row.attendanceRecord[25].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/27">
          <template #default="scope">
            {{ scope.row.attendanceRecord[26].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/28">
          <template #default="scope">
            {{ scope.row.attendanceRecord[27].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/29">
          <template #default="scope">
            {{ scope.row.attendanceRecord[28].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
        <el-table-column label="4/30">
          <template #default="scope">
            {{ scope.row.attendanceRecord[29].jobStatu == 0 ? "旷工" : "" }}
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="page.page"
        :page-size="page.pageSize"
        :total="page.total"
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
import { getDepartment, getAttendances } from "../../untils/attendances"
export default {
  data() {
    return {
      departmentList: [],
      attendancesList: [],
      form: {
        type: [],
        city: ""
      },
      city: ["正常", "旷工", "事假", "调休", "迟到"],
      page: {
        page: 1,
        pageSize: 10,
        total: 20
      }
    }
  },
  methods: {
    getDepartment() {
      getDepartment().then((res) => {
        console.log(res)
        this.departmentList = res.data.data.depts
      })
    },
    getAttendances() {
      getAttendances(this.page).then((res) => {
        console.log(res)
        this.attendancesList = res.data.data.data.rows
        this.page.total = res.data.data.data.total
      })
    },
    handleCurrentChange(val) {
      this.page.page = val
      this.getAttendances()
    }
  },
  created() {
    this.getDepartment(), this.getAttendances()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  justify-content: space-between;

  .careful-lab {
    display: flex;
    padding: 5px 10px;
    font-size: 18px;
    border-radius: 3px;
    border: 1px solid #91d5ff;
    background: #e6f7ff;
    width: 420px;
  }
  .title {
    font-size: 14px;
    .text {
      margin-left: 15px;
    }
  }
}
</style>
