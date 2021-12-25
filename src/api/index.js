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
  getArticles(page) {
    return request.get(`/api/articles/${page}`)
  },
  // 分页列表
  getTagArticles(tagId, page) {
    return request.get(`/api/tag/articles?t=${tagId}&p=${page}`)
  },
  getDetail(id) {
    return request.get(`/api/article/${id}`)
  }
}
// 首页api前缀
export const timeLineApi = {
  // 分页列表
  getTimeLines(page) {
    return request.get(`/api/timelines/${page}`)
  }
}

export default {
  blogApi,
  homeApi,
  timeLineApi
}
