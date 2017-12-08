import {PATH} from '../../util/config';

export const GET_COMMODITY_INFO_REQUEST = "home/GET_COMMODITY_INFO_REQUEST";
export const GET_COMMODITY_INFO_SUCCESS = "home/GET_COMMODITY_INFO_SUCCESS";
export const GET_COMMODITY_INFO_FAIL = "home/GET_COMMODITY_INFO_FAIL";

export const DELECT_COMMODITY_INFO_REQUEST = "home/DELECT_COMMODITY_INFO_REQUEST";
export const DELECT_COMMODITY_INFO_SUCCESS = "home/DELECT_COMMODITY_INFO_SUCCESS";
export const DELECT_COMMODITY_INFO_FAIL = "home/DELECT_COMMODITY_INFO_FAIL";

export const DELECT_COMMODITY_ALERT_DIALOG = "home/DELECT_COMMODITY_ALERT_DIALOG";

export const ADD_COMMODITY_FORM = "home/ADD_COMMODITY_FORM";

export const ADD_COMMODITY_TO_DB_REQUEST = "home/ADD_COMMODITY_TO_DB_REQUEST";
export const ADD_COMMODITY_TO_DB_SUCCESS = "home/ADD_COMMODITY_TO_DB_SUCCESS";
export const ADD_COMMODITY_TO_DB_FAIL = "home/ADD_COMMODITY_TO_DB_FAIL";

export const ADD_COMMODITY_FORM_CONFIRM = "home/ADD_COMMODITY_FORM_CONFIRM";

export const ADD_SUC_SNACKBAR_CHANGE = "home/ADD_SUC_SNACKBAR_CHANGE";

export const UPDATE_COMMODITY_GET_INFO_REQUEST = "home/UPDATE_COMMODITY_GET_INFO_REQUEST";
export const UPDATE_COMMODITY_GET_INFO_SUCCESS = "home/UPDATE_COMMODITY_GET_INFO_SUCCESS";
export const UPDATE_COMMODITY_GET_INFO_FAIL = "home/UPDATE_COMMODITY_GET_INFO_FAIL";

export const UPDATE_ALERT_DIALOG_CHANGE = "home/UPDATE_ALERT_DIALOG_CHANGE";

export const UPDATE_COMMODITY_FORM = "home/UPDATE_COMMODITY_FORM";

export const UPDATE_COMMODITY_INFO_REQUEST = "home/UPDATE_COMMODITY_INFO_REQUEST";
export const UPDATE_COMMODITY_INFO_SUCCESS = "home/UPDATE_COMMODITY_INFO_SUCCESS";
export const UPDATE_COMMODITY_INFO_FAIL = "home/UPDATE_COMMODITY_INFO_FAIL";

export const SEARCH_INPUT_TEXT_CHANG = "home/SEARCH_INPUT_TEXT_CHANG";

export const SEARCH_COMMODITY_INFO_REQUEST = "home/SEARCH_COMMODITY_INFO_REQUEST";
export const SEARCH_COMMODITY_INFO_SUCCESS = "home/SEARCH_COMMODITY_INFO_SUCCESS";
export const SEARCH_COMMODITY_INFO_FAIL = "home/SEARCH_COMMODITY_INFO_FAIL";

export const SEARCH_COMMODITY_LIST_ARR_CHANGE = "home/SEARCH_COMMODITY_LIST_ARR_CHANGE";

export function getCommodityList(){
  return {
    types: [GET_COMMODITY_INFO_REQUEST,GET_COMMODITY_INFO_SUCCESS,GET_COMMODITY_INFO_FAIL],
    promise: client => client.get(`${PATH}/commodityList`)
  }
}

export function delectCommodityById(id){
  return {
    types: [DELECT_COMMODITY_INFO_REQUEST,DELECT_COMMODITY_INFO_SUCCESS,DELECT_COMMODITY_INFO_FAIL],
    promise: client => client.delete(`${PATH}/commodityList/${id}`),
    id: id,
    afterSuccess:(dispatch,getState,response)=>{
      /*请求成功后执行的函数,关闭弹层*/
      let stateData = getState();
      let stateCommodity = JSON.parse(JSON.stringify(stateData.commodity.delAlertDialog));
      stateCommodity.open = false;
      dispatch(delectCommodityAlertDialog(stateCommodity));
    }
  }
}

export function delectCommodityAlertDialog(alertDialogData) {
  return {type: DELECT_COMMODITY_ALERT_DIALOG, alertDialogData: alertDialogData}
}

export function addCommodityFormChange(addCommodityFormData){
  return {type: ADD_COMMODITY_FORM, addCommodityFormData: addCommodityFormData}
}

export function addCommodityFormConfirm(addCommodityFormConfirmData){
  return {type: ADD_COMMODITY_FORM_CONFIRM,addCommodityFormConfirmData: addCommodityFormConfirmData}
}

export function addCommodityToDB(addCommodityFormData){
  return {
    types: [ADD_COMMODITY_TO_DB_REQUEST,ADD_COMMODITY_TO_DB_SUCCESS,ADD_COMMODITY_TO_DB_FAIL],
    promise: client => client.post(`${PATH}/commodityList`,addCommodityFormData)
  }
}

export function addSucSnackbarChange(addSucSnackbarData) {
  return {type: ADD_SUC_SNACKBAR_CHANGE,addSucSnackbarData: addSucSnackbarData}
}

export function updateCommodityAlertDialog(updateDialogData) {
  /*通过id获取要进行更新的数据*/
  return {
    types: [UPDATE_COMMODITY_GET_INFO_REQUEST,UPDATE_COMMODITY_GET_INFO_SUCCESS,UPDATE_COMMODITY_GET_INFO_FAIL],
    promise: client => client.get(`${PATH}/commodityList/${updateDialogData.id}`),
    updateDialogData: updateDialogData
  }
  /*获取成功后，显示弹层数据以及form*/
}

export function updateAlertDialogChange(updateAlertDialog){
  return {type: UPDATE_ALERT_DIALOG_CHANGE,updateAlertDialog: updateAlertDialog}
}

export function updateCommodityFormChange(updateCommodityForm){
  return {type: UPDATE_COMMODITY_FORM, updateCommodityForm: updateCommodityForm}
}

export function updateCommodityFormToDB(updateCommodityForm){
  return {
    types: [UPDATE_COMMODITY_INFO_REQUEST,UPDATE_COMMODITY_INFO_SUCCESS,UPDATE_COMMODITY_INFO_FAIL],
    promise: client => client.put(`${PATH}/commodityList/${updateCommodityForm.id}`,updateCommodityForm)
  }
}

export function searchInputTextChange(searchInputText){
  return {type: SEARCH_INPUT_TEXT_CHANG,searchInputText: searchInputText}
}

export function searchGoods(searchInputText){
  return {
    types: [SEARCH_COMMODITY_INFO_REQUEST,SEARCH_COMMODITY_INFO_SUCCESS,SEARCH_COMMODITY_INFO_FAIL],
    promise: client => client.get(`${PATH}/commodityList?name_like=${searchInputText}&_sort=id&_order=desc`)
  }
}

export function searchCommodityListArrChange(searchCommodityListArr){
  return {type: SEARCH_COMMODITY_LIST_ARR_CHANGE,searchCommodityListArr: searchCommodityListArr}
}
