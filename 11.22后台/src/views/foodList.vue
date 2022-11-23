<template>
  <div>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/userlist">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item>食品列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="boxs"><i class="el-icon-info"></i></div>
      </el-header>
      <el-main>
        <el-table :data="reslist" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="食品名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="餐饮名称">
                  <span>{{ props.row.rating_count }}</span>
                </el-form-item>
                <el-form-item label="食品 ID">
                  <span>{{ props.row.item_id }}</span>
                </el-form-item>
                <el-form-item label="餐饮 ID">
                  <span>{{ props.row.category_id }}</span>
                </el-form-item>
                <el-form-item label="食品介绍">
                  <span>{{ props.row.description }}</span>
                </el-form-item>
                <el-form-item label="餐饮地址">
                  <span>{{ props.row.satisfy_rate }}</span>
                </el-form-item>
                <el-form-item label="食品评分">
                  <span>{{ props.row.rating }}</span>
                </el-form-item>
                <el-form-item label="食品分类">
                  <span>{{ props.row.satisfy_rate }}</span>
                </el-form-item>
                <el-form-item label="月销量">
                  <span>{{ props.row.satisfy_rate }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="食品名称" prop="name"> </el-table-column>
          <el-table-column label="食品介绍" prop="description">
          </el-table-column>
          <el-table-column label="评分" prop="rating"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="edit(scope.row, scope.$index)"
                >编辑</el-button
              >
              <el-button size="mini" type="danger" @click="del(scope.$index)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.num"
          :page-sizes="[1, 2, 3, 4]"
          :page-size="page.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="list.length"
        >
        </el-pagination>

        <el-dialog
          title="修改食品信息"
          :visible.sync="dialogVisible"
          width="60%"
        >
          <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="食品名称">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="食品介绍">
              <el-input v-model="ruleForm.tips"></el-input>
            </el-form-item>
            <el-form-item label="食品分类">
              <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
                <el-option label="炒饭" value="shanghai"></el-option>
                <el-option label="食品活动" value="beijing"></el-option>
                <el-option label="123" value="beijing"></el-option>
                <el-option label="rg" value="beijing"></el-option>
                <el-option label="158" value="beijing"></el-option>
                <el-option label="asdfghjkl" value="beijing"></el-option>
                <el-option label="456" value="beijing"></el-option>
                <el-option label="sssssssss" value="beijing"></el-option>
                <el-option label="11" value="beijing"></el-option>
                <el-option label="hyp" value="beijing"></el-option>
                <el-option label="hyp嗯嗯嗯" value="beijing"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="食品图片">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible1">
                <img width="100%" :src="ruleForm.dialogImageUrl" alt="" />
              </el-dialog>
            </el-form-item>
            <el-table :data="tableData" stripe style="width: 100%">
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
                    @click="dels(scope.$index)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <el-button
              type="primary"
              @click="dialogVisible2 = true"
              class="boxxs"
              >添加规格</el-button
            >
          </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editqds">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 点击编辑的 -->

        <el-dialog
          title="修改食品信息"
          :visible.sync="dialogVisible2"
          width="40%"
        >
          <el-form
            :model="from"
            ref="from"
            label-width="100px"
            class="demo-ruleForm"
            :rules="rules"
          >
            <el-form-item label="规格" prop="name">
              <el-input v-model="from.name"></el-input>
            </el-form-item>

            <el-form-item label="包装费">
              <el-input-number
                v-model="from.num"
                controls-position="right"
                @change="handleChange"
                :min="1"
                :max="10"
              ></el-input-number>
            </el-form-item>

            <el-form-item label="价格">
              <el-input-number
                v-model="from.num1"
                controls-position="right"
                @change="handleChange1"
                :min="1"
                :max="10"
              ></el-input-number>
            </el-form-item>
          </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible2 = false">取 消</el-button>
            <el-button type="primary" @click="editqd">确 定</el-button>
          </span>
        </el-dialog>
        <!-- 添加规格的 -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [], //表格的
      list: [], //拿到的数据
      dialogVisible: false, //编辑模态框
      dialogVisible1: false, //图片
      dialogVisible2: false, //添加规格的
      page: {
        size: 5,
        num: 1,
      },
      ruleForm: {
        name: "",
        tips: "",
        dialogImageUrl: "",
        region: "",
      },
      // 编辑模态框
      from: {
        name: "",
        num: "", //保存添加的数据的包装费
        num1: "", //保存添加的数据的价格
      },
      // 添加规格
      rules: {
        name: [{ required: true, message: "请输入活动名称", trigger: "blur" }],
      },
      // 添加的正则
      indexids: -1, //保存编辑的id
    };
  },
  methods: {
    handleChange(val) {
      // console.log(val);
      this.from.num = val;
    },
    // 添加数据的包装费
    handleChange1(val) {
      // console.log(val);
      this.from.num1 = val;
    },
    // 添加数据的价格
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleSizeChange(val) {
      this.page.size = val;
    },
    handleCurrentChange(val) {
      this.page.num = val;
    },
    del(index) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          this.list.splice(index, 1);
          this.$message({
            type: "success",
            message: "删除成功!",
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 删除
    edit(val, id) {
      // console.log(val);
      // console.log(id);
      this.dialogVisible = true;
      this.indexids = id;
      this.ruleForm.name = val.name;
      this.ruleForm.tips = val.description;
    },
    editqd() {
      this.tableData.push(this.from);
      // console.log(this.from);
      this.dialogVisible2 = false;
    },
    // 编辑
    editqds() {
      this.list[this.indexids].name = this.ruleForm.name;
      this.list[this.indexids].description = this.ruleForm.tips;
      this.dialogVisible = false;
    },
    // 编辑食品列表
    dels(index) {
      this.tableData.splice(index, 1);
    },
    // 添加规格的删除
  },
  created() {
    axios({
      url: "https://elm.cangdu.org/shopping/v2/foods?offset=0&limit=20&restaurant_id=undefined",
      method: "GET",
    }).then((res) => {
      // console.log(res);
      this.list = res.data;
    });
  },
  mounted() {},
  components: {},
  computed: {
    reslist() {
      return this.list.slice(
        this.page.size * (this.page.num - 1),
        this.page.size * this.page.num
      );
    },
  },
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
.boxxs {
  margin-top: 20px;
  margin-left: 300px;
}
</style>
