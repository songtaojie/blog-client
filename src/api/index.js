import request from './http.js'

// 首页api前缀
const homeRoutePrefix = '/api/home'
export const homeApi = {
  // 分页列表
  getAllData() {
    return request.get(`${homeRoutePrefix}/all`)
  }
}
// 接口管理页面的相关接口
// const routePrefix = '/api/blog'
export const blogApi = {
  // 分页列表
  getArticles(data) {
    return request.post('/api/articles', data)
  },
  getDetail(id) {
    return request.get(`/api/article/${id}`)
  }
}


export default {
  blogApi,
  homeApi
}
