// import Mock from "mockjs"
// import {getInitDate, getHomeMultiData, getGoods} from "@/mock/home"

// Mock.mock('/init', 'get', getInitDate())
// Mock.mock('/home/multi', 'get', getHomeMultiData())
// 获取商品列表
// Mock.mock('/home/goods', 'get', getGoods('pop'))


//
// Mock.mock('/userlist', 'get', () => {
//     return Mock.mock({ // 数据池
//         'users|10': [{ // 图表过滤所需数据
//             'name': '@cname',
//             'date': '@date',
//             'province': '@province',
//             'city': '@city',
//             'address': '@county(true) @ctitle() @natural(1000,9999) 号',
//             'zip': '@zip'
//         }]
//     })
// })