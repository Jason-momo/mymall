import Axios from "axios"

const ajax = (url, rtype = "GET", params = {}) => {
    const axiosInstance = Axios.create({
        baseURL: "",
        timeout: 3000,
    })
    if (rtype.toLocaleUpperCase() === "POST") {
        return axiosInstance.post(url, params)
    }
    return axiosInstance({url, params})
}
export default ajax;
