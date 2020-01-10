import {serverUrl} from './config.js'
import axios from 'axios'
import Qs from 'qs'
export  const _http=(url = '', data = {}, type = 'GET') =>{

    url = serverUrl+url

    return new Promise(function (resolve, reject) {
        let promise

        if (type === 'GET') {
            // 准备 url query 参数数据
            let dataStr = '' //数据拼接字符串
            Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&'
            })
            if (dataStr !== '') {
                dataStr = dataStr.substring(0, dataStr.lastIndexOf('&'))
                url = url + '?' + dataStr
            }

            promise = axios.get(url)
        } else {
            data = Qs.stringify(data);
            console.log(data)
            promise = axios.post(url, data,{headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }})
        }
        promise.then(response => {
//             if(response.status != 200){
// //                 message.error('服务错误,请稍后再试')
//                 return
//             }
//             if(response.data && response.data.code == 500){
//                 //收集 code = 500 的错误
//                 //message.error('服务器繁忙,请稍后再试')
//                 return
//             }

            resolve(response.data)
        }).catch(error => {
                // reject(error)
        })
    })
}
