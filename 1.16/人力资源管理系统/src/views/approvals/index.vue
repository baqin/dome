<template>
	<!-- 审批 -->
	<div class="approvals">
		<el-card shadow="always">
			<div class="box">
				<div class="careful-lab">
					<div>
						<el-icon style="margin-top: 3px; margin-right: 6px; color: #409eff">
							<InfoFilled />
						</el-icon>
					</div>
					<div>当前审批中 0 本月审批通过 1 本月审批驳回 0</div>
				</div>
				<div>
					<el-button type="primary">流程设置</el-button>
				</div>
			</div>
		</el-card>
		<el-card shadow="always" class="approvals-body">
			<el-table :data="approvalsList" style="width: 100%">
				<el-table-column type="selection" width="40" />
				<el-table-column prop="date" label="序号">
					<template #default="scope">{{ scope.$index + 1 }}</template>
				</el-table-column>
				<el-table-column prop="processName" label="审批类型" sortable />
				<el-table-column prop="username" label="申请人" sortable />
				<el-table-column
					prop="procCurrNodeUserName"
					label="当前审批人"
					sortable
				/>
				<el-table-column prop="address" label="审批发起时间" sortable>
					<template #default="scope">
						{{ new Date(scope.row.procApplyTime).toLocaleString() }}
					</template>
				</el-table-column>
				<el-table-column prop="address" label="审批状态" sortable>
					<template #default="scope">
						<span
							style="
								background-color: #00a854;
								width: 8px;
								height: 8px;
								border-radius: 50%;
								display: inline-block;
							"
							v-if="scope.row.processState == 2"
						></span>
						<span
							style="
								background-color: #8a771f;
								width: 8px;
								height: 8px;
								border-radius: 50%;
								display: inline-block;
							"
							v-if="scope.row.processState == 1"
						></span>
						<span
							style="
								background-color: #f04134;
								width: 8px;
								height: 8px;
								border-radius: 50%;
								display: inline-block;
							"
							v-if="scope.row.processState == 3"
						></span>
						<span
							style="
								background-color: #bfbfbf;
								width: 8px;
								height: 8px;
								border-radius: 50%;
								display: inline-block;
							"
							v-if="scope.row.processState == 4"
						></span>
						{{ scope.row.processState == 2 ? '审批通过' : '' }}
						{{ scope.row.processState == 4 ? '撤销' : '' }}
						{{ scope.row.processState == 1 ? '审批中' : '' }}
						{{ scope.row.processState == 3 ? '审批不通过' : '' }}
					</template>
				</el-table-column>

				<el-table-column prop="address" label="操作">
					<template #default="scope">
						<el-button link type="primary" size="small">查看</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination
					v-model:current-page="currentPage"
					v-model:page-size="pageSize"
					:page-sizes="[10, 20, 30, 40]"
					:small="small"
					:disabled="disabled"
					:background="background"
					:total="total"
					layout="sizes, prev, pager, next, jumper"
					@size-change="handleSizeChange"
					@current-change="handleCurrentChange"
				/>
			</div>
		</el-card>
	</div>
</template>
<script lang="ts">
	import { ref, reactive, defineComponent, toRefs } from 'vue';
	import { getApprovals } from '../../untils/approvals';
	import * as Ts from '../../api/approvals';
	export default defineComponent({
		setup(props, ctx) {
			let currentPage = ref<number>(1);
			// 当前第几页
			let pageSize = ref<number>(10);
			// 当前页数
			let total = ref<number>(10);
			// 总数
			const small = ref(true);
			const background = ref(true);
			const disabled = ref(false);
			let approvals = reactive<Ts.approvalsList>({
				approvalsList: [
					{
						departmentId: '1175311466846683136',
						departmentName: '市场部',
						procApplyTime: 1569236417000,
						procCurrNodeUserId: '10753831331064258561075383135371350016',
						procCurrNodeUserName: '乔海 董昊空',
						procData:
							'{"duration":"5","reason":"没有原因","holidayType":"1","processName":"请假","processKey":"process_leave","startTime":"2019-09-15 00:00:00","applyUnit":"按天","endTime":"2019-09-19 00:00:00","userId":"1066370498633486336"}',
						processId: '1175968095611101184',
						processKey: 'process_leave',
						processName: '请假',
						processState: '2',
						timeOfEntry: 1541318400000,
						userId: '1066370498633486336',
						username: '孙财',
					},
				],
			});
			// 审批数据
			const getList = () => {
				getApprovals({
					page: currentPage.value,
					pageSize: pageSize.value,
				}).then((res) => {
					console.log(res);
					total.value = res.data.data.total;
					approvals.approvalsList = res.data.data.rows;
				});
			};
			getList();
			// 获取审批数据
			const handleSizeChange = (val: number) => {
				pageSize.value = val;
				getList();
				// console.log(`${val}`);
			};
			const handleCurrentChange = (val: number) => {
				currentPage.value = val;
				getList();
				// console.log(`${val}`);
			};
			return {
				...toRefs(approvals),
				pageSize,
				currentPage,
				small,
				background,
				disabled,
				handleSizeChange,
				handleCurrentChange,
				total,
			};
		},
	});
</script>
<style lang="scss" scoped>
	.approvals {
		.box {
			display: flex;
			justify-content: space-between;
			width: 100%;
			.careful-lab {
				display: flex;
				padding: 5px 10px;
				font-size: 18px;
				border-radius: 3px;
				border: 1px solid #91d5ff;
				background: #e6f7ff;
				width: 400px;
			}
		}
		.approvals-body {
			margin-top: 20px;
			position: relative;
			padding-bottom: 60px;
		}
		.pagination {
			margin-top: 20px;
			position: absolute;
			bottom: 30px;
			right: 20px;
		}
	}
</style>
