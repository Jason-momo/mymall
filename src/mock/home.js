import Mock from 'mockjs'

export function getInit() {
    return Mock.mock({
        'user': {
            'username': '@cname',
            'birthday': '@date',
            'city': '@city',
        }
    })
}


