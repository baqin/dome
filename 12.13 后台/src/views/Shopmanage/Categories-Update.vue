<template>
  <div>
    <!-- 添加编辑对话框 -->

    <el-dialog :title="title" :visible.sync="dialogVisible" width="50%">
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="分类名称" prop="cat_name">
          <el-input v-model="form.cat_name"></el-input>
        </el-form-item>

        <el-form-item label="父级分类" v-show="title == '添加商品分类'">
          <el-cascader
            :options="list"
            clearable
            change-on-select
            :props="defaultParams"
            @change="handleChange"
            ref="cascader"
          ></el-cascader>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="qx">取 消</el-button>
        <el-button type="primary" @click="categoriesqd">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: ["title", "list"],
  // title:弹框动态展示
  // editid:控制是否是添加还是编辑
  //list:父级分类
  data() {
    return {
      defaultParams: {
        label: "cat_name",
        value: "cat_name",
        children: "children"
      }, //级联选择器展示内容
      dialogVisible: false, //添加删除模态框
      form: {
        cat_name: "",
        cat_level: "",
        cat_pid: ""
      }, //表单绑定
      rules: {
        cat_name: [
          { required: true, message: "分类名称不能为空", trigger: "blur" }
        ]
      } //表单的正则
    }
  },
  methods: {
    /**组件初始化 */
    info(val) {
      this.dialogVisible = true
      this.form = {
        cat_name: "",
        cat_level: "",
        cat_pid: ""
      }

      if (val) {
        this.form = { ...val }
      }
    },

    /**模态框取消按钮 */
    qx() {
      this.dialogVisible = false
      this.form.cat_name = ""
    },

    /**选择器事件 */
    handleChange() {
      ;(this.form.cat_level =
        this.$refs["cascader"].getCheckedNodes()[0].data.cat_level + 1),
        (this.form.cat_pid =
          this.$refs["cascader"].getCheckedNodes()[0].data.cat_id)
    },

    /**模态框确定按钮 */
    categoriesqd() {
      this.dialogVisible = false
      this.$emit("categoriesqd", this.form)
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
