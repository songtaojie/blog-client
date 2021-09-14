import axios from 'axios'
import QS from 'qs'
import utils from '../common'
import { TOKEN_TYPE } from '../common/constkey.js'
import store from '../store'

// 设置环境切换时的接口url前缀
axios.defaults.baseURL = process.env.VUE_APP_BASE_API
// 设置请求超时
axios.defaults.timeout = 30000
// 设置post请求头
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
/**
 * 参数过滤
 * @param {*} o 参数
 */
function filterNull(o) {
  for (var key in o) {
    if (utils.isEmpty(o[key])) {
      delete o[key]
    }
    if (utils.isString(o[key])) {
      o[key] = o[key].trim()
    } else if (utils.isObject(o[key])) {
      o[key = filterNull(o[key])]
    } else if (utils.isArray(o[key])) {
      o[key] = filterNull(o[key])
    }
  }

  return o
}

/**
 * get请求
 * @param {String} url 请求的api
 * @param {Object} params 传递的参数
 */
export function get(url, params) {
  if (!utils.isEmpty(params)) {
    params = filterNull(params)
  }

  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * post骑牛
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时传递的参数
 */
export function post(url, data, cfg) {
  console.log(process.env.VUE_APP_BASE_API)
  if (!utils.isEmpty(data)) {
    data = filterNull(data)
  }
  // cfg = cfg || {}
  return new Promise((resolve, reject) => {
    // var d = QS.stringify(data)
    axios.post(url, data, cfg).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
/**
 * put请求
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时传递的参数
 */
export function put(url, params) {
  if (!utils.isEmpty(params)) {
    params = filterNull(params)
  }

  return new Promise((resolve, reject) => {
    axios.put(url, QS.stringify(params)).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}
/**
 * put请求
 * @param {String} url 请求的url地址
 * @param {Object} params 请求时传递的参数
 */
export function del(url, params) {
  if (!utils.isEmpty(params)) {
    params = filterNull(params)
  }

  return new Promise((resolve, reject) => {
    axios.delete(url, QS.stringify(params)).then(res => {
      resolve(res)
    }).catch(err => {
      reject(err)
    })
  })
}

/**
 * 异常的处理方式
 * @param {*} err axios异常对象
 */
export function ajaxError(err) {
  if (err) {
    let r
    if (err.isAxiosError) {
      r = err.response
    } else {
      r = err
    }
    if (r) {
      var result = r.data
      var msg
      if (result && result.hasOwnProperty('success')) {
        if (!result.success) {
          msg = result.message || r.statusText || err.message
        }
      } else {
        msg = r.statusText
      }
      console.log(msg)
      // toast.show(msg || '服务器忙，请稍后重试!')
    }
  }
}

axios.interceptors.request.use((req) => {
  var token = store.getters.auth.token
  var tokenExpire = store.getters.auth.tokenExpire
  var curTime = new Date()
  var expiretime = new Date(Date.parse(tokenExpire))
  if (token && tokenExpire && curTime < expiretime) {
    req.headers.Authorization = TOKEN_TYPE + token
  }
  return req
}, (e) => {
  return Promise.reject(e)
})

// 返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  // 对响应数据做些事
  if (res.data.success === false) {
    return Promise.reject(res)
  }

  return res.data
}, (e) => {
  switch (e.response && e.response.status) {
    case 403:
      // toast.show('您没有该操作的权限!')
      return null
    default:
      break
  }

  return Promise.reject(e)
})

export default {
  get,
  post,
  put,
  del,
  ajaxError
}
