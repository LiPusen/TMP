import {setSi, setLoc, serialize, clearKey } from '../utils'

export default {
    // 存入用户信息
    mUserInfo(state, data) {
        clearKey();
        state.common.session = data.session;
        state.userInfo = serialize(data);
        data.isChec ? setLoc('userInfo', data) : setSi('userInfo', data);
    },
    // 登出账户
    mlogout(state) {
        clearKey();
        state.common.session = '';
        state.userInfo = {};
    },
    // 存入面包屑数据
    mCrumb(state, data) {
        state.crumb = serialize(data);
    }
}