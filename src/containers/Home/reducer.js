import {
  GET_COMMODITY_INFO_REQUEST,
  GET_COMMODITY_INFO_SUCCESS,
  GET_COMMODITY_INFO_FAIL,
  DELECT_COMMODITY_INFO_REQUEST,
  DELECT_COMMODITY_INFO_SUCCESS,
  DELECT_COMMODITY_INFO_FAIL,
  DELECT_COMMODITY_ALERT_DIALOG,
  ADD_COMMODITY_FORM
} from './action';

const initAlertDialog = {
  id: '',
  open: false,
  title: '',
  content: ''
}
const initAddCommodityForm = {
  id: '',
  name: '',
  num: '',
  house: '',
  price: '',
  supplier: ''
}

const initState = {
  commodityListArr: [],
  alertDialog: initAlertDialog,
  addCommodityForm: initAddCommodityForm
};

/*这里的...state语法，是和别人的Object.assign()起同一个作用，合并新旧state。我们这里是没效果的，但是我建议都写上这个哦*/
export default function reducer(state=initState,action){
  switch(action.type){
    case GET_COMMODITY_INFO_REQUEST:
      return {
        ...state
      };
    case GET_COMMODITY_INFO_SUCCESS:
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
      let commodityListDeleted = state.commodityListArr.slice(0);
      commodityListDeleted.forEach(function(ele,index){
        if (ele.id === action.id) {
          commodityListDeleted.splice(index,1);
        }
      });
      return {
        ...state,
        commodityListArr: commodityListDeleted
      };
    case DELECT_COMMODITY_INFO_FAIL:
      return {
        ...state
      };
    case DELECT_COMMODITY_ALERT_DIALOG:
      return {
        ...state,
        alertDialog: action.alertDialogData
      };
    case ADD_COMMODITY_FORM:
      return {
        ...state,
        addCommodityForm: action.addCommodityFormData
      };
    case DELECT_COMMODITY_INFO_REQUEST:
      return {
        ...state
      };
    case DELECT_COMMODITY_INFO_SUCCESS:
      return {
        ...state,
        addCommodityForm: initAddCommodityForm
      };
    case DELECT_COMMODITY_INFO_FAIL:
      return {
        ...state
      };
    default:
      return state;
  }
}
