<template>
  <div class="params">
    <div class="params-top">
      <el-alert
        title="注意：只允许为第三级分类设置相关参数！"
        type="warning"
        show-icon
        effect="dark"
        :closable="false"
      >
      </el-alert>
    </div>
    <!-- 商品分类内容展示 -->
    <div class="params-sort">
      <el-form ref="form" label-width="120px">
        <el-form-item label="选择商品分类：">
          <el-cascader
            :options="list"
            clearable
            :props="defaultParams"
            @change="handleChange"
            ref="cascader"
          ></el-cascader>
        </el-form-item>
      </el-form>
    </div>

    <!-- 动态参数 -->
    <el-tabs type="border-card" @tab-click="adds">
      <el-tab-pane label="动态参数">
        <el-button
          type="primary"
          size="mini"
          :disabled="sortid == 0 || sorts.cat_level != 2"
          @click="paramsadd"
          >添加参数</el-button
        >
        <el-table
          :data="lists"
          style="width: 100%"
          v-show="sorts.cat_level == 2"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
              >
                {{ tag }}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
                @keyup.enter.native="handleInputConfirm"
                @blur="handleInputConfirm"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small"
                >+ New Tag</el-button
              >
            </template>
          </el-table-column>
          <el-table-column label="#" type="index"> </el-table-column>
          <el-table-column label="参数名称" prop="attr_name"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                class="el-icon-edit"
                type="primary"
                @click="edit(scope.row)"
                >修改</el-button
              >
              <el-button
                size="mini"
                type="danger"
                class="el-icon-delete"
                @click="del(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>

      <!-- 动态属性 -->

      <el-tab-pane label="静态属性">
        <el-button
          type="primary"
          size="mini"
          :disabled="sortid == 0 || sorts.cat_level != 2"
          @click="paramsadd"
          >静态属性</el-button
        >
        <el-table
          :data="staticlist"
          style="width: 100%"
          v-show="sorts.cat_level == 2"
        >
          <el-table-column type="expand">
            <template slot-scope="props">
              <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)"
              >
                {{ tag }}
              </el-tag>
              <el-input
                class="input-new-tag"
                v-if="inputVisible"
                v-model="inputValue"
                ref="saveTagInput"
                size="small"
              >
              </el-input>
              <el-button v-else class="button-new-tag" size="small"
                >+ New Tag</el-button
              >
            </template>
          </el-table-column>
          <el-table-column label="#" type="index"> </el-table-column>
          <el-table-column label="参数名称" prop="attr_name"> </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                class="el-icon-edit"
                type="primary"
                @click="edit(scope.row)"
                >修改</el-button
              >
              <el-button
                size="mini"
                type="danger"
                class="el-icon-delete"
                @click="del(scope.row)"
                >删除</el-button
              >
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>

    <params-update
      v-if="dialogVisible"
      ref="paramsupdate"
      :title="title"
      :title1="title1"
      @paramsqd="paramsqd"
      :id="id"
    ></params-update>
  </div>
</template>

