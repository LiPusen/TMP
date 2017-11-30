// 接口管理
const api = {
    
};
// 不同环境分发
for(var k in api) {
    if(process.env.NODE_ENV == 'development') {
        api[k] = '/api/' + api[k];
    } else {
        api[k] = 'https://127.0.0.1:8888/' + api[k];
    }
}

export default api
