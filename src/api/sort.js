import axios from "./index"

export function querySort(type) {
    return axios.get(`./api/detail?type=${type}`)
}
export function ListSort(type,goodsId) {
    return axios.get(`./api/detail?type=${type}&goodsId=${goodsId}`)
}