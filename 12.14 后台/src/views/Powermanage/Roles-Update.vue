<template>
  <div>
    <!-- 添加编辑模态框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="form.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="form.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="rolesadd">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分配权限模态框 -->
    <el-dialog title="分配权限" :visible.sync="dialogVisible1" width="50%">
      <el-tree
        :data="arr"
        ref="tree"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
        :props="defaultProps"
        default-expand-all
      >
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="qddistribution">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["title", "editid"],
  // title:弹框动态展示
  // editid:控制是否是添加还是编辑
  data() {
    return {
      rules: {
        roleName: [{ required: true, message: "请输入名称", trigger: "blur" }],
        roleDesc: [{ required: true, message: "请输入描述", trigger: "blur" }]
      }, //表单的正则
      dialogVisible: false, //添加用户弹框
      dialogVisible1: false, //分配权限模态框
      arr: [], //保存权限内容
      form: {
        roleName: "",
        roleDesc: ""
      },
      // 表单内容
      defaultProps: {
        children: "children",
        label: "authName"
      } //分配权限设置
    }
  },
  methods: {
    /**组件初始化 */
    info(val) {
      this.form = {
        roleName: "",
        roleDesc: ""
      }
      this.dialogVisible = true
      /**
       * 没有值的话,就关闭模态框
       * 有值得话就进行回填内容
       */
      if (val) {
        /**解构一下 防止浅拷贝得发生 */
        this.form = { ...val }
      }
    },

    info1(row) {
      // console.log(row)
      this.dialogVisible1 = true
      if (row) {
        let res = []
        row.children.forEach((item) => {
          item.children.forEach((ele) => {
            ele.children.forEach((i) => {
              res.push(i.id)
            })
          })
        })
        // console.log(res)
        this.$nextTick(() => {
          this.$refs.tree.setCheckedKeys(res)
        })
      }
    },

    /**确定按钮 */
    rolesadd() {
      this.dialogVisible = false
      this.$emit("dynamicqd", this.form)
    },

    /**分配权限确定按钮 */
    qddistribution() {
      this.dialogVisible1 = false
      this.$emit("qddistribution", this.$refs.tree)
    }
  },
  created() {
    this.$http({
      method: "get",
      url: this.$http.addorUrl("rights/tree")
    }).then((res) => {
      // console.log(res, "123")
      if (res.data.meta.status == 200) {
        this.arr = res.data.data
      }
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
