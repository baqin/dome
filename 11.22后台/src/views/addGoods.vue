<template>
  <div>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/addGoods">添加数据</el-breadcrumb-item>
          <el-breadcrumb-item>添加商品</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="boxs"><i class="el-icon-info"></i></div>
      </el-header>
      <el-main class="demo-ruleForm">
        <div class="centers">选择食品种类</div>

        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="食品种类" style="margin-top: 20px">
            <el-select
              v-model="form.type"
              placeholder="请选择"
              class="top-type"
            >
              <el-option label="123" value="shanghai"></el-option>
              <el-option label="456" value="beijing"></el-option>
              <el-option label="牛马" value="beijing"></el-option>
              <el-option label="巴少" value="beijing"></el-option>
              <el-option label="大香肠" value="beijing"></el-option>
              <el-option label="无敌大香肠" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-collapse v-model="activeNames" class="el-collape">
            <el-collapse-item name="1">
              <el-form-item label="食品种类">
                <el-input v-model="form.types"></el-input>
              </el-form-item>
              <el-form-item label="种类描述">
                <el-input v-model="form.text"></el-input>
              </el-form-item>
              <el-button type="primary">提交</el-button>
            </el-collapse-item>
          </el-collapse>
        </el-form>

        <div class="centers">添加食品</div>

        <el-form ref="form1" :model="form1" label-width="80px" :rules="rules">
          <el-form-item label="食品名称" prop="name" class="boxs1">
            <el-input v-model="form1.name"></el-input>
          </el-form-item>
          <el-form-item label="食品活动" class="boxs1">
            <el-input v-model="form1.activity"></el-input>
          </el-form-item>
          <el-form-item label="食品详情" class="boxs1">
            <el-input v-model="form1.test"></el-input>
          </el-form-item>

          <el-form-item label="上传图片">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible4">
              <img width="100%" :src="dialogImageUrl1" alt="" />
            </el-dialog>
          </el-form-item>
          <!-- 图片 -->
          <el-form-item label="食品特点" style="margin-top: 20px">
            <el-select
              v-model="form1.type"
              placeholder="请选择"
              class="top-type1"
            >
              <el-option label="新品" value="shanghai"></el-option>
              <el-option label="招牌" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <!-- 食品特点  -->
          <el-form-item label="食品规格">
            <el-radio-group v-model="form1.Specifications">
              <el-radio label="单规格"></el-radio>
              <el-radio label="多规格"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item
            label="包装费"
            v-if="this.form1.Specifications == '单规格'"
          >
            <el-input-number
              v-model="form1.num"
              controls-position="right"
              :min="1"
              :max="100"
            ></el-input-number>
          </el-form-item>

          <el-form-item
            label="价格"
            v-if="this.form1.Specifications == '单规格'"
          >
            <el-input-number
              v-model="form1.num1"
              controls-position="right"
              :min="1"
              :max="100"
            ></el-input-number>
          </el-form-item>

          <el-button
            type="primary"
            @click="dialogVisible2 = true"
            class="guige"
            v-if="this.form1.Specifications == '多规格'"
            >添加规格</el-button
          >

          <el-table
            :data="tableData"
            stripe
            style="width: 100%"
            v-if="this.form1.Specifications == '多规格'"
          >
            <el-table-column prop="name" label="规格" width="180">
            </el-table-column>
            <el-table-column prop="num" label="包装费" width="180">
            </el-table-column>
            <el-table-column prop="num1" label="价格"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="delAll(scope.$index)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <!-- 规格表格 -->
          <el-button type="primary" @click="submitForm('form1')"
            >确定添加商品</el-button
          >
        </el-form>
      </el-main>
    </el-container>

    <el-dialog title="修改食品信息" :visible.sync="dialogVisible2" width="40%">
      <el-form
        :model="from"
        ref="from"
        label-width="100px"
        class="demo-ruleForm1"
        :rules="rules"
      >
        <el-form-item label="规格" prop="name" class="wrap">
          <el-input v-model="from.name"></el-input>
        </el-form-item>

        <el-form-item label="包装费">
          <el-input-number
            v-model="from.num"
            controls-position="right"
            :min="1"
            :max="110"
          ></el-input-number>
        </el-form-item>

        <el-form-item label="价格">
          <el-input-number
            v-model="from.num1"
            controls-position="right"
            :min="1"
            :max="110"
          ></el-input-number>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="qdlist">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加规格的 -->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>添加食品需要选择一个商铺，先去就去选择商铺吗？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 一进页面触发得 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [], //规格表格
      activeNames: ["1"], //下拉框
      form: {
        type: "",
        types: "",
        text: "",
      },
      // 表单内容
      dialogVisible: false, //刚进入页面弹出的框
      dialogVisible2: false, //添加规格得
      form1: {
        name: "",
        activity: "",
        test: "",
        type: "",
        Specifications: "单规格",
        num: "",
        num1: 20,
      },
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
      },
      dialogVisible4: false,
      dialogImageUrl1: "",
      // 图片得
      from: {
        name: "",
        num: "",
        num1: 20,
      },
      // 添加规格得
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 图片事件
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 图片事件
    qdlist() {
      this.tableData.push({
        name: this.from.name,
        num: this.from.num,
        num1: this.from.num1,
      });
      this.dialogVisible2 = false;
    },
    // 规格确定按钮
    delAll(index) {
      this.tableData.splice(index, 1);
    },
    // 规格表格得删除
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$message({
            message: "恭喜你，这是一条成功消息",
            type: "success",
          });
        } else {
          alert("请输入内容");
          return false;
        }
      });
    },
    // 添加商品
  },
  created() {},
  mounted() {
    this.dialogVisible = true;
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style lang='scss' scoped>
.el-header {
  background: #eff2f7;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-content: center;
  .box {
    margin-top: 20px;
  }
  .boxs {
    margin-top: 10px;
    font-size: 30px;
  }
}
.centers {
  margin-left: 400px;
  margin-top: 20px;
}
.demo-ruleForm {
  width: 700px;
  margin-left: 200px;
  // background: red;
}
.el-collape {
  margin-top: 20px;
}
.top-type {
  width: 590px;
}
.top-type1 {
  width: 200px;
}
.boxs1 {
  margin-top: 20px;
}
.wrap {
  width: 400px;
}
.guige {
  margin-left: 300px;
}
</style>
