import {
  GET_COMMODITY_INFO_REQUEST,
  GET_COMMODITY_INFO_SUCCESS,
  GET_COMMODITY_INFO_FAIL,
  DELECT_COMMODITY_INFO_REQUEST,
  DELECT_COMMODITY_INFO_SUCCESS,
  DELECT_COMMODITY_INFO_FAIL,
  DELECT_COMMODITY_ALERT_DIALOG,
  ADD_COMMODITY_FORM,
  ADD_COMMODITY_TO_DB_REQUEST,
  ADD_COMMODITY_TO_DB_SUCCESS,
  ADD_COMMODITY_TO_DB_FAIL,
  ADD_COMMODITY_FORM_CONFIRM,
  ADD_SUC_SNACKBAR_CHANGE,
  UPDATE_COMMODITY_GET_INFO_REQUEST,
  UPDATE_COMMODITY_GET_INFO_SUCCESS,
  UPDATE_COMMODITY_GET_INFO_FAIL,
  UPDATE_ALERT_DIALOG_CHANGE,
  UPDATE_COMMODITY_FORM,
  UPDATE_COMMODITY_INFO_REQUEST,
  UPDATE_COMMODITY_INFO_SUCCESS,
  UPDATE_COMMODITY_INFO_FAIL,
  SEARCH_INPUT_TEXT_CHANG,
  SEARCH_COMMODITY_INFO_REQUEST,
  SEARCH_COMMODITY_INFO_SUCCESS,
  SEARCH_COMMODITY_INFO_FAIL,
  SEARCH_COMMODITY_LIST_ARR_CHANGE
} from './action';

/*删除商品的弹层数据*/
const initAlertDialog = {
  id: '',
  open: false,
  title: '',
  content: '',
  disabledConfirm: false
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
  delAlertDialog: initAlertDialog,
  addCommodityForm: initCommodityForm,
  addCommodityConfirm: true,
  addSucSnackbar: initSnackbar,
  updateAlertDialog: initAlertDialog,
  updateCommodityForm: initCommodityForm,
  searchInputText: '',
  searchCommodityListArr: []
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
        delAlertDialog: action.alertDialogData
      };
    case ADD_COMMODITY_FORM:
      return {
        ...state,
        addCommodityForm: action.addCommodityFormData
      };
    case ADD_COMMODITY_TO_DB_REQUEST:
      return {
        ...state
      };
    case ADD_COMMODITY_TO_DB_SUCCESS:
      let commodityListArrCopy = state.commodityListArr.slice();
      commodityListArrCopy.unshift(state.addCommodityForm);
      let addSucSnackbarCopy = JSON.parse(JSON.stringify(state.addSucSnackbar));
      addSucSnackbarCopy['key'] = (new Date()).getTime();
      addSucSnackbarCopy['open'] = true;
      addSucSnackbarCopy['transition'] = 'TransitionRight';
      addSucSnackbarCopy['messageId'] = 'message-id-'+addSucSnackbarCopy['key'];
      addSucSnackbarCopy['message'] = `商品 ${state.addCommodityForm.name} 添加成功`;

      return {
        ...state,
        commodityListArr: commodityListArrCopy,
        addCommodityForm: initCommodityForm,
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
    case UPDATE_COMMODITY_GET_INFO_REQUEST:
      return {
        ...state
      };
    case UPDATE_COMMODITY_GET_INFO_SUCCESS:
      return {
        ...state,
        updateAlertDialog: action.updateDialogData,
        updateCommodityForm: action.result.data
      };
    case UPDATE_COMMODITY_GET_INFO_FAIL:
      return {
        ...state
      };
    case UPDATE_ALERT_DIALOG_CHANGE:
      return {
        ...state,
        updateAlertDialog: action.updateAlertDialog
      };
    case UPDATE_COMMODITY_FORM:
      return {
        ...state,
        updateCommodityForm: action.updateCommodityForm
      };
    case UPDATE_COMMODITY_INFO_REQUEST:
      return {
        ...state
      };
    case UPDATE_COMMODITY_INFO_SUCCESS:
      let commodityListArrUpdateCopy = state.commodityListArr.slice();
      let index;
      for (let i = 0; i < commodityListArrUpdateCopy.length; i++) {
        if(commodityListArrUpdateCopy[i].id === state.updateCommodityForm.id){
          index = i;
          break;
        };
      }
      commodityListArrUpdateCopy.splice(index,1,state.updateCommodityForm);

      let updateAlertDialogCopy = JSON.parse(JSON.stringify(state.updateAlertDialog));
      if(updateAlertDialogCopy['open']) {updateAlertDialogCopy['open'] = false};
      return {
        ...state,
        commodityListArr: commodityListArrUpdateCopy,
        updateAlertDialog: updateAlertDialogCopy
      };
    case UPDATE_COMMODITY_INFO_FAIL:
      return {
        ...state
      };
    case SEARCH_INPUT_TEXT_CHANG:
      return {
        ...state,
        searchInputText: action.searchInputText
      };
    case SEARCH_COMMODITY_INFO_REQUEST:
      return {
        ...state,
      };
    case SEARCH_COMMODITY_INFO_SUCCESS:
    console.log(2000,action);
      return {
        ...state,
        searchCommodityListArr: action.result.data
      };
    case SEARCH_COMMODITY_INFO_FAIL:
    console.log(3000,action);
      return {
        ...state,
      };
    case SEARCH_COMMODITY_LIST_ARR_CHANGE:
      return {
        ...state,
        searchCommodityListArr: action.searchCommodityListArr
      };
    default:
      return state;
  }
}
