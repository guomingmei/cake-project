import axios from "axios"

axios.defaults.baseURL = "http://localhost:8080";

axios.interceptors.response.use((val)=>val.data);

axios.defaults.withCredentials = true;

//请求数据的接口

export let getCartDetail = () => {
    return axios.get("/api/detail",{params:{type:"hot",goodsId:1}})
};

export let postRegister = (num,msg) => {
    return axios.post("/api/num",{num,msg})
};