<script>
import { STATUS } from "@/constStatus/initStatus"
import ParamsUpdate from "../Shopmanage/Params-Update.vue"
export default {
  data() {
    return {
      list: [], //用来保存商品分类数据
      defaultParams: {
        label: "cat_name",
        value: "cat_name",
        children: "children"
      }, //级联选择器展示内容
      sortid: 0, //用来保存选择得分类id
      sorts: {}, //用来保存选择得分类
      lists: [], //动态内容保存数据
      dynamicTags: [], //动态内容点击儿子
      inputVisible: false, //动态内容点击儿子显示隐藏
      dialogVisible: false, //动态参数添加编辑模态框
      dialogVisible1: false, //静态属性添加编辑模态框
      title: "添加动态参数", //动态参数模态框动态标题
      title1: "", //静态属性模态框动态标题
      many: "many", //动态参数
      only: "only", //静态属性
      attr_id: 0, //动态参数当前属性id
      staticlist: [], //静态内容的数据
      id: 0, //默认是动态参数，1就是静态
      attr_id2: 0
    }
  },
  methods: {
    /**商品分类级别选择器事件 */
    handleChange() {
      this.sortid = this.$refs.cascader.getCheckedNodes()[0].data.cat_id
      // console.log(this.$refs.cascader.getCheckedNodes()[0].data)
      // console.log(this.sortid)
      this.sorts = this.$refs.cascader.getCheckedNodes()[0].data
      if (this.sorts.cat_level != 2) {
        this.$message({
          message: "只允许三级分类设置参数",
          type: "warning"
        })
      } else {
        this.render() //如果是三级以上调用动态内容数据
        this.renders() //如果是三级以上调用静态容数据
      }
    },

    /**动态内容点击子事件 */
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1)
    },

    /**获取动态内容 */
    render() {
      this.$http({
        method: "get",
        url: this.$http.addorUrl(
          `categories/${this.sortid}/attributes?sel=many`
        )
      }).then((res) => {
        // console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.lists = res.data.data
        }
      })
    },

    /**动态参数的删除 */
    del(row) {
      /**0的话就是动态参数 */
      if (this.id == 0) {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$http({
              method: "delete",
              url: this.$http.addorUrl(
                `categories/${row.cat_id}/attributes/${row.attr_id}`
              )
            }).then((res) => {
              {
                // console.log(res)
                if (res.data.meta.status == STATUS.SUCCESS) {
                  this.render()
                  // 删除调用渲染
                }
              }
            })
            this.$message({
              type: "success",
              message: "删除成功!"
            })
          })
          .catch(() => {
            this.$message({
              type: "info",
              message: "已取消删除"
            })
          })
      } else {
        this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
          .then(() => {
            this.$http({
              method: "delete",
              url: this.$http.addorUrl(
                `categories/${row.cat_id}/attributes/${row.attr_id}`
              )
            }).then((res) => {
              {
                // console.log(res)
                if (res.data.meta.status == STATUS.SUCCESS) {
                  this.renders()
                  // 删除调用渲染
                }
              }
            })
            this.$message({
              type: "success",
              message: "删除成功!"
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

    /**动态参数添加事件 */
    paramsadd() {
      if (this.id == 0) {
        this.title = "添加动态参数"
        this.dialogVisible = true
        this.$nextTick(() => {
          this.$refs.paramsupdate.info()
        })
      } else {
        this.title1 = "添加静态属性"
        this.dialogVisible1 = true
        this.$nextTick(() => {
          this.$refs.paramsupdate.info1()
        })
      }
    },

    /**子组件传过来的动态参数的确定按钮 */
    paramsqd(info) {
      // console.log(info)
      if (this.id == 0) {
        if (this.title == "添加动态参数") {
          this.$http({
            method: "post",
            url: this.$http.addorUrl(`categories/${this.sortid}/attributes`),
            data: { attr_name: info.row.attr_name, attr_sel: this.many }
          }).then((res) => {
            // console.log(res)
            if (res.data.meta.status == STATUS.ERROR) {
              this.render()
              this.attr_id2 = res.data.data.attr_id

              this.dialogVisible = false
              this.$message({
                message: "添加成功",
                type: "success"
              })
              info.row = {
                attr_name: ""
              }
            }
          })
        } else {
          this.$http({
            method: "put",
            url: this.$http.addorUrl(
              `categories/${this.sortid}/attributes/${this.attr_id}`
            ),
            data: { attr_name: info.row.attr_name, attr_sel: this.many }
          }).then((res) => {
            // console.log(res)
            if (res.data.meta.status == STATUS.SUCCESS) {
              this.dialogVisible = false
              this.$message({
                message: "编辑成功",
                type: "success"
              })
              this.render()
            }
          })
        }
      } else {
        if (this.title1 == "添加静态属性") {
          this.$http({
            method: "post",
            url: this.$http.addorUrl(`categories/${this.sortid}/attributes`),
            data: { attr_name: info.row1.attr_name, attr_sel: this.only }
          }).then((res) => {
            // console.log(res)
            this.renders()
            // 调用渲染接口
            this.dialogVisible1 = false
            this.$message({
              message: "添加成功",
              type: "success"
            })
            info.row1 = {
              attr_name: ""
            }
          })
        } else {
          // console.log(this.attr_id)
          this.$http({
            method: "put",
            url: this.$http.addorUrl(
              `categories/${this.sortid}/attributes/${this.attr_id}`
            ),
            data: { attr_name: info.row1.attr_name, attr_sel: this.only }
          }).then((res) => {
            // console.log(res)
            this.dialogVisible1 = false
            this.$message({
              message: "编辑成功",
              type: "success"
            })
            this.renders()
          })
        }
      }
    },

    /**动态参数编辑按钮 */
    edit(row) {
      if (this.id == 0) {
        this.title = "修改动态参数"
        this.dialogVisible = true
        this.$nextTick(() => {
          this.$refs.paramsupdate.info(row)
        })
        this.attr_id = row.attr_id
      } else {
        this.title1 = "修改静态属性"
        this.dialogVisible1 = true
        this.$nextTick(() => {
          this.$refs.paramsupdate.info1(row)
        })
        this.attr_id = row.attr_id
      }
    },

    //  获取静态属性
    renders() {
      this.$http({
        method: "get",
        url: this.$http.addorUrl(
          `categories/${this.sortid}/attributes?sel=only`
        )
      }).then((res) => {
        // console.log(res)
        if (res.data.meta.status == STATUS.SUCCESS) {
          this.staticlist = res.data.data
        }
      })
    },

    /**拿到点击的是动态还是静态 */
    adds(val) {
      this.id = val.index
    },

    handleInputConfirm() {
      // console.log(this.inputValue)
      // this.$http({
      //   method: "put",
      //   url: this.$http.addorUrl(
      //     `categories/${this.sortid}/attributes/${this.attr_id2}`
      //   ),
      //   data: {
      //     attr_name: this.cat_name2,
      //     attr_sel: this.many,
      //     attr_vals: this.inputValue
      //   }
      // }).then((res) => {
      //   console.log(res)
      //   this.renders()
      // })
      let inputValue = this.inputValue
      if (inputValue) {
        this.dynamicTags.push(this.inputValue)
      }
      this.inputVisible = false
      this.inputValue = ""
    },

    showInput() {
      this.inputVisible = true
      this.$nextTick((_) => {
        this.$refs.saveTagInput.$refs.input.focus()
      })
    }
  },
  created() {
    this.render()
    /**商品列表内容获取 */
    this.$http({
      method: "get",
      url: this.$http.addorUrl(`/categories`)
    }).then((res) => {
      // console.log(res)
      if (res.data.meta.status == STATUS.SUCCESS) {
        this.list = res.data.data
      }
    })
  },
  mounted() {},
  components: {
    ParamsUpdate
  },
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.params {
  border: 1px solid #ebeef5;
  background-color: #fff;
  color: #303133;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  padding: 20px;
}
.params-top {
  display: flex;
}
.params-sort {
  width: 400px;
  margin-top: 20px;
}
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
}
</style>
