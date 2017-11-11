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
      console.log(3000,action.result.id);
      console.log(4000,state);
      return {
        ...state,
        commodityListArr: state.commodityListArr.remove(action.result.id)
      };
    case DELECT_COMMODITY_INFO_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
