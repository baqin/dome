<!-- 审批 -->
<template>
  <div class="approvals">
    <el-card shadow="always">
      <div class="box">
        <div class="careful-lab">
          <div>
            <i
              class="el-icon-info"
              style="margin-top: 3px; margin-right: 6px; color: #409eff"
            ></i>
          </div>
          <div>当前审批中 0 本月审批通过 1 本月审批驳回 0</div>
        </div>
        <div class="title">
          <!-- <el-button type="danger">历史归档</el-button> -->
          <el-button type="primary">流程设置</el-button>
        </div>
      </div>
    </el-card>

    <el-card>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="selection" width="45"></el-table-column>
        <el-table-column prop="date" label="序号" width="50px">
          <template slot-scope="scope">
            {{ scope.$index + 1 }}
          </template>
        </el-table-column>
        <el-table-column prop="processName" label="审批类型" sortable>
        </el-table-column>
        <el-table-column prop="username" label="申请人" sortable>
        </el-table-column>

        <el-table-column
          prop="procCurrNodeUserName"
          label="当前审批人"
          sortable
        >
        </el-table-column
        >>
        <el-table-column label="审批发起时间" sortable>
          <template slot-scope="scope">
            {{ new Date(scope.row.procApplyTime).getFullYear() }}-{{
              new Date(scope.row.procApplyTime).getMonth() + 1 > 10
                ? new Date(scope.row.procApplyTime).getMonth() + 1
                : "0" + (new Date(scope.row.procApplyTime).getMonth() + 1)
            }}-{{
              new Date(scope.row.procApplyTime).getDate() + 1 > 10
                ? new Date(scope.row.procApplyTime).getDate() + 1
                : "0" + (Number(new Date(scope.row.procApplyTime).getDate()) + 1)
            }}
          </template>
        </el-table-column>
        <el-table-column label="审批状态" sortable>
          <template slot-scope="scope">
						{{ scope.row.processState==2?'审批通过':'' }}
						{{ scope.row.processState==4?'撤销':'' }}
						{{ scope.row.processState==1?'审批中':'' }}
					</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
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
import { getApprovals } from "../../untils/approvals"
export default {
  data() {
    return {
      page: {
        page: 1,
        pageSize: 10,
        total: 20
      },
      tableData: []
    }
  },
  methods: {
    getList() {
      getApprovals(this.page).then((res) => {
        console.log(res)
        this.tableData = res.data.data.rows
        this.page.total = res.data.data.total
      })
    },
    handleCurrentChange(val) {
      this.page.page = val
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
    width: 390px;
  }
  .title {
    font-size: 14px;
    .text {
      margin-left: 15px;
    }
  }
}
</style>
