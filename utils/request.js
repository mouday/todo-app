/**
 * 基于Promise封装uni-app的request方法，实现类似axios形式的请求
 * https://my.oschina.net/u/2428630/blog/3004860?tdsourcetag=s_pcqq_aiomsg
 */

import { BASE_URL } from '@/config/config.js';

// 对请求接口进行封装
export default function request (options) {

    return new Promise((resolve, reject) => {
        uni.request({
            url: BASE_URL + options.url,
            method: options.method || "GET",
            data: options.data || {},
            success: res => {
                if(res.statusCode != 200){
                    uni.showToast({
                        title:"获取数据失败，请检查网络",
                        icon: "none"
                    })
                }else{
                    resolve(res.data);
                }
            },
            fail: err =>{
                uni.showToast({
                    title:"网络错误",
                    icon: "none"
                })
                // reject(err)
            }
        })
    })
}

