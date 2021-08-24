import ajax from "@/api/ajax";

const actions = {
    async getHomeGoods() {
        return await ajax('https://mock.apipost.cn/app/mock/project/f1f6c282-67b1-445f-a451-7fbc3dc849ad/home/goods/pops', 'GET')
    },
    async getInitDate() {
        return await ajax('/init', 'GET')
    },
    // 测试方法
    printTest() {
        console.log('PrintTest...')
    },
    async getHomeMultiData() {
        return await ajax('/home/multi', 'GET')
    }
}
export default actions