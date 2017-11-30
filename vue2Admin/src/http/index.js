// 封装请求
//import api from './api'
import axios from 'axios';
import { Notification, Loading } from 'element-ui'
import store from '../store'

// 全局设置
axios.defaults.headers.common['Authorization'] = 'liyq';
axios.defaults.headers.post['Content-Type'] = 'application/json'

// 拦截request,设置全局请求为ajax请求
axios.interceptors.request.use(config => {
	config.headers['X-Requested-With'] = 'XMLHttpRequest'
	return config
})

// 响应拦截
axios.interceptors.response.use(response => {}, err => {})

const htp = axios.create({
	baseURL: "/",
	timeout: 2000
});



// 处理接口规范的公有方法
const server = ({ method = 'post', ur, options = {} }) => {
	let p, m = false;
	let load = { close: () => {} };
	setTimeout(() => {
		!m && (load = Loading.service({
			fullscreen: true,
			text: '拼命加载中...'
		}));
	}, 500);
	// 混入公共参数
	const ops = JSON.parse(JSON.stringify(store.state.common));
	Object.assign(ops, options);
	switch(method) {
		case 'get':
			p = new Promise(function(resolve, reject) {				
				htp.get(ur, { params: ops }).then(response => {
					m = true;
					load.close();
					if(response.data.code && response.data.code == 200) {
						resolve(response.data.body);
					} else {
						reject(response.data.msg);
					}
				}, er => {
					m = true;
					load.close();console.dir(p)
					errHandler(er);
				});
			});
			break;
		case 'post':
			p = new Promise(function(resolve, reject) {
				htp.post(ur, ops).then(response => {
					m = true;
					load.close();
					if(response.data.code && response.data.code == 200) {
						resolve(response.data.body);
					} else {
						reject(response.data.msg);
					}
				}, er => {
					m = true;
					load.close();					
					errHandler(er);
				})
			});
			break;
		default:
			break;
	}
	return p;
}

function errHandler(er) {
	Notification.error({
		title: '网络连接错误',
		message: '请检查您的网络连接是否正常'
	});
}

export default server
