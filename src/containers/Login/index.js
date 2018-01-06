import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Helmet} from "react-helmet";
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Visibility from 'material-ui-icons/Visibility';
import VisibilityOff from 'material-ui-icons/VisibilityOff';
import PermIdentity from 'material-ui-icons/PermIdentity';
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
  }
});

class Login extends Component {
  constructor(props) {
   super(props);
   this.state = {
     amount: '',
     password: '',
     weight: '',
     showPassword: false,
   };
  }

  handleChange = prop => event => {
     this.setState({ [prop]: event.target.value });
  };

   handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPasssword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  render() {
    const { classes } = this.props;
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
             onChange={this.handleChange('amount')}
             fullWidth
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
             type={this.state.showPassword ? 'text' : 'password'}
             value={this.state.password}
             fullWidth
             onChange={this.handleChange('password')}
             endAdornment={
               <InputAdornment position="end">
                 <IconButton
                   onClick={this.handleClickShowPasssword}
                   onMouseDown={this.handleMouseDownPassword}
                 >
                   {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                 </IconButton>
               </InputAdornment>
             }
           />
          </FormControl>
        </div>
     </div>);
  }
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Login);
