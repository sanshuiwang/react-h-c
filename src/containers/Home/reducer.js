import {
  GET_COMMODITY_INFO_REQUEST,
  GET_COMMODITY_INFO_SUCCESS,
  GET_COMMODITY_INFO_FAIL,
  DELECT_COMMODITY_INFO_REQUEST,
  DELECT_COMMODITY_INFO_SUCCESS,
  DELECT_COMMODITY_INFO_FAIL,
  COMMODITY_ALERT_DIALOG,
  COMMODITY_FORM,
  ADD_COMMODITY_TO_DB_REQUEST,
  ADD_COMMODITY_TO_DB_SUCCESS,
  ADD_COMMODITY_TO_DB_FAIL,
  ADD_COMMODITY_FORM_CONFIRM,
  ADD_SUC_SNACKBAR_CHANGE
} from './action';

/*删除商品的弹层数据*/
const initAlertDialog = {
  id: '',
  open: false,
  title: '',
  content: ''
}

/*增加商品的表单数据*/
const initCommodityForm = {
  id: '',
  name: '',
  num: '',
  house: '',
  price: '',
  supplier: ''
}

/*增加商品成功后的提示*/
const initSnackbar = {
  key: '',
  open: false,
  transition: '',
  messageId: '',
  message: ''
}

/*初始化所有的state数据*/
const initState = {
  commodityListArr: [],
  alertDialog: initAlertDialog,
  commodityForm: initCommodityForm,
  addCommodityConfirm: true,
  addSucSnackbar: initSnackbar
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
    case COMMODITY_ALERT_DIALOG:
      return {
        ...state,
        alertDialog: action.alertDialogData
      };
    case COMMODITY_FORM:
      return {
        ...state,
        commodityForm: action.commodityFormData
      };
    case ADD_COMMODITY_TO_DB_REQUEST:
      return {
        ...state
      };
    case ADD_COMMODITY_TO_DB_SUCCESS:
      let commodityListArrCopy = state.commodityListArr.slice();
      commodityListArrCopy.unshift(state.commodityForm);
      let addSucSnackbarCopy = JSON.parse(JSON.stringify(state.addSucSnackbar));
      addSucSnackbarCopy['key'] = (new Date()).getTime();
      addSucSnackbarCopy['open'] = true;
      addSucSnackbarCopy['transition'] = 'TransitionRight';
      addSucSnackbarCopy['messageId'] = 'message-id-'+addSucSnackbarCopy['key'];
      addSucSnackbarCopy['message'] = `商品 ${state.commodityForm.name} 添加成功`;

      return {
        ...state,
        commodityListArr: commodityListArrCopy,
        commodityForm: initCommodityForm,
        addSucSnackbar: addSucSnackbarCopy
      };
    case ADD_COMMODITY_TO_DB_FAIL:
      return {
        ...state
      };
    case ADD_COMMODITY_FORM_CONFIRM:
      return {
        ...state,
        addCommodityConfirm: action.addCommodityFormConfirmData
      };
    case ADD_SUC_SNACKBAR_CHANGE:
      return {
        ...state,
        addSucSnackbar: action.addSucSnackbarData
      };
    default:
      return state;
  }
}
