import axios from "./index"

export function querySort(type) {
    return axios.get(`./api/detail?type=${type}`)
}