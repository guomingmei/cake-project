import axios from './index'
export function samll(){
return  axios.get('/api/banner');
}

export function homeDetail(){
    return axios.get('/api/detail?type=hot')
}
export function textDetail(){
    return axios.get('/api/community')
}

