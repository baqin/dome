<!-- 社保 -->
<template>
  <div class="securitys">
    <el-card shadow="always">
      <div class="box">
        <div class="careful-lab">
          <div>
            <i
              class="el-icon-info"
              style="margin-top: 3px; margin-right: 6px; color: #409eff"
            ></i>
          </div>
          <div>本月：社保在缴 公积金在缴 增员 减员 入职 离职</div>
        </div>
        <div class="title">
          <el-button type="danger">历史归档</el-button>
          <el-button type="primary">{{ numberbao }}报表</el-button>
        </div>
      </div>
    </el-card>
		
    <el-card shadow="always" style="margin-top: 20px; margin-bottom: 20px">
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
        <el-form-item label="社保城市">
          <el-checkbox-group v-model="form.Scity">
            <el-checkbox
              v-for="item in city"
              :label="item.name"
              name="type"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item label="公积金城市">
          <el-checkbox-group v-model="form.Gcity">
            <el-checkbox
              v-for="item in city"
              :label="item.name"
              name="type"
            ></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
      </el-form>
    </el-card>

    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="序号" width="40px">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="username" label="姓名" sortable>
        </el-table-column>
        <el-table-column prop="mobile" label="手机" sortable> </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable>
        </el-table-column
        >>
        <el-table-column prop="departmentName" label="部门" sortable>
        </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间" sortable>
        </el-table-column>
        <el-table-column prop="leaveTime" label="离职时间" sortable>
        </el-table-column>
        <el-table-column prop="socialSecurityBase" label="社保基数">
        </el-table-column>
        <el-table-column prop="providentFundBase" label="公积金基数">
        </el-table-column>
        <el-table-column label="操作" width="350px">
          <template slot-scope="scope">
            <el-button type="text">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :current-page="page.page"
        :page-size="page.pagesize"
        :total="page.total"
        layout="prev, pager, next"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
import {
  getList,
  getSettings,
  getCity,
  getDepartment
} from "../../untils/securitys"
export default {
  data() {
    return {
      numberbao: 1,
      form: {
        type: [],
        Scity: [],
        Gcity: []
      },
      departmentList: [],
      city: [],
      tableData: [],
      page: {
        page: 1,
        pagesize: 10,
        total: 20
      }
    }
  },
  methods: {
    getList() {
      getList(this.page).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
        this.page.total = res.data.data.total
      })
    },
    getSecurits() {
      getSettings().then((res) => {
        console.log(res)
        this.numberbao = res.data.data.dataMonth
      })
      getCity().then((res) => {
        console.log(res)
        this.city = res.data.data
      })
      getDepartment().then((res) => {
        console.log(res)
        this.departmentList = res.data.data.depts
      })
    },
    handleCurrentChange(val) {
      this.page.page = val
      this.getList()
    }
  },
  created() {
    this.getList()
    this.getSecurits()
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
::v-deep.el-form-item {
  .el-form-item__label {
    width: 90px !important;
  }
}
</style>
