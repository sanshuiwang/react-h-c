import {PATH} from '../../util/config';

export const GET_COMMODITY_INFO_REQUEST = "home/GET_COMMODITY_INFO_REQUEST";
export const GET_COMMODITY_INFO_SUCCESS = "home/GET_COMMODITY_INFO_SUCCESS";
export const GET_COMMODITY_INFO_FAIL = "home/GET_COMMODITY_INFO_FAIL";

export const DELECT_COMMODITY_INFO_REQUEST = "home/DELECT_COMMODITY_INFO_REQUEST";
export const DELECT_COMMODITY_INFO_SUCCESS = "home/DELECT_COMMODITY_INFO_SUCCESS";
export const DELECT_COMMODITY_INFO_FAIL = "home/DELECT_COMMODITY_INFO_FAIL";

export const DELECT_COMMODITY_ALERT_DIALOG = "home/DELECT_COMMODITY_ALERT_DIALOG";

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
    id: id
  }
}

export function delectCommodityAlertDialog(alertDialogData) {
  return {type: DELECT_COMMODITY_ALERT_DIALOG, alertDialogData: alertDialogData}
}
