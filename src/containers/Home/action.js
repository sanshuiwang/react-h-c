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
      let stateCommodity = JSON.parse(JSON.stringify(stateData.commodity.alertDialog));
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

export function addCommodityToDB(addCommodityFormData){
  return {
    types: [ADD_COMMODITY_TO_DB_REQUEST,ADD_COMMODITY_TO_DB_SUCCESS,ADD_COMMODITY_TO_DB_FAIL],
    promise: client => client.post(`${PATH}/commodityList`,addCommodityFormData)
  }
}
