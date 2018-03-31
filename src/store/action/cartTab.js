import * as Types from "../action-types"
let action = {
    add(goods){
        return {type:Types.ADD_TO,goods}
    },
    deleteItem(goodsId){
        return {type:Types.REMOVE_DELETE,goodsId}
    },
    promote(judge,id){
        return {type:Types.PROMOTE,judge,goodsId:id}
    },
    addGoodsId(goodsId){
        return {type:Types.ADD_GOODS,goodsId}
    },
    removeGoodsId(goodsId){
        return {type:Types.REMOVE_GOODS,goodsId}
    }
};
export default action