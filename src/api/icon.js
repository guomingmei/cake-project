
import axios from './index.js'
//请求数据的接口
export function samll(){
    return  axios.get('/api/banner');
}

export function homeDetail(){
    return axios.get('/api/detail?type=hot')
}
export function textDetail(){
    return axios.get('/api/community')
}

export let getCartDetail = () => {
    return axios.get("/api/detail",{params:{type:"hot",goodsId:1}})
};

export let postRegister = (num,msg) => {
    return axios.post("/api/num",{num,msg})
};

