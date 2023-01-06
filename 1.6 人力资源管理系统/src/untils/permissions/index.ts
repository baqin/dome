import { http, apis } from '../http';

function getPermissionList() {
	return http({
		url: apis('/sys/permission?type=1&pid=0'),
		method: 'get',
	});
}
// 获取权限列表

export { getPermissionList };
