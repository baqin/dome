<template>
  <div>
    <el-container>
      <el-header>
        <el-breadcrumb separator="/" class="box">
          <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item to="/userlist">数据管理</el-breadcrumb-item>
          <el-breadcrumb-item>商家列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="boxs"><i class="el-icon-info"></i></div>
      </el-header>
      <el-main>
        <el-table :data="reslist" style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-form label-position="left" inline class="demo-table-expand">
                <el-form-item label="店铺名称">
                  <span>{{ props.row.name }}</span>
                </el-form-item>
                <el-form-item label="店铺地址">
                  <span>{{ props.row.address }}</span>
                </el-form-item>
                <el-form-item label="店铺介绍">
                  <span>{{ props.row.description }}</span>
                </el-form-item>
                <el-form-item label="店铺 ID">
                  <span>{{ props.row.id }}</span>
                </el-form-item>
                <el-form-item label="联系电话">
                  <span>{{ props.row.phone }}</span>
                </el-form-item>
                <el-form-item label="评分">
                  <span>{{ props.row.rating }}</span>
                </el-form-item>
                <el-form-item label="销售量">
                  <span>{{ props.row.recent_order_num }}</span>
                </el-form-item>
                <el-form-item label="分类">
                  <span>{{ props.row.category }}</span>
                </el-form-item>
              </el-form>
            </template>
          </el-table-column>
          <el-table-column label="店铺名称" prop="name"> </el-table-column>
          <el-table-column label="店铺地址" prop="address"> </el-table-column>
          <el-table-column label="店铺介绍" prop="description">
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="edit(scope.row, scope.$index)"
                >编辑</el-button
              >
              <el-button size="mini" @click="$router.push('/addGoods')"
                >添加食品</el-button
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
        <!-- 分页 -->

        <el-dialog
          title="修改店铺信息"
          :visible.sync="dialogVisible"
          width="30%"
        >
          <el-form
            :model="ruleForm"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="店铺名称">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="详细地址">
              <el-autocomplete
                class="inline-input"
                v-model="ruleForm.address"
                placeholder="请输入地址"
                style="width: 310px"
              ></el-autocomplete>
              当前城市：{{ address }}
            </el-form-item>

            <el-form-item label="店铺介绍">
              <el-input v-model="ruleForm.introduce"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="ruleForm.tel"></el-input>
            </el-form-item>

            <el-form-item label="店铺分类">
              <el-cascader :options="list">
                <template slot-scope="{ node, data }">
                  <span>{{ list.name }}</span>
                  <span v-if="!node.isLeaf">
                    ({{ data.children.length }})
                  </span>
                </template>
              </el-cascader>
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
              <el-dialog :visible.sync="dialogVisible1">
                <img width="100%" :src="ruleForm.dialogImageUrl" alt="" />
              </el-dialog>
            </el-form-item>
          </el-form>

          <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="editqd">确 定</el-button>
          </span>
        </el-dialog>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      dialogVisible1: false, //图片的
      list: [], //拿到的数据
      address: "", //城市的
      dialogVisible: false, //编辑模态框
      page: {
        size: 5, //每条5条数据
        num: 1, //默认第一页
      },
      // 分页的数据
      ruleForm: {
        name: "",
        address: "",
        tel: "",
        introduce: "",
        dialogImageUrl: "",
      },
      // 编辑模态框
      indexid: -1, //编辑拿到的id
    };
  },
  methods: {
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
      this.ruleForm.name = val.name;
      this.ruleForm.address = val.address;
      this.ruleForm.tel = val.phone;
      this.ruleForm.introduce = val.description;
      this.ruleForm.dialogImageUrl = val.image_path;
      this.indexid = id;
    },
    // 编辑
    editqd() {
      this.list[this.indexid].name = this.ruleForm.name;
      this.list[this.indexid].address = this.ruleForm.address;
      this.list[this.indexid].description = this.ruleForm.introduce;
      this.list[this.indexid].phone = this.ruleForm.tel;
      this.dialogVisible = false;
    },
  },
  created() {
    axios({
      url: "https://elm.cangdu.org/shopping/restaurants?latitude=35.895161&longitude=115.498688&offset=0&limit=20",
      method: "GET",
    }).then((res) => {
      // console.log(res);
      this.list = res.data;
    });
  },
  mounted() {
    axios({
      url: "https://elm.cangdu.org/v1/cities?type=guess",
      method: "GET",
    }).then((res) => {
      // console.log(res);
      this.address = res.data.name;
    });
  },
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
</style>
