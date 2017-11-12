import {
  GET_COMMODITY_INFO_REQUEST,
  GET_COMMODITY_INFO_SUCCESS,
  GET_COMMODITY_INFO_FAIL,
  DELECT_COMMODITY_INFO_REQUEST,
  DELECT_COMMODITY_INFO_SUCCESS,
  DELECT_COMMODITY_INFO_FAIL
} from './action';

const initState = {
  commodityListArr: []
};

/*这里的...state语法，是和别人的Object.assign()起同一个作用，合并新旧state。我们这里是没效果的，但是我建议都写上这个哦*/
export default function reducer(state=initState,action){
  switch(action.type){
    case GET_COMMODITY_INFO_REQUEST:
      return {
        ...state
      };
    case GET_COMMODITY_INFO_SUCCESS:
      console.log(1000,action.result);
      return {
        ...state,
        commodityListArr: action.result.data
      };
    case GET_COMMODITY_INFO_FAIL:
      return {
        ...state
      };
    case DELECT_COMMODITY_INFO_REQUEST:
      return {
        ...state
      };
    case DELECT_COMMODITY_INFO_SUCCESS:
      console.log(3000,action);
      console.log(30001,action.result);
      let commodityListDeleted = state.commodityListArr.slice(0);
      console.log(30002,commodityListDeleted);
      commodityListDeleted.forEach(function(ele,index){
        if (ele.id === action.id) {
          commodityListDeleted.splice(index,1);
        }
      });
      console.log(30003, commodityListDeleted);
      return {
        ...state,
        commodityListArr: commodityListDeleted
      };
      // state.commodityListArr.splice(action.result.id - 1,1);
      // return {
      //   ...state,
      //   commodityListArr: state.commodityListArr
      // };
    case DELECT_COMMODITY_INFO_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
