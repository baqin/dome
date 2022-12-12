<template>
  <div class="goods-add">
    <div class="goods-add-title"><i class="el-icon-info"></i>添加商品信息</div>
    <el-steps
      :active="active"
      :space="200"
      finish-status="success"
      class="goods-add-text"
    >
      <el-step title="基本信息"></el-step>
      <el-step title="商品参数"></el-step>
      <el-step title="商品属性"></el-step>
      <el-step title="商品图片"></el-step>
      <el-step title="商品内容"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>
    <el-tabs
      :tab-position="tabPosition"
      style="height: 600px; margin-top: 20px"
      @tab-click="adds"
    >
      <el-tab-pane label="基本信息">
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item label="商品名称">
            <el-input v-model="formLabelAlign.goods_name"></el-input>
          </el-form-item>
          <el-form-item label="商品价格">
            <el-input v-model="formLabelAlign.goods_price"></el-input>
          </el-form-item>
          <el-form-item label="商品重量">
            <el-input v-model="formLabelAlign.goods_weight"></el-input>
          </el-form-item>
          <el-form-item label="商品数量">
            <el-input v-model="formLabelAlign.goods_number"></el-input>
          </el-form-item>
          <el-form-item label="商品分类">
            <el-cascader
              v-model="formLabelAlign.goods_cat"
              :options="classifylist"
              @change="handleChange"
              :props="defaultParams"
            ></el-cascader>
          </el-form-item>
        </el-form>
        <!-- 基本信息 -->
      </el-tab-pane>
      <el-tab-pane label="商品参数">商品参数</el-tab-pane>
      <el-tab-pane label="商品属性">商品属性</el-tab-pane>
      <el-tab-pane label="商品图片">
        <el-upload
          action="https://jsonplaceholder.typicode.com/posts/"
          list-type="picture-card"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="" />
        </el-dialog>
      </el-tab-pane>
      <el-tab-pane label="商品内容">
        <quill-editor v-model="richtext" ref="myQuillEditor" class="quill"> </quill-editor>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultParams: {
        label: "cat_name",
        value: "cat_name",
        children: "children"
      }, //级联选择器展示内容
      tabPosition: "left", //选项居左
      active: 0, // 进度条
      labelPosition: "top", //基本信息位置
      formLabelAlign: {
        goods_name: "",
        goods_price: "",
        goods_weight: "",
        goods_number: "",
        goods_cat: ""
      },
      //  基本信息表单
      classifylist: [], //保存分类
      dialogImageUrl: "",
      dialogVisible: false,
      richtext: "" //富文本得绑定
    }
  },
  methods: {
    adds(val) {
      console.log(val)
      this.active++
    },
    handleChange(val) {
      console.log(val)
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  },
  created() {
    this.$http({
      method: "get",
      url: this.$http.addorUrl("categories")
    }).then((res) => {
      console.log(res)
      this.classifylist = res.data.data
    })
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.goods-add {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
}
.goods-add-title {
  width: 1200px;
  height: 40px;
  background: #f4f4f5;
  text-align: center;
  line-height: 40px;
  color: #ba9f99;
}
.goods-add-text {
  // margin: 0 auto;
  width: 1200px;
  margin: 30px 0 0 60px;
}
.quill{
	height: 100px;
}
</style>
