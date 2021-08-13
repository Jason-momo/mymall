import Mock from "mockjs"
import {getInit} from "@/mock/home"

Mock.mock('/user', 'get',getInit())


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