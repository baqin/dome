<!-- 设置 -->
<template>
  <div class="settingg">
    <el-card>
      <el-tabs>
        <!-- 放置页签 -->
        <el-tab-pane label="角色管理">
          <!-- 新增角色按钮 -->
          <el-row style="height: 60px">
            <el-button type="primary" size="small" @click="showDialog = true"
              >新增角色</el-button
            >
          </el-row>
          <!-- 表格 -->
          <el-table border="" :data="list">
            <el-table-column
              align="center"
              type="index"
              label="序号"
              width="120"
            />
            <el-table-column
              align="center"
              prop="name"
              label="名称"
              width="240"
            />
            <el-table-column align="center" prop="description" label="描述" />
            <el-table-column align="center" label="操作">
              <!-- 作用域插槽 -->
              <template slot-scope="{ row }">
                <el-button
                  size="small"
                  type="success"
                  @click="assignPermission(row.id)"
                  >分配权限</el-button
                >
                <el-button size="small" type="primary" @click="editRole(row.id)"
                  >编辑</el-button
                >
                <el-button
                  size="small"
                  type="danger"
                  @click="deleteRole(row.id)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- 分页组件 -->
          <el-row
            type="flex"
            justify="center"
            align="middle"
            style="height: 60px"
          >
            <el-pagination
              :current-page="page.page"
              :page-size="page.pagesize"
              :total="page.total"
              layout="prev, pager, next"
              @current-change="handleCurrentChange"
            />
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="公司信息">
          <el-alert
            title="对公司名称、公司地址、营业执照、公司地区的更新，将使得公司资料被重新审核，请谨慎修改"
            type="info"
            show-icon
            :closable="false"
          />
          <el-form label-width="120px" style="margin-top: 50px">
            <el-form-item label="公司名称">
              <el-input v-model="formData.name" disabled style="width: 400px" />
            </el-form-item>
            <el-form-item label="公司地址">
              <el-input
                v-model="formData.companyAddress"
                disabled
                style="width: 400px"
              />
            </el-form-item>
            <el-form-item label="邮箱">
              <el-input
                v-model="formData.mailbox"
                disabled
                style="width: 400px"
              />
            </el-form-item>
            <el-form-item label="备注">
              <el-input
                v-model="formData.remarks"
                type="textarea"
                :rows="3"
                disabled
                style="width: 400px"
              />
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>

<script>
import { getRole, getCompany } from "../../untils/settingg"
export default {
  data() {
    return {
      list: [],
      page: {
        page: 1,
        pagesize: 10,
        total: 20
      },
      formData: {
        name: "",
        companyAddress: "",
        mailbox: "",
        remarks: ""
      }
    }
  },
  methods: {
    getList() {
      getRole(this.page).then((res) => {
        console.log(res)
        // console.log(this.$store.state.companyId)
        this.list = res.data.data.rows
        this.page.total = res.data.data.total
      })
    },
    getCompany() {
      // console.log(this.$store.state.companyId);
      setTimeout(() => {
        getCompany(this.$store.state.companyId).then((res) => {
          console.log(res)
          this.formData = res.data.data
        })
      },300)
    },
    handleCurrentChange(val) {
      this.page.page = val
      this.getList()
    }
  },
  created() {
    this.getList(), this.getCompany()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
