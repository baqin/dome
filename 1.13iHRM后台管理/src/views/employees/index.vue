<!-- 员工 -->
<template>
  <div class="employees">
    <el-card shadow="always" style="margin-bottom: 20px">
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
          <el-button type="danger">普通excel导出</el-button>
          <el-button type="warning">负责excel导出</el-button>
          <el-button type="success">excel导出</el-button>
          <el-button type="primary">新增员工</el-button>
        </div>
      </div>
    </el-card>

    <el-card>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="序号" width="40px">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="username" label="姓名" sortable>
        </el-table-column>
        <el-table-column prop="address" label="头像">
          <template slot-scope="scope">
            <img
              :src="scope.row.staffPhoto"
              style="
                width: 100px;
                height: 100px;
                border-radius: 50%;
                text-align: center;
              "
              alt=""
            />
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" sortable>
        </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable>
        </el-table-column>
        <el-table-column prop="address" label="聘用形式" sortable>
          <template slot-scope="scope">
            {{ scope.row.formOfEmployment == "1" ? "正式" : "未知" }}
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" sortable>
        </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间" sortable>
        </el-table-column>
        <el-table-column prop="address" label="账户状态" sortable>
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.enableState"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作" width="350px" sortable>
          <template slot-scope="scope">
            <el-button type="text">查看</el-button>
            <el-button type="text">转正</el-button>
            <el-button type="text">调岗</el-button>
            <el-button type="text">离职</el-button>
            <el-button type="text">角色</el-button>
            <el-button type="text" disabled>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        :page-size="pageSize"
        :page-count="pageCount"
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { getUser } from "../../untils/employees"
export default {
  data() {
    return {
      tableData: [],
      total: 100,
      pageSize: 10,
      pageCount: 1
    }
  },
  methods: {
    getList() {
      getUser({
        page: this.pageCount,
        size: this.pageSize,
        total: this.total
      }).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
        this.total = res.data.data.total
      })
    },
    handleCurrentChange(val) {
      this.pageCount = val
      this.getList()
    }
  },
  created() {
    this.getList()
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
