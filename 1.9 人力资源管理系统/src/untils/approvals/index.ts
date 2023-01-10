import { http, apis } from '../http';

function getApprovals(data?: { page: number; pageSize: number }) {
	return http({
		url: apis('/user/process/instance/1/10'),
		method: 'put',
		data,
	});
}
// 审批列表

export { getApprovals };
