import ajax from "@/api/ajax";

const actions = {
    async getHomeGoods(gtype) {
        return await ajax('/goods', 'GET')
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