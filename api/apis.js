import {
  request
} from "../utils/request.js"

//获取首页导航nav
export function listNav() {
  return request({
    url: "/nav/get",
    method: "POST"
  })
}

//获取新闻列表list
export function newsNav(data) {
  return request({
    url: '/news/get',
    method: "POST",
    data
  })
}

//获取新闻详情
export function newsDetail(data){
  return request({
    url:"/news/detail",
    method:"POST",
    data
  })
}