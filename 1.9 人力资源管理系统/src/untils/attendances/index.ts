import { http, apis } from '../http';

function getAttendancesList(params?: { page: Number; pagesize: Number }) {
	return http({
		url: apis('/attendances'),
		method: 'get',
		params,
	});
}
// 考勤列表数据

export { getAttendancesList };
