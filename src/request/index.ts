import axios, {AxiosResponse} from "axios"

const service = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    timeout: 1000 * 60,
})

interface ResponseResult {
    code: string,
    msg: string,
    result: any
}

service.interceptors.response.use(function (response: AxiosResponse): AxiosResponse<ResponseResult, any> {
    return response.data
}, function(error) {
    return Promise.reject(error)
})


export default service