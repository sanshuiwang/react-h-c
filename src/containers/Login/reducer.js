import {
  CHANGE_SHOW_PASSWORD,
  LOGIN_SET_AMOUNT
} from './action';

const initLoginAmount ={
  amount: '',
  token: ''
}

/*初始化所有的state数据*/
const initState = {
  loginAmount: initLoginAmount,
  showPassword: false,
};

/*这里的...state语法，是和别人的Object.assign()起同一个作用，合并新旧state。我们这里是没效果的，但是我建议都写上这个哦*/
export default function reducer(state=initState,action){
  switch(action.type){
    case CHANGE_SHOW_PASSWORD:
      return {
        ...state,
        showPassword: action.showPassword
      };
    case LOGIN_SET_AMOUNT:
      return {
        ...state,
        loginAmount: action.loginAmount
      };
    default:
      return state;
  }
}
