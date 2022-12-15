<template>
  <div>
    <!-- 添加参数对话框 -->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="添加参数" prop="attr_name">
          <el-input v-model="form.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="paramsqd">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 添加静态属性对话框 -->
    <el-dialog :title="title1" :visible.sync="dialogVisible1" width="50%">
      <el-form ref="form1" :model="form1" label-width="80px" :rules="rules1">
        <el-form-item label="添加参数" prop="attr_name">
          <el-input v-model="form1.attr_name"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="paramsqd" v-show="id==0">确 定</el-button>
        <el-button type="primary" @click="paramsqd" v-show="id==1">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["title", "title1",'id'],
  // title:弹框动态展示
  // editid:控制是否是添加还是编辑
  data() {
    return {
      dialogVisible: false, //动态参数添加编辑模态框
      dialogVisible1: false, //静态属性添加编辑模态框
      form: {
        attr_name: ""
      }, //添加参数
      rules: {
        attr_name: [
          { required: true, message: "参数名称不能为空", trigger: "blur" }
        ]
      }, //表单的正则\
      rules1: {
        attr_name: [
          { required: true, message: "参数名称不能为空", trigger: "blur" }
        ]
      }, //表单的正则\
      form1: {
        attr_name: ""
      } //添加属性
    }
  },
  methods: {
    /**动态参数添加 */
    info(row) {
      this.dialogVisible = true
      this.form.attr_name = ""

      if (row) {
        this.form = { ...row }
      }
    },

    /**静态属性添加 */
    info1(row) {
      this.dialogVisible1 = true
      this.form1.attr_name = ""

      if (row) {
        this.form1 = { ...row }
      }
    },

    /**动态参数确定按钮 */
    paramsqd() {
      this.dialogVisible = false
      this.$emit("paramsqd", {row:this.form,row1:this.form1})
    },

    //  动态属性确定按钮
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
