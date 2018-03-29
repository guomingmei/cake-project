

//请求数据的接口

export let getCartDetail = () => {
    return axios.get("/api/detail",{params:{type:"hot",goodsId:1}})
};

export let postRegister = (num,msg) => {
    return axios.post("/api/num",{num,msg})
};

