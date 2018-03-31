import * as Types from "../action-types"
//goods:添加入购物车的商品,judge:判断是否是从其他地方条件的相同商品
//theNum:记录商品的总数
//这里 goods里每一个商品对象都给添加了一个num  --- num:这个是记录当前商品的数量
function cart(state={goods:[],judge:null,theNum:0,priceNum:0},action) {
    switch (action.type){
        //添加商品
        case Types.ADD_TO :
            //每当添加一个商品的时候给对象一个值  代表这是商品的当前数量
            action.goods.num = 1;
            //放入到数组中  然后渲染到页面
            state.goods.unshift(action.goods);
            state = {...state};
            return state;
        //删除商品
        case Types.REMOVE_DELETE:
            //过滤掉删除的商品
            state.goods = state.goods.filter(item=>{
                return item.goodsId!==action.goodsId;
            });
            //这里要注意:需要给对象重新赋一个地址值否者商品不会删除
            //当商品剩余最后一个的时候,如果删除了,需要修改商品总数的值,这里 减一及可
            return {...state,goods:state.goods,theNum:--state.theNum};
        //控制商品来源    做相应的处理
        case Types.PROMOTE:
            //这里做一些处理  正对我们之前设置对的num对商品的数量控制
            state.goods = state.goods.map(item=>{
                if (item.goodsId===action.goodsId){
                    //当发现是我们点击的商品时  给num计数器加一
                    item.num++;
                }
                //返回当前对象  map返回的是数组
                return item;
            });

            //给商品添加总和
           /* state.priceNum = state.goods.reduce((prev,item)=>{
                return prev.price*prev.num+item.price*item.num
            });*/

            //这里我们需要传递一些值   当judge为true时代表是从商品也添加的数据并且是相同商品只需要给计数器num加一即可
            //如果传的值为false,那么就没有必要传当前点击的ID了 这样数字就不会加 ,也就是说这里当是false的时候只是为了当跳转路由的时候不执行添加函数,这样redux的商品添加就不会执行,如果传了ID 那么数量就加一了 多了很多麻烦 因为这并不是客户想要的
            if (action.judge){
                //在这里需要记录商品的总和 当从其他也添加商品的时候 用一个属性记录商品的数量,这个数量和num不同,是记录的总数
                state = {...state,goods:state.goods,judge:action.judge,theNum:++state.theNum};
            }else{
                state = {...state,goods:state.goods,judge:action.judge};
            }
            break;
        //添加商品数量
        case Types.ADD_GOODS:
            //添加商品  通过传递过来的ID 值来判断给那个商品的添加数量
            state.goods = state.goods.map(item=>{
                if (item.goodsId===action.goodsId){
                    //添加商品的数量
                    item.num++;
                }
                //返回商品
                return item;
            });
            //给商品添加总和
           /* state.priceNum = state.goods.reduce((prev,item)=>{
                return prev.price*prev.num+item.price*item.num
            });*/

            //这里同样 必须返回一个新的地址值来渲染页面 JSX语法的DOM比对结果会触发页面重新渲染
            //这里添加商品的时候同样需要记录商品的总和
            state = {...state,goods:state.goods,theNum:++state.theNum};
            break;
        //减少商品数量
        case Types.REMOVE_GOODS:
            //同上 这里是为了减少商品的数量 通过ID 比对商品
            state.goods = state.goods.map(item=>{
                if (item.goodsId===action.goodsId){
                    //减少数量
                    item.num--;
                }
                //返回商品
                return item;
            });
            //给商品添加总和
           /* state.priceNum = state.goods.reduce((prev,item)=>{
                return prev.price*prev.num+item.price*item.num
            });*/
            //放回新的地址值 刷新相应的页面DOM树
            //这里删除商品的时候 需要减少商品的总和
            state = {...state,goods:state.goods,theNum:--state.theNum};
            break;
    }
    return state;
}
export default cart