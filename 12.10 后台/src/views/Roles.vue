<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/Index' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary" @click="dialogVisible = true">添加角色</el-button>
    <el-table :data="list" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
           <template slot-scope="props">
					 <div class="roles-slot">
 <el-row v-for="item in props.row.children" :key="item.id" style="border: 1px solid #ccc">
 <el-col :span="5" style="border-left: 1px solid #ccc">
 <el-button type="primary"
  >{{ item.authName }} <i class="el-icon-close" @click="delRoles(props.row.id, item.id)"></i
  ></el-button>
  <i class="el-icon-caret-right"></i>
  </el-col>
  <el-col :span="16">
 <el-row v-for="ele in item.children" :key="ele.id">
 <el-col :span="8">
  <el-button type="success" >{{ ele.authName }} <i class="el-icon-close" @click="delRoles(props.row.id, ele.id)"></i
  ></el-button>
 <i class="el-icon-caret-right"></i>
 </el-col>
 <el-col :span="12">
  <el-button v-for="i in ele.children" :key="i.id" type="warning"
  >{{ i.authName }} <i class="el-icon-close" @click="delRoles(props.row.id, i.id)"></i></el-button
  ></el-col>
 </el-row>
 </el-col>
 </el-row>
 </div>
</template>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="#" type="index"> </el-table-column>
      <el-table-column label="角色名称" prop="roleName"> </el-table-column>
      <el-table-column label="角色描述" prop="roleDesc"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button size="mini" type="danger" @click="del(scope.row.id)"
            >删除</el-button
          >
          <el-button  size="mini" type="warning" @click="fp(scope.row)">分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>
		<!-- 添加模态框 -->
		 <el-dialog title="添加" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="角色名称">
          <el-input v-model="form.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
		<!-- 编辑模态框 -->
		 <el-dialog title="编辑" :visible.sync="dialogVisible1" width="50%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="角色名称">
          <el-input v-model="form.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述">
          <el-input v-model="form.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="undata('form')">保存编辑</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
		 <!-- 树型控件 -->
    <el-dialog title="分配权限" :visible.sync="dialogTree" width="50%">
      <el-tree
        :data="arr"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps">

      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTree = false">取 消</el-button>
        <el-button type="primary" @click="fps">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
			arr:[],
			roleId: 0,
			 roles: [],
			dialogTree: false,
			defaultProps: {
        children: "children",
        label: "authName",
      },
			 data: [
        {
          id: 1,
          label: "一级 1",
          children: [
            {
              id: 4,
              label: "二级 1-1",
              children: [
                {
                  id: 9,
                  label: "三级 1-1-1",
                },
                {
                  id: 10,
                  label: "三级 1-1-2",
                },
              ],
            },
          ],
        },
        {
          id: 2,
          label: "一级 2",
          children: [
            {
              id: 5,
              label: "二级 2-1",
            },
            {
              id: 6,
              label: "二级 2-2",
            },
          ],
        },
        {
          id: 3,
          label: "一级 3",
          children: [
            {
              id: 7,
              label: "二级 3-1",
            },
            {
              id: 8,
              label: "二级 3-2",
            },
          ],
        },
      ],
			dialogVisible:false,
			dialogVisible1:false,
			form:{
				roleName:'',
				roleDesc:'',
				id:0
			},
			list:[],
      tableData: []
    }
  },
  methods: {
		fp(row) {
      this.dialogTree = true;
      this.roleId = row.id;
			this.$http({url:"api/rights/tree",method:"get"}).then(res=>{
				console.log(res);
				this.arr=res.data.data
			})
    },
		fps(){
			let arr1 = this.$refs.tree.getHalfCheckedKeys();
      let arr2 = this.$refs.tree.getCheckedKeys();
      this.$http({method:"post",url:`/apiroles/${this.roleId}/rights`}, {
          rids: [...arr1, ...arr2].join("."),
        })
        .then((res) => {
          console.log(res);
          if (res.data.meta.status == 200) {
            this.$message({
              message: res.data.meta.msg,
              type: "success",
            });
            this.dialogTree = false
            this.fn()
          }
        });
		},
		fn(){
			this.$http.get("/api/roles").then((res) => {
      // console.log(res)
      this.list = res.data.data
    })
		},
		onSubmit(){
			this.$http({method:"post",url:"/api/roles", data:this.form}).then((res) => {
        // console.log(res)
				if(res.data.meta.status==201){
					this.$message({
            message: res.data.meta.msg,
            type: 'success'
          });
				}
				this.dialogVisible = false
				this.form=''
				this.fn()
      })
		},
    handleEdit(index, row) {
			 this.dialogVisible1 = true
			 this.form=row
		},
		undata() {
			this.$http({method:"put",url:`/api/roles/${this.form.id}`,
			data:{roleName:this.form.roleName,roleDesc:this.form.roleDesc}
			}).then((res) => {
        // console.log(res);
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
    del(id) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 点击确定
          this.$http({ method: "delete" ,url: `/api/roles/${id}`}).then((res) => {
            console.log(res)
            if (res.data.meta.status == 200) {
              this.$message({
                message: res.data.meta.msg,
                type: 'success'
              });
              //   重新获取用户列表，渲染页面
							this.fn()
            }
          })

        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    }
  },
  created() {
		this.fn();
		this.fp;
	},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
::v-deep .el-button {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 20px;
}
::v-deep .el-icon-caret-right {
  margin-left: 20px;
}
.roles-slot {
  width: 100%;
  padding: 20px 40px;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
