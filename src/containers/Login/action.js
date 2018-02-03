//展示 密码输入框 是否为明码
export const CHANGE_SHOW_PASSWORD = "login/CHANGE_SHOW_PASSWORD";

export function changeShowPassword(showPassword){
  return {type: CHANGE_SHOW_PASSWORD, showPassword: showPassword}
}
