// import Mock from 'mockjs'
//
// //
// export function getGoods(gType, page = 1) {
//     let data = null
//     if (gType === 'pop') {
//         data = Mock.mock({
//             "list|30": [{
//                 'title': "@title",
//                 'price|1-1000': 1,
//                 'fav|1-1000': 1,
//                 'img': Mock.Random.image('100X200'),
//             }]
//         })
//     }
//     // console.log(data)
//     return data;
// }
//
// export function getInitDate() {
//     return Mock.mock({
//         'user': {
//             'username': '@cname',
//             'birthday': '@date',
//             'city': '@city',
//         }
//     })
// }
//
// export function getBannerList() {
//     return Mock.mock({
//         "banner|4": {
//             "img": Mock.Random.image("300X200"),
//             "link": "xx"
//         }
//     })
// }
//
// export function getHomeMultiData() {
//     return Mock.mock({
//         'multi': {
//             'title': '@cname',
//             'birthday': '@date',
//             'city': '@city',
//         }
//     })
// }
//
//
