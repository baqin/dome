<template>
  <div>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/addShop">添加数据</el-breadcrumb-item>
          <el-breadcrumb-item>添加商铺</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="boxs"><i class="el-icon-info"></i></div>
      </el-header>
      <el-main>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="店铺名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" prop="address">
            <el-autocomplete
              class="inline-input"
              v-model="ruleForm.address"
              placeholder="请输入地址"
            ></el-autocomplete>
            当前城市：{{ address }}
          </el-form-item>

          <el-form-item label="联系电话" prop="tel">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="店铺简介">
            <el-input v-model="ruleForm.username"></el-input>
          </el-form-item>
          <el-form-item label="店铺标语">
            <el-input v-model="ruleForm.slogan"></el-input>
          </el-form-item>
          <el-form-item label="店铺分类">
            <el-cascader :options="list">
              <template slot-scope="{ node, data }">
                <span>{{ list.name }}</span>
                <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
              </template>
            </el-cascader>
          </el-form-item>
          <el-form-item label="店铺特点">
            品牌保证
            <el-switch
              v-model="ruleForm.flag"
              active-color="#20a0ff"
              inactive-color="#bfcbd9"
            >
            </el-switch>

            蜂鸟专送
            <el-switch
              v-model="ruleForm.flag1"
              active-color="#20a0ff"
              inactive-color="#bfcbd9"
            >
            </el-switch>
            新开店铺
            <el-switch
              v-model="ruleForm.flag2"
              active-color="#20a0ff"
              inactive-color="#bfcbd9"
              class="a"
            >
            </el-switch>
            外卖保
            <el-switch
              v-model="ruleForm.flag3"
              active-color="#20a0ff"
              inactive-color="#bfcbd9"
            >
            </el-switch>
            准时达
            <el-switch
              v-model="ruleForm.flag4"
              active-color="#20a0ff"
              inactive-color="#bfcbd9"
            >
            </el-switch>
            开发票
            <el-switch
              v-model="ruleForm.flag5"
              active-color="#20a0ff"
              inactive-color="#bfcbd9"
            >
            </el-switch>
          </el-form-item>

          <el-form-item label="配送费">
            <el-input-number
              v-model="ruleForm.num"
              controls-position="right"
              @change="handleChange"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="起送价">
            <el-input-number
              v-model="ruleForm.num1"
              controls-position="right"
              @change="handleChange1"
              :min="1"
              :max="10"
            ></el-input-number>
          </el-form-item>

          <el-form-item label="营业时间">
            <el-time-select
              placeholder="起始时间"
              v-model="ruleForm.startTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
              }"
            >
            </el-time-select>
            <el-time-select
              placeholder="结束时间"
              v-model="ruleForm.endTime"
              :picker-options="{
                start: '08:30',
                step: '00:15',
                end: '18:30',
              }"
            >
            </el-time-select>
          </el-form-item>

          <el-form-item label="上传店铺头像">
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

          <el-form-item label="上传营业执照">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible5">
              <img width="100%" :src="dialogImageUrl2" alt="" />
            </el-dialog>
          </el-form-item>

          <el-form-item label="上传餐饮服务许可证">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible6">
              <img width="100%" :src="dialogImageUrl3" alt="" />
            </el-dialog>
          </el-form-item>

          <el-form-item label="满减优惠">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="满减优惠" value="-1"></el-option>
              <el-option label="优惠大酬宾" value="1"></el-option>
              <el-option label="新用户立减" value="2"></el-option>
              <el-option label="进店领券" value="3"></el-option>
            </el-select>
          </el-form-item>

          <el-table :data="tableData" stripe style="width: 100%">
            <el-table-column prop="title" label="活动标题" width="180">
            </el-table-column>
            <el-table-column prop="name" label="活动名称" width="180">
            </el-table-column>
            <el-table-column prop="titles" label="活动详情"> </el-table-column>
            <el-table-column label="操作">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="danger"
                  @click="delss(scope.$index)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
          <el-form-item>
            <el-button type="primary" class="ab" @click="submitForm('ruleForm')"
              >立即创建</el-button
            >
          </el-form-item>
        </el-form>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        {
          title: "减",
          name: "满减优惠",
          titles: "满30减5，满60减8",
        },
      ], //添加商铺的表格
      address: "", //当前城市
      list: [], //店铺分类
      ruleForm: {
        name: "",
        address: "",
        tel: "",
        username: "",
        slogan: "",
        flag: false, //品牌保证
        flag1: false, //蜂鸟专送
        flag2: false, //新开店铺
        flag3: false, //外卖保
        flag4: false, //准时达
        flag5: false, //开发票
        num: "", //配送费
        num1: "", //起送价
        startTime: "", //营业时间
        endTime: "", //结束时间
        region: "", //满减优惠
      },
      rules: {
        name: [{ required: true, message: "请输入店铺名称", trigger: "blur" }],
        address: [
          { required: true, message: "请输入详细地址", trigger: "blur" },
        ],
        tel: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
      },
      dialogVisible4: false, // 上传店铺头像
      dialogImageUrl1: "", //上传店铺头像
      dialogVisible5: false, //上传营业执照
      dialogImageUrl2: "", //上传营业执照
      dialogVisible6: false, //上传餐饮服务许可证
      dialogImageUrl3: "", //上传餐饮服务许可证
    };
  },
  methods: {
    handleChange(val) {},
    // 配送费
    handleChange1(val) {},
    //  起送价
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 图片事件
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    // 图片事件
    delss(index) {
      this.tableData.splice(index, 1);
    },
    // 表格的删除
    adds() {
      console.log("123");
    },
    // 添加商铺的创建
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
  },
  created() {
    axios({
      url: "https://elm.cangdu.org/shopping/v2/restaurant/category",
      method: "GET",
    }).then((res) => {
      // console.log(res);
      this.list = res.data;
    });
    axios({
      url: "https://elm.cangdu.org/v1/cities?type=guess",
      method: "GET",
    }).then((res) => {
      // console.log(res);
      this.address = res.data.name;
    });
    // 请求城市接口i
  },
  mounted() {},
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
.demo-ruleForm {
  width: 600px;
  margin-left: 200px;
}
.inline-input {
  width: 500px;
}
.a {
  margin-right: 180px;
}
.ab {
  margin-left: 150px;
  margin-top: 5px;
}
</style>
