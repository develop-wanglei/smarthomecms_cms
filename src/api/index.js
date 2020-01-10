import {_http} from './http.js'
//登录接口
export const login =(data) => _http('/user/login',data,'POST')

//token验证
export const validToken = (data) => _http('/token/get',data,'POST')
