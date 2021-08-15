import Mock from 'mockjs'

export function getInitDate() {
    return Mock.mock({
        'user': {
            'username': '@cname',
            'birthday': '@date',
            'city': '@city',
        }
    })
}
export  function getBannerList(){
    return Mock.mock({
        "banner|4":{
            "img":Mock.Random.image("300X200"),
            "link":"xx"
        }
    })
}

export function getHomeMultiData() {
    return Mock.mock({
        'multi': {
            'title': '@cname',
            'birthday': '@date',
            'city': '@city',
        }
    })
}


