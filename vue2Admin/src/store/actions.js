import { Notification } from 'element-ui'
import htp from '../http'

/* 异步请求集中管理
 *
 */

export default {
		aLogin({ commit }, data) {
				htp({ur: 'login', options: data.ops}).then(res => {
						const s = { ...res, isCheck: data.isCheck};
						commit('mUserInfo', s);
						data.callback && data.callback();
				}, er => {
						Notification.error({title: '登录失败', message: er});
				})
		}
}
