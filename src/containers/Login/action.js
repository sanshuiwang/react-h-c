//展示 密码输入框 是否为明码
export const CHANGE_SHOW_PASSWORD = "login/CHANGE_SHOW_PASSWORD";

//登录成功，设置login的token和amount
export const LOGIN_SET_AMOUNT = 'login/LOGIN_SET_AMOUNT';

export function changeShowPassword(showPassword){
  return {type: CHANGE_SHOW_PASSWORD, showPassword: showPassword}
}

export function loginSetAmount(loginAmount){
  return {type: LOGIN_SET_AMOUNT , loginAmount: loginAmount}
}
