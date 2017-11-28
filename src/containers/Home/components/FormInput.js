import React,{Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import c from 'classnames';

import {THEMBG} from '../../../util/materialColor';

import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';


const styles = theme => ({
  formControl: {
    display: 'block',
    margin: theme.spacing.unit
  },
  shrinkInputLabel: {
    color: THEMBG
  }
});

class FormInput extends Component {
  render() {
    const {classes,FormInputData,handleChange,idNoDisplay} = this.props;
    return (
      <div>
        <FormControl className={classes.formControl} disabled style={{ display: (idNoDisplay?'none':'block') }}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="name-id" required>ID</InputLabel>
          <Input
            id="name-id"
            className={ 'input-focused' }
            type="text"
            fullWidth
            value={FormInputData['id']}
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="name-goods" required>商品名称</InputLabel>
          <Input
            id="name-goods"
            className={ 'input-focused' }
            type="text"
            fullWidth
            value={FormInputData['name']}
            onChange={(e) => handleChange('name',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(FormInputData['name']).length })} error>请输入商品名称</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="num-goods" required>商品库存</InputLabel>
          <Input
            id="num-goods"
            className={ 'input-focused' }
            type='tel'
            fullWidth
            endAdornment={<InputAdornment position="end">件</InputAdornment>}
            value={FormInputData['num']}
            onChange={(e) => handleChange('num',e)}
          />
            <FormHelperText className={c({'form-helper-text': _.trim(FormInputData['num']).length })} error>请输入商品库存</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="house-goods" required>商品库房</InputLabel>
          <Input
            id="house-goods"
            className={ 'input-focused' }
            type='tel'
            fullWidth
            endAdornment={<InputAdornment position="end">#</InputAdornment>}
            value={FormInputData['house']}
            onChange={(e) => handleChange('house',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(FormInputData['house']).length })} error>请输入商品库房</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="price-goods" required>商品价格</InputLabel>
          <Input
            id="price-goods"
            className={ 'input-focused' }
            type='tel'
            fullWidth
            endAdornment={<InputAdornment position="end">￥</InputAdornment>}
            value={FormInputData['price']}
            onChange={(e) => handleChange('price',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(FormInputData['price']).length })} error>请输入商品价格</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="supplier-goods" required>供应商</InputLabel>
          <Input
            id="supplier-goods"
            className={ 'input-focused' }
            type="text"
            fullWidth
            value={FormInputData['supplier']}
            onChange={(e) => handleChange('supplier',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(FormInputData['supplier']).length })} error>必填供应商</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

FormInput.propTypes = {
  classes: PropTypes.object,
  FormInputData: PropTypes.object,
  handleChange: PropTypes.func
}

export default withStyles(styles)(FormInput);
