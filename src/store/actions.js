import ajax from "@/api/ajax";

const actions = {
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