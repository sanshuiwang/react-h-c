import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';

import c from 'classnames';

import {
  changeShowPassword,
  loginSetAmount
} from './action';

import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import PermIdentity from '@material-ui/icons/PermIdentity';
import Button from 'material-ui/Button';
import {THEMBG} from '../../util/materialColor';

import './styles.scss';

import history from '../../router/history/history';

const styles = theme => ({
  formWrapper:{
    width: '260px',
    margin: '160px auto 0'
  },
  formControl: {
    display: 'block',
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  inputIcon: {
    margin: theme.spacing.unit,
  },
  button: {
    margin: theme.spacing.unit,
  },
  raised: {
    width: '244px',
    color: '#FFF',
    boxShadow: `0px 1px 5px 0px ${THEMBG}, 0px 2px 2px 0px ${THEMBG}, 0px 3px 1px -2px ${THEMBG}`,
    backgroundColor: THEMBG
  }
});

class Login extends Component {
  constructor(props) {
   super(props);
   this.state = {
     amount: '',
     password: ''
   }
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  }

  handleClickShowPasssword = () => {
    let showPassword = this.props.showPassword;
    this.props.changeShowPassword(!showPassword);
  }

  handleChangeInput = (prop,event) => {
    this.setState({[prop]: event.target.value});
  }

  handleSubmitLogin = (event) => {
    this.props.loginSetAmount({amount: 'sanshuiwang', token: 'sanshuiwang-123'})
  }

  componentWillUpdate(nextProps, nextState){
    if(nextProps.loginAmount !== this.props.loginAmount && nextProps.loginAmount.token){
      history.push('/home');
    }
  }
  render() {
    const { classes,showPassword } = this.props;
    return (<div>
        <Helmet>
          <title>登录</title>
        </Helmet>
        <div className={classes.formWrapper}>
          <FormControl className={classes.formControl}>
           <InputLabel htmlFor="amount-user">用户名</InputLabel>
           <Input
             id="amount-user"
             type="text"
             value={this.state.amount}
             fullWidth
             onChange={(event) => this.handleChangeInput('amount',event)}
             endAdornment={
               <InputAdornment position="end">
                  <PermIdentity style={{width:'48px'}}/>
               </InputAdornment>
             }
           />
          </FormControl>
          <FormControl className={classes.formControl}>
           <InputLabel htmlFor="amount-password">密码</InputLabel>
           <Input
             id="amount-password"
             type={showPassword ? 'text' : 'password'}
             value={this.state.password}
             onChange={(event) => this.handleChangeInput('password',event)}
             fullWidth
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   onClick={this.handleClickShowPasssword}
                   onMouseDown={this.handleMouseDownPassword}
                 >
                   {showPassword ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
               </InputAdornment>
             }
           />
          </FormControl>
          <Button
            variant='raised'
            className={c(classes.button,'confirm-button')}
            classes={{
              raised: classes.raised
            }}
            onClick={(event) => this.handleSubmitLogin(event)}
          >
           LOGIN
          </Button>
        </div>
     </div>);
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect((state) => ({
  loginAmount: state.login.loginAmount,
  showPassword: state.login.showPassword
}),{
  changeShowPassword,
  loginSetAmount
})(Login));
