export const GET_COMMODITY_INFO_REQUEST = "home/GET_COMMODITY_INFO_REQUEST";
export const GET_COMMODITY_INFO_SUCCESS = "home/GET_COMMODITY_INFO_SUCCESS";
export const GET_COMMODITY_INFO_FAIL = "home/GET_COMMODITY_INFO_FAIL";

export function getCommodityList(){
  return {
    types: [GET_COMMODITY_INFO_REQUEST,GET_COMMODITY_INFO_SUCCESS,GET_COMMODITY_INFO_FAIL],
    promise: client => client.get(`http://localhost:8080/api/commodity.json`)
  }
}
