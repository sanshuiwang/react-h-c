import {getCommodityList} from '../containers/Home/action';

import store from './store';

//打印初始状态
console.log(store.getState());

//每次state更新时，打印日志
//注意subscribe()返回一个函数用来注销监听器
let unsubscribe = store.subscribe(() => console.log(store.getState()));

//发起一系列action
store.dispatch(delectCommodityList(2));

//停止监听state更新
unsubscribe();
