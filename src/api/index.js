import {_http} from './http.js'
//登录接口
export const login =(data) => _http('/user/login',data,'POST')

//token验证
export const validToken = (data) => _http('/token/get',data,'POST')

// 生成秘钥
export const setKey = (data) => _http('/uuid/set',data,'POST')

// 删除token
export const delToken = (data) => _http('/token/del',data,'POST')

// 查询所有秘钥
export const getKey = () => _http('/uuid/get',{},'POST')

// 删除秘钥
export const delKey =(data)=>_http('/uuid/del',data,'POST')

// 查看所有学校
export const getSchool = () =>_http('/school/selectAll',{},'POST')

// 查看学校实验箱
export const getSchoolBox = (data) =>_http('/boxSchool/selectBySchoolId',data,'POST')

// 添加学校
export const addSchool = (data) =>_http('/school/insert',data,'POST')
