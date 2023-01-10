<template>
	<!-- 权限 -->
	<div class="permissions">
		<el-card shadow="always" style="position: relative">
			<el-button
				type="primary"
				style="
					width: 110px;
					height: 40px;
					position: absolute;
					top: 20px;
					right: 20px;
				"
			>
				<el-icon><EditPen /></el-icon>
				&ensp;添加菜单
			</el-button>
			<el-table :data="permissionsList" style="width: 100%; margin-top: 40px">
				<el-table-column label="菜单名称">
					<template #default="scope">
						<el-icon><FolderOpened /></el-icon>
						{{ scope.row.name }}
					</template>
				</el-table-column>
				<el-table-column prop="code" label="权限标识" />
				<el-table-column prop="description" label="描述" />
				<el-table-column prop="address" label="操作">
					<template #default="scope">
						<el-button
							link
							type="primary"
							size="small"
							@click="dialogVisible = !dialogVisible"
						>
							添加权限点
						</el-button>
						<el-button link type="primary" size="small">查看api权限</el-button>
						<el-button link type="primary" size="small">查看</el-button>
						<el-button link type="primary" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
		<!-- 添加权限弹框 -->
		<el-dialog v-model="dialogVisible" title="编辑权限" width="40%">
			<el-form :model="form" label-width="100px">
				<el-form-item label="权限名称">
					<el-input v-model="form.name" />
				</el-form-item>
				<el-form-item label="权限标识">
					<el-input v-model="form.code" />
				</el-form-item>
				<el-form-item label="权限描述">
					<el-input v-model="form.description" />
				</el-form-item>
				<el-form-item label="企业可见">
					<span>不可见</span>
					<el-switch v-model="form.enVisible" />
					<span>可见</span>
				</el-form-item>
				<el-form-item label="按钮样式">
					<el-input v-model="form.pointClass" />
				</el-form-item>
				<el-form-item label="按钮icon">
					<el-input v-model="form.pointIcon" />
				</el-form-item>
				<el-form-item label="按钮状态">
					<el-input v-model="form.pointStatus" />
				</el-form-item>
			</el-form>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取消</el-button>
					<el-button type="primary">确定</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>

<script lang="ts">
	import { ref, reactive, toRefs } from 'vue';
	import { getPermissionList } from '../../untils/permissions';
	import * as Ts from '../../api/permissions';
	export default {
		setup(props, ctx) {
			const permissions = reactive<Ts.permissionsList>({
				permissionsList: [
					{
						code: '',
						description: '',
						enVisible: '',
						id: '',
						name: '',
						pid: '',
						type: 1,
					},
				],
			});
			const getList = () => {
				getPermissionList().then((res) => {
					console.log(res);
					permissions.permissionsList = res.data.data;
				});
			};
			getList();
			// 获取列表数据
			let dialogVisible = ref<boolean>(false);
			// 控制添加弹出框
			const form = reactive({
				name: '',
				code: '',
				description: '',
				enVisible: '2',
				pointClass: '',
				pointIcon: [],
				pointStatus: '',
			});
			return { ...toRefs(permissions), dialogVisible, form };
		},
	};
</script>

<style lang="scss" scoped></style>
