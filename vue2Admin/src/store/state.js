import {getSi, getLoc} from '../utils'
/*
 * 参数说明:
 * @common 后台接收的公共参数,一般是对用户的校验参数
 * @userInfo 用户相关信息
 * @crumb 面包屑相关
 * 
 */
const info = getSi('userInfo') || getLoc('userInfo') || '';

export default {
    common : {
        session: info && info.session
    },
    userInfo : info,
    crumb : [],
}