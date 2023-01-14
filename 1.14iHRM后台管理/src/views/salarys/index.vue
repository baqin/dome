<!-- 工资 -->
<template>
  <div class="salarys">
    <el-card shadow="always" style="margin-bottom: 20px">
      <div class="box">
        <div class="careful-lab">
          <div>
            <i
              class="el-icon-info"
              style="margin-top: 3px; margin-right: 6px; color: #409eff"
            ></i>
          </div>
          <div>本月0： 入职 0 离职 0 调薪 0 未定薪 0</div>
        </div>
        <div class="title">
          <el-button type="danger">历史归档</el-button>
          <el-button type="primary">{{ numberbao }}报表</el-button>
        </div>
      </div>
    </el-card>

    <el-card shadow="always" style="margin-bottom: 20px">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="聘用形式">
          <el-checkbox-group v-model="form.employment">
            <el-checkbox
              v-for="item in employment"
              :label="item"
              name="type"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="员工状态">
          <el-checkbox-group v-model="form.state">
            <el-checkbox
              v-for="item in state"
              :label="item"
              name="type"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="部门">
          <el-checkbox-group v-model="form.type">
            <el-checkbox
              v-for="item in departmentList"
              :label="item.name"
              name="type"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <el-table :data="list" style="width: 100%">
        <el-table-column prop="date" label="序号" width="50px">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="mobile" label="手机"> </el-table-column>
        <el-table-column prop="workNumber" label="工号"> </el-table-column>>
        <el-table-column label="聘用形式">
          <template slot-scope="scope">
            {{ scope.row.formOfEmployment == 1 ? "未知" : "" }}
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门"> </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间">
          <template slot-scope="scope">
            <!-- {{ new Date(scope.row.timeOfEntry).getFullYear() }} -->
            {{ new Date(scope.row.timeOfEntry).getFullYear() }}-{{
              new Date(scope.row.timeOfEntry).getMonth() + 1 > 10
                ? new Date(scope.row.timeOfEntry).getMonth() + 1
                : "0" + (new Date(scope.row.timeOfEntry).getMonth() + 1)
            }}-{{
              new Date(scope.row.timeOfEntry).getDate() + 1 > 10
                ? new Date(scope.row.timeOfEntry).getDate() + 1
                : "0" + (Number(new Date(scope.row.timeOfEntry).getDate()) + 1)
            }}
          </template>
        </el-table-column>
        <el-table-column label="工资基数">
          <template slot-scope="scope">
            {{ scope.row.currentBasicSalary + scope.row.currentPostWage }}
          </template>
        </el-table-column>
        <el-table-column label="津贴方案">
					<template slot-scope="scope">
            {{ scope.row.inServiceStatus==1?'通用方案':'' }}
          </template>
				</el-table-column>
        <el-table-column label="操作" width="350px">
          <template slot-scope="scope">
            <el-button
              type="primary"
              v-if="
                scope.row.currentBasicSalary + scope.row.currentPostWage == 0
              "
              >调薪</el-button
            >
            <el-button type="danger" v-else>定薪</el-button>
            <el-button type="text">查看</el-button>
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
import { getSettings, getDepartment, getSalarys } from "../../untils/salarys"
export default {
  data() {
    return {
      numberbao: 1,
      departmentList: [],
      // 部门
      employment: ["正式", "非正式"],
      // 聘用形式
      state: ["在职", "离职"],
      // 员工状态
      list: [],
      // 工资列表
      form: {
        type: [],
        employment: [],
        state: []
      },
      page: {
        page: 1,
        pageSize: 10,
        total: 20
      }
    }
  },
  methods: {
    getSetDep() {
      getSettings().then((res) => {
        console.log(res)
        this.numberbao = res.data.data.dataMonth
      })
      getDepartment().then((res) => {
        console.log(res)
        this.departmentList = res.data.data.depts
      })
    },
    getList() {
      getSalarys(this.page).then((res) => {
        console.log(res)
        this.list = res.data.data.rows
        this.page.total = res.data.data.total
      })
    },
    handleCurrentChange(val) {
      this.page.page = val
      this.getList()
    }
  },
  created() {
    this.getSetDep(), this.getList()
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
