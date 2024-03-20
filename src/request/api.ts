import service from "./index";
interface ResponseResult {
    code: string,
    msg: string,
    result: any
}
export async function getHomeHot(): Promise<ResponseResult> {
    return await service({
        method: "get",
        url: "/home/hot/mutli"
    })
}