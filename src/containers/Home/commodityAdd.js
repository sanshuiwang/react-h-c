import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import c from 'classnames';

import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import {addCommodityFormChange,addCommodityToDB,addCommodityFormConfirm} from './action';
import {THEMBG} from '../../util/materialColor';

const styles = theme => ({
  formControl: {
    display: 'block',
    margin: theme.spacing.unit
  },
  shrinkInputLabel: {
    color: THEMBG
  },
  inputWrapper: {
    width: '300px',
    margin: '0 auto'
  },
  button: {
    margin: theme.spacing.unit,
    float: 'right'
  },
  raised: {
    backgroundColor: THEMBG,
    color: '#FFF'
  }
});

class CommodityAdd extends Component {

  handleChange = (item,event) => {
    let addCommodityFormDataCopy = JSON.parse(JSON.stringify(this.props.addCommodityFormData));
    if(addCommodityFormDataCopy.hasOwnProperty(item)){
      addCommodityFormDataCopy[item] = _.trim(event.target.value);
    }
    new Promise((resolve, reject) => {
      resolve(this.props.addCommodityFormChange(addCommodityFormDataCopy));
    }).then(() => {
      var inputKeysArr = Object.getOwnPropertyNames(addCommodityFormDataCopy);

      for(var i = 1; i < inputKeysArr.length; i++){
        if(addCommodityFormDataCopy[inputKeysArr[i]].length === 0){
          /*存在没填写的输入项则确认按钮就是灰色*/
          this.props.addCommodityFormConfirm(true);
          break;
        }else{
          this.props.addCommodityFormConfirm(false);
        }
      }
    }).catch((error) => console.log("commodityAdd-change::", error));
  };

  handleSubmit(){
    let addCommodityFormDataSubmit = JSON.parse(JSON.stringify(this.props.addCommodityFormData));
    if(addCommodityFormDataSubmit.hasOwnProperty('id') && addCommodityFormDataSubmit['id'].length == 0){
      addCommodityFormDataSubmit['id'] = (new Date()).getTime();
    }

    new Promise((resolve, reject) => {
      resolve(this.props.addCommodityFormChange(addCommodityFormDataSubmit));
    }).then(() => {
      this.props.addCommodityToDB(this.props.addCommodityFormData);
    }).catch((error) => console.log("commodityAdd-submit::", error));

  }

  render() {
    const { classes, addCommodityFormData, addCommodityConfirm } = this.props;

    return (
      <div className={c(classes.inputWrapper,'clearfix')}>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="name-goods" required>商品名称</InputLabel>
            <Input
              id="name-goods"
              className={ 'input-focused' }
              type="text"
              fullWidth
              value={addCommodityFormData['name']}
              onChange={(e) => this.handleChange('name',e)}
            />
            <FormHelperText className={c({'form-helper-text': _.trim(addCommodityFormData['name']).length })} error>请输入商品名称</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="num-goods" required>商品库存</InputLabel>
            <Input
              id="num-goods"
              className={ 'input-focused' }
              type='tel'
              fullWidth
              endAdornment={<InputAdornment position="end">件</InputAdornment>}
              value={addCommodityFormData['num']}
              onChange={(e) => this.handleChange('num',e)}
            />
              <FormHelperText className={c({'form-helper-text': _.trim(addCommodityFormData['num']).length })} error>请输入商品库存</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="house-goods" required>商品库房</InputLabel>
            <Input
              id="house-goods"
              className={ 'input-focused' }
              type='tel'
              fullWidth
              endAdornment={<InputAdornment position="end">#</InputAdornment>}
              value={addCommodityFormData['house']}
              onChange={(e) => this.handleChange('house',e)}
            />
            <FormHelperText className={c({'form-helper-text': _.trim(addCommodityFormData['house']).length })} error>请输入商品库房</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="price-goods" required>商品价格</InputLabel>
            <Input
              id="price-goods"
              className={ 'input-focused' }
              type='tel'
              fullWidth
              endAdornment={<InputAdornment position="end">￥</InputAdornment>}
              value={addCommodityFormData['price']}
              onChange={(e) => this.handleChange('price',e)}
            />
            <FormHelperText className={c({'form-helper-text': _.trim(addCommodityFormData['price']).length })} error>请输入商品价格</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="supplier-goods" required>供应商</InputLabel>
            <Input
              id="supplier-goods"
              className={ 'input-focused' }
              type="text"
              fullWidth
              value={addCommodityFormData['supplier']}
              onChange={(e) => this.handleChange('supplier',e)}
            />
            <FormHelperText className={c({'form-helper-text': _.trim(addCommodityFormData['supplier']).length })} error>必填供应商</FormHelperText>
          </FormControl>
          <Button
            disabled = {addCommodityConfirm}
            raised
            classes={{
              raised: classes.raised
            }}
            className={c(classes.button,'confirm-button')}
            onClick={(e) => this.handleSubmit(e)}
          >确认</Button>
      </div>
    );
  }
}

CommodityAdd.propTypes = {
  classes: PropTypes.object.isRequired,
  addCommodityFormData: PropTypes.object,
  addCommodityConfirm: PropTypes.bool,
  addCommodityFormChange: PropTypes.func,
  addCommodityToDB: PropTypes.func,
  addCommodityFormConfirm: PropTypes.func
};

export default withStyles(styles)(connect((state) => ({
  addCommodityFormData: state.commodity.addCommodityForm,
  addCommodityConfirm: state.commodity.addCommodityConfirm
}),{
  addCommodityFormChange,
  addCommodityToDB,
  addCommodityFormConfirm
})(CommodityAdd));
