<template>
	<div class=''>
		<el-tabs class="demo-tabs">
			<el-tab-pane label="角色管理" name="first">
				<el-card>
					<el-button type="primary">新增角色</el-button>
				<el-table :data="tableData " border >
					 <el-table-column type="index" width="100" label="序号"/>
    <el-table-column prop="date" label="角色名" sortable />
    <el-table-column prop="name" label="描述"  sortable/>
		<el-table-column label="操作">
      <template #default="scope">
        <p @click="add(scope.$index, scope.row)">分配权限</p>
        <p @click="edit(scope.$index, scope.row)">修改</p>
        <p @click="del">删除</p>
      </template>
    </el-table-column>
  </el-table>
				</el-card>
			</el-tab-pane>
			<!-- 公司信息 -->
			<el-tab-pane label="公司信息" name="second">
				<!-- sortable -->
				<el-form :label-position="labelPosition" label-width="100px" style="max-width: 460px">
					<el-form-item label="企业名称">
						<el-input disabled placeholder="江苏传智播客教育科技股份有限公司" />
					</el-form-item>
					<el-form-item label="公司地址">
						<el-input disabled placeholder="北京市昌平区建材城西路金燕龙办公楼一层" />
					</el-form-item>
					<el-form-item label="公司电话">
						<el-input disabled placeholder="400-618-9090" />
					</el-form-item>
					<el-form-item label="邮箱">
						<el-input disabled placeholder="bd@itcastcn" />
					</el-form-item>
					<el-form-item label="备注">
						<el-input disabled placeholder="传智播客官网-好口碑IT培训机构,一样的教育,不一样的品质" />
					</el-form-item>
				</el-form>
			</el-tab-pane>

		</el-tabs>
	</div>
</template>

<script lang="ts" setup>
import { ElNotification } from 'element-plus'
import { ref } from 'vue'

const labelPosition = ref('right')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
const add = (index: number, row: User) => {
  console.log(index, row)
}
const edit = (index: number, row: User) => {
  console.log(index, row)
}
const del= ()=> {
	ElNotification({
    title: '提示',
    message: '演示系统，不支持此操作',
    type: 'warning',
  })
}
</script>

<style lang='scss' scoped>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
p{
	color: #4979fb;
}
</style>
