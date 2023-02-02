<template>
  <!-- 员工模块 -->
  <div class="staff">
    <!-- 头部 -->
    <el-card class="box-card">
      <div class="box">
        <div class="left">
          <i class="el-icon-warning-outline"></i>
          当前共有{{ $store.state.staff.total }}条记录
        </div>
        <div class="right">
          <el-button size="mini" type="danger" @click="export2Excel()">普通excel导出</el-button>
          <el-button size="mini" type="warning" @click="export2Excel()">负责excel导出</el-button>
          <el-button size="mini" type="success" @click="$router.push('/StaffImport')">excel导入</el-button>
          <el-button size="mini" type="primary" disabled>新增员工</el-button>
        </div>
      </div>
    </el-card>
    <!-- 表格 -->
    <el-card class="box-card" style="margin-top: 10px">
      <el-table :data="$store.state.staff.list" style="width: 100%" border>
        <el-table-column type="index" label="序号" width="60"> </el-table-column>
        <el-table-column prop="username" label="姓名" sortable> </el-table-column>
        <el-table-column prop="staffPhoto" label="头像" width="100">
          <template slot-scope="scope">
            <span v-if="scope.row.staffPhoto">
              <img :src="scope.row.staffPhoto" alt="" class="img" />
            </span>
            <span v-else>
              <img class="img" src="http://ihrm.itheima.net/static/img/bigUserHeader.fda3837f.png" alt="" />
            </span>
          </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" sortable> </el-table-column>
        <el-table-column prop="workNumber" label="工号" sortable width="80"> </el-table-column>
        <el-table-column prop="formOfEmployment" label="聘用形式" sortable>
          <template slot-scope="scope">
            <span v-if="scope.row.formOfEmployment == 2">非正式</span>
            <span v-if="scope.row.formOfEmployment == 1">正式</span>
          </template>
        </el-table-column>
        <el-table-column prop="departmentName" label="部门" sortable> </el-table-column>
        <el-table-column prop="timeOfEntry" label="入职时间" sortable>
          <template slot-scope="scope">
            <span>{{ scope.row.timeOfEntry.slice(0, 10) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="enableState" label="账户状态" sortable>
          <template slot-scope="scope">
            <el-switch v-model="scope.row.enableState" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="操作" sortable width="300" fixed="right">
          <template slot-scope="scope">
            <el-button
              type="text"
              size="small"
              @click="$router.push({ name: 'Staffsee', params: { id: scope.row.id } })"
              >查看</el-button
            >
            <el-button type="text" size="small">转正</el-button> <el-button type="text" size="small">调岗</el-button>
            <el-button type="text" size="small">离职</el-button> <el-button type="text" size="small">角色</el-button>
            <el-button type="text" size="small" disabled>删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="footer" style="text-align: right">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          layout="prev, pager, next"
          :total="$store.state.staff.total"
        >
        </el-pagination>
      </div>
    </el-card>
  </div>
</template>

<script>
import { read, utils } from "xlsx" // 注意处理方法引入方式

export default {
  data() {
    return {
      params: {
        page: 1,
        size: 10,
        total: 0
      }
    }
  },
  methods: {
    /*请求数据*/
    getStaff() {
      this.$store.dispatch("staff/getList", this.params)
    },
    /*分页逻辑*/
    handleSizeChange(val) {
      this.params.size = val
      this.getStaff()
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getStaff()
    },
    /**导出 */
    export2Excel() {
      require.ensure([], () => {
        const { export_json_to_excel } = require("@/excel/Export")
        const fieldName = ["索引", "用户名", "密码"]
        const filterVal = ["index", "username", "password"]
        const data = this.$store.state.staff.list.map((v) => filterVal.map((j) => v[j]))
        export_json_to_excel(fieldName, data, "用户列表")
      })
    },
    /**导入 */
    onChange(e) {
      const file = e.target.files[0]
      const fileReader = new FileReader()
      fileReader.onload = (ev) => {
        try {
          const data = ev.target.result
          const workbook = read(data, { type: "binary" })
          const params = []
          // 取对应表生成json表格内容
          workbook.SheetNames.forEach((item) => {
            params.push({
              name: item,
              dataList: utils.sheet_to_json(workbook.Sheets[item])
            })
            this.tableData.push(utils.sheet_to_json(workbook.Sheets[item]))
          })
          // 该算法仅针对表头无合并的情况
          if (this.tableData.length > 0) {
            // 获取excel中第一个表格数据tableData[0][0]，并且将表头提取出来
            for (const key in this.tableData[0][0]) {
              this.tableHead.push(key)
            }
          }
          return params
          // 重写数据
        } catch (e) {
          console.log("error:" + e)
          return false
        }
      }
      fileReader.readAsBinaryString(file)
    }
  },
  created() {
    this.getStaff() // 调用
  }
}
</script>

<style lang="scss" scoped>
.el-card__body,
.el-main {
  padding: 10px;
}

.staff {
  padding: 10px;
  font-size: 14px;
}

.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;

  .left {
    border: 1px solid#409eff;
    padding: 6px 10px;
    background-color: #e6f7ff;

    i {
      background-color: #409eff;
      color: #fff;
      border-radius: 10px;
    }
  }
}

.img {
  width: 50px;
  height: 50px;
  border-radius: 100px;
}
</style>
