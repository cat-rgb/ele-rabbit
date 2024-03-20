import service from "./index";
interface ResponseResult<T = any> {
    code: string
    msg: string
    result: T
}

export async function getHomeBanner(params: {distributionSite: '1'|'2'}): Promise<ResponseResult> {
    return await service({
        method: "get",
        url: "/home/banner",
        params
    })
}

export async function getHomeCategory(): Promise<ResponseResult> {
    return await service({
        method: "get",
        url: "/home/category/mutli"
    })
}

export async function getHomeHot(): Promise<ResponseResult> {
    return await service({
        method: "get",
        url: "/home/hot/mutli"
    })
}

export async function getHomeNew(params: {limit?: number}): Promise<ResponseResult> {
    return await service({
        method: "get",
        url: "/home/new",
        params
    })
}

export async function getHomeLike<T>(params: {page: number, pageSize: number}): Promise<ResponseResult<T>> {
    return await service({
        method: "get",
        url: "/home/goods/guessLike",
        params
    })
}

export async function getGoodsDetail<T>(params: {id: number}): Promise<ResponseResult<T>> {
    return await service({
        method: "get",
        url: "/goods",
        params
    })
}

