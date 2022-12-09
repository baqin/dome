<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="nav">
      <el-input placeholder="请输入内容" v-model="users.query" class="input3">
        <el-button
          slot="append"
          icon="el-icon-search"
          @click="search"
        ></el-button>
      </el-input>
      <el-button type="primary" @click="dialogVisible = true"
        >添加用户</el-button
      >
    </div>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="index" label="#" width="180"> </el-table-column>
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="180"> </el-table-column>
      <el-table-column prop="mobile" label="电话"> </el-table-column>
      <el-table-column prop="role_name" label="角色" width="180">
      </el-table-column>
      <el-table-column prop="mg_state" label="状态" width="180">
        <template slot-scope="scope">
          <!-- 开关 -->
          <el-switch
            v-model="scope.row.mg_state"
            @change="change(scope.row.id, scope.row.mg_state)"
            active-color="#13ce66"
            inactive-color="#ff4949"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="del(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加模态框 -->
    <el-dialog title="添加" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 编辑模态框 -->
    <el-dialog title="编辑" :visible.sync="dialogVisible1" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" disabled></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="undata('form')">保存编辑</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="users.pagenum"
      :page-sizes="[2, 4, 6, 8, 10]"
      :page-size="users.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      dialogVisible1: false,
      input3: "",
      total: 0,
      form: {
        username: "",
        password: "",
        email: "",
        mobile: "",
				id:0
      },
      list: [],
      users: {
        query: "",
        pagenum: 1,
        pagesize: 5
      },
			// id:0,
      tableData: []
    }
  },
  methods: {
    search() {
      this.fn()
    },
    fn() {
      this.$http.get("/api/users", { params: this.users }).then((res) => {
        // console.log(res)
        this.list = res.data.data.users
      })
    },
    handleEdit(index, row) {
      // console.log(index, row)
      this.dialogVisible1 = true
      // this.form.username = row.username
      // this.form.email = row.email
      // this.form.mobile = row.mobile
			// this.form.id=row.id
			this.form=row
    },
    handleDelete(index, row) {
      console.log(index, row)
    },
		// 点击确定添加
    onSubmit() {
      this.$http.post("/api/users", this.form).then((res) => {
        console.log(res)
        if (res.data.meta.status == 201) {
          this.$message({
            message: res.data.meta.msg,
            type: "success"
          })
        }
        this.dialogVisible = false
				this.form=''
        this.fn()
      })
    },
		// 删除、
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 点击确定
          this.$http({ method: "delete" ,url: `/api/users/${id}`}).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              this.$message({
                message: res.data.meta.msg,
                type: 'success'
              });
              //   重新获取用户列表，渲染页面
            }
          })
          this.fn()
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
		// 点击保存编辑
    undata() {
			this.$http({method:"put",url:`/api/users/${this.form.id}`,
			data:{email:this.form.email,mobile:this.form.mobile}
			}).then((res) => {
        console.log(res);
        if (res.data.meta.status == 200) {
          this.$message({
            message: res.data.meta.msg,
            type: "success",
          });
          this.dialogVisible1 = false;
          this.fn();
        }
      });
		},
		// 状态切换
    change(id, state) {
      this.$http({method:"put",url:`/api/users/${id}/state/${state}`}).then((res) => {
					// console.log(res);
					if (res.data.meta.status == 200) {
						this.$message({
							message: res.data.meta.msg,
							type: 'success',
						});
					}
				});
    },
		// 分页、
    handleSizeChange(val) {
      // console.log(val)
      this.users.pagesize = val
      this.fn()
    },
    // 每页多少条改变自动触发
    handleCurrentChange(val) {
      // console.log(val)
      this.users.pagenum = val
      this.fn()
    }
  },
  created() {
    this.fn()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.input3 {
  width: 300px;
}
.nav {
  display: flex;
  margin-top: 10px;
}
</style>
