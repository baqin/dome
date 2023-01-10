<!-- 考勤 -->
<template>
	<div class="attendances">
		<el-card shadow="always" class="attendances-body">
			<el-table :data="attendancesList" style="width: 100%" border>
				<el-table-column label="序号" width="60px">
					<template #default="scope">{{ scope.$index + 1 }}</template>
				</el-table-column>
				<el-table-column prop="username" label="姓名" />
				<el-table-column prop="workNumber" label="工号" />
				<el-table-column prop="departmentName" label="部门" />
				<el-table-column
					prop="mobile"
					label="手机"
					width="120px"
				></el-table-column>
				<el-table-column label="4/1">
					<template #default="scope">
						{{ scope.row.attendanceRecord[0].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/2">
					<template #default="scope">
						{{ scope.row.attendanceRecord[1].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/3">
					<template #default="scope">
						{{ scope.row.attendanceRecord[2].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/4">
					<template #default="scope">
						{{ scope.row.attendanceRecord[3].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/5">
					<template #default="scope">
						{{ scope.row.attendanceRecord[4].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/6">
					<template #default="scope">
						{{ scope.row.attendanceRecord[5].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/7">
					<template #default="scope">
						{{ scope.row.attendanceRecord[6].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/8">
					<template #default="scope">
						{{ scope.row.attendanceRecord[7].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/9">
					<template #default="scope">
						{{ scope.row.attendanceRecord[8].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/10">
					<template #default="scope">
						{{ scope.row.attendanceRecord[9].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/11">
					<template #default="scope">
						{{ scope.row.attendanceRecord[10].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/12">
					<template #default="scope">
						{{ scope.row.attendanceRecord[11].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/13">
					<template #default="scope">
						{{ scope.row.attendanceRecord[12].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/14">
					<template #default="scope">
						{{ scope.row.attendanceRecord[13].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/15">
					<template #default="scope">
						{{ scope.row.attendanceRecord[14].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/16">
					<template #default="scope">
						{{ scope.row.attendanceRecord[15].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/17">
					<template #default="scope">
						{{ scope.row.attendanceRecord[16].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/18">
					<template #default="scope">
						{{ scope.row.attendanceRecord[17].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/19">
					<template #default="scope">
						{{ scope.row.attendanceRecord[18].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/20">
					<template #default="scope">
						{{ scope.row.attendanceRecord[19].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/21">
					<template #default="scope">
						{{ scope.row.attendanceRecord[20].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/22">
					<template #default="scope">
						{{ scope.row.attendanceRecord[21].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/23">
					<template #default="scope">
						{{ scope.row.attendanceRecord[22].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/24">
					<template #default="scope">
						{{ scope.row.attendanceRecord[23].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/25">
					<template #default="scope">
						{{ scope.row.attendanceRecord[24].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/26">
					<template #default="scope">
						{{ scope.row.attendanceRecord[25].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/27">
					<template #default="scope">
						{{ scope.row.attendanceRecord[26].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/28">
					<template #default="scope">
						{{ scope.row.attendanceRecord[27].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/29">
					<template #default="scope">
						{{ scope.row.attendanceRecord[28].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
				<el-table-column label="4/30">
					<template #default="scope">
						{{ scope.row.attendanceRecord[29].jobStatu == 0 ? '旷工' : '' }}
					</template>
				</el-table-column>
			</el-table>
		</el-card>
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
	</div>
</template>
<script lang="ts">
	import { ref, reactive, defineComponent, toRefs } from 'vue';
	import { getAttendancesList } from '../../untils/attendances';
	import * as Ts from '../../api/attendances';
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
			const attendances = reactive<Ts.attendancesList>({
				attendancesList: [
					{
						departmentId: '1',
						attendanceRecord: [],
						departmentName: '1',
						id: '1',
						mobile: '1',
						username: '1',
						workNumber: '1',
					},
				],
			});
			const getList = () => {
				getAttendancesList({
					page: currentPage.value,
					pagesize: pageSize.value,
				}).then((res) => {
					console.log(res);
					attendances.attendancesList = res.data.data.data.rows;
					console.log(attendances);
					total.value = res.data.data.data.total;
				});
			};
			getList();
			const handleSizeChange = (val: number) => {
				pageSize.value = val;
				console.log(pageSize);
				getList();
				// console.log(`${val}`);
			};
			const handleCurrentChange = (val: number) => {
				currentPage.value = val;
				getList();
				// console.log(`${val}`);
			};
			return {
				...toRefs(attendances),
				currentPage,
				pageSize,
				total,
				small,
				background,
				disabled,
				handleSizeChange,
				handleCurrentChange,
			};
		},
	});
</script>
<style lang="scss" scoped>
	.attendances {
		position: relative;
	}
	.attendances-body {
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
</style>
