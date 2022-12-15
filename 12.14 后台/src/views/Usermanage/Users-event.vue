<template>
  <div>
    <!-- 添加和编辑用户弹框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" :disabled="editid != -1"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-show="editid == -1">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="form.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dynamicqd('form')">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 分配权限模态框 -->
    <el-dialog title="分配角色" :visible.sync="dialogVisible1" width="50%">
      <el-form ref="form" :model="form1" label-width="80px">
        <h4>当前的用户：{{ form1.username }}</h4>
        <h4>当前的角色：{{ form1.role_name }}</h4>

        <el-form-item label="分配角色">
          <el-select v-model="qxlist.qxname" placeholder="请选择">
            <el-option
              :label="item.roleName"
              :value="item.id"
              v-for="item in arrs"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible1 = false">取 消</el-button>
        <el-button type="primary" @click="userfp">确 定</el-button>
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
      dialogVisible: false, //添加用户弹框
      dialogVisible1: false, //分配权限的表单
      form: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      }, //添加用户表单
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 15, message: "长度在 6 到 15 个字符", trigger: "blur" }
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { min: 17, message: "邮箱格式不正确", trigger: "blur" }
        ],
        mobile: [
          { required: true, message: "请输入电话", trigger: "blur" },
          { min: 11, message: "手机号码不正确", trigger: "blur" }
        ]
      }, //表单的正则
      form1: {
        username: "",
        role_name: ""
      }, //分配权限模态框
      qxlist: {
        qxname: ""
      },
      // 权限选择权的绑定
      arrs: [] //获取权限内容
    }
  },
  methods: {
    /**组件初始化 */
    info(val) {
      this.dialogVisible = true
      this.form = {
        username: "",
        password: "",
        email: "",
        mobile: ""
      }
      /**
       * 没有值的话,就关闭模态框
       * 有值得话就进行回填内容
       */
      if (val) {
        /**解构一下 防止浅拷贝得发生 */
        this.form = { ...val }
      }
    },
    info1(val) {
      this.dialogVisible1 = true
      if (val) {
        /**传过来得arrs赋值 */
        this.arrs = val.arrs
        /**解构一下 防止浅拷贝得发生 */
        this.form1 = { ...val.row }
      }
    },
    /**确定按钮 */
    dynamicqd(formName) {
      this.dialogVisible = false
      this.$emit("dynamicqd", this.form)
    },

    /**分配权限确定按钮 */
    userfp() {
      this.dialogVisible1 = false
      this.$emit("userfp", this.qxlist)
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
