
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

export let getCartDetail = (item) => {
    return axios.get("/api/detail",{params:item})
};

export let postRegister = (num,msg) => {
    return axios.post("/api/num",{num,msg})
};
///api/center
export let getCenter = () => {
   return axios.get("/api/center")
};

