// 封装请求
import api from './api'
import axios from 'axios';

// 全局设置
axios.defaults.headers.common['Authorization'] = 'qms';
axios.defaults.headers.post['Content-Type'] = 'application/json'

const htp = axios.create();

// 请求拦截
axios.interceptors.request.use(config => {}, err => {})

// 响应拦截
axios.interceptors.response.use(response => {}, err => {})

let server = {};

export default server
