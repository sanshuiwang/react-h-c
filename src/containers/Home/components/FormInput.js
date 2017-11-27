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
    const {classes,commodityFormData,handleChange} = this.props;
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="name-goods" required>商品名称</InputLabel>
          <Input
            id="name-goods"
            className={ 'input-focused' }
            type="text"
            fullWidth
            value={commodityFormData['name']}
            onChange={(e) => handleChange('name',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(commodityFormData['name']).length })} error>请输入商品名称</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="num-goods" required>商品库存</InputLabel>
          <Input
            id="num-goods"
            className={ 'input-focused' }
            type='tel'
            fullWidth
            endAdornment={<InputAdornment position="end">件</InputAdornment>}
            value={commodityFormData['num']}
            onChange={(e) => handleChange('num',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(commodityFormData['num']).length })} error>请输入商品库存</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="house-goods" required>商品库房</InputLabel>
          <Input
            id="house-goods"
            className={ 'input-focused' }
            type='tel'
            fullWidth
            endAdornment={<InputAdornment position="end">#</InputAdornment>}
            value={commodityFormData['house']}
            onChange={(e) => handleChange('house',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(commodityFormData['house']).length })} error>请输入商品库房</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="price-goods" required>商品价格</InputLabel>
          <Input
            id="price-goods"
            className={ 'input-focused' }
            type='tel'
            fullWidth
            endAdornment={<InputAdornment position="end">￥</InputAdornment>}
            value={commodityFormData['price']}
            onChange={(e) => handleChange('price',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(commodityFormData['price']).length })} error>请输入商品价格</FormHelperText>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="supplier-goods" required>供应商</InputLabel>
          <Input
            id="supplier-goods"
            className={ 'input-focused' }
            type="text"
            fullWidth
            value={commodityFormData['supplier']}
            onChange={(e) => handleChange('supplier',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(commodityFormData['supplier']).length })} error>必填供应商</FormHelperText>
        </FormControl>
      </div>
    );
  }
}

FormInput.propTypes = {
  classes: PropTypes.object,
  commodityFormData: PropTypes.object,
  handleChange: PropTypes.func
}

export default withStyles(styles)(FormInput);
