import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import c from 'classnames';

import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import {addCommodityFormChange,addCommodityToDB} from './action';
import {THEMBG} from '../../util/materialColor';

import './styles.scss';

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
  },
  keyboardFocused: {
    backgroundColor: 'red'
  }
});

class CommodityAdd extends React.Component {
  handleChange = (item,event) => {
    let addCommodityFormDataCopy = JSON.parse(JSON.stringify(this.props.addCommodityFormData));
    if(addCommodityFormDataCopy.hasOwnProperty(item)){
      addCommodityFormDataCopy[item] = event.target.value;
    }

    this.props.addCommodityFormChange(addCommodityFormDataCopy);
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
    }).catch((error) => console.log("rejected:", error));

  }

  render() {
    const { classes, addCommodityFormData } = this.props;

    return (
      <div className={c(classes.inputWrapper,'clearfix')}>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="name-goods">商品名称</InputLabel>
            <Input
              id="name-goods"
              type="text"
              fullWidth
              value={addCommodityFormData['name']}
              onChange={(e) => this.handleChange('name',e)}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="num-goods">商品库存</InputLabel>
            <Input
              id="num-goods"
              type='tel'
              fullWidth
              endAdornment={<InputAdornment position="end">件</InputAdornment>}
              value={addCommodityFormData['num']}
              onChange={(e) => this.handleChange('num',e)}/>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="house-goods">商品库房</InputLabel>
            <Input
              id="house-goods"
              type='tel'
              fullWidth
              endAdornment={<InputAdornment position="end">#</InputAdornment>}
              value={addCommodityFormData['house']}
              onChange={(e) => this.handleChange('house',e)}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="price-goods">商品价格</InputLabel>
            <Input
              id="price-goods"
              type='tel'
              fullWidth
              endAdornment={<InputAdornment position="end">￥</InputAdornment>}
              value={addCommodityFormData['price']}
              onChange={(e) => this.handleChange('price',e)}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="supplier-goods">供应商</InputLabel>
            <Input
              id="supplier-goods"
              type="text"
              fullWidth
              value={addCommodityFormData['supplier']}
              onChange={(e) => this.handleChange('supplier',e)}
            />
          </FormControl>
          <Button raised classes={{ raised: classes.raised,keyboardFocused: classes.keyboardFocused }} className={classes.button} onClick={(e) => this.handleSubmit(e)}>确认</Button>
      </div>
    );
  }
}

CommodityAdd.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(connect((state) => ({
  addCommodityFormData: state.commodity.addCommodityForm
}),{
  addCommodityFormChange,
  addCommodityToDB
})(CommodityAdd));
