import ajax from "@/api/ajax";

const actions = {
    async getHomeGoods() {
        return await ajax('https://mock.apipost.cn/app/mock/project/f1f6c282-67b1-445f-a451-7fbc3dc849ad/home/goods/pops', 'GET')
    },
    async getHomeRecommend() {
        return await ajax('https://mock.apipost.cn/app/mock/project/f1f6c282-67b1-445f-a451-7fbc3dc849ad/home/recommends', "GET")
    },
    async getHomeBanners() {
        return await ajax('https://mock.apipost.cn/app/mock/project/f1f6c282-67b1-445f-a451-7fbc3dc849ad/home/banners', 'GET')
    },
}
export default actions