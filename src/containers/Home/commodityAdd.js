import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import {addCommodityFormChange,addCommodityToDB} from './action';
import {THEMBG} from '../../util/materialColor';

const styles = theme => ({
  formControl: {
    display: 'block',
    margin: theme.spacing.unit
  },
  rootInputLabel: {
    color: THEMBG
  },
  underlineInput: {
    backgroundColor: 'red'
  },
  button: {
    margin: theme.spacing.unit,
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
    const { classes } = this.props;

    return (
      <div>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ root: classes.rootInputLabel }} htmlFor="name-goods">商品名称</InputLabel>
            <Input
              id="name-goods"
              type="text"
              onChange={(e) => this.handleChange('name',e)}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ root: classes.rootInputLabel }} htmlFor="num-goods">商品库存</InputLabel>
            <Input
              id="num-goods"
              type='tel'
              endAdornment={<InputAdornment position="end">件</InputAdornment>}
              onChange={(e) => this.handleChange('num',e)}/>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ root: classes.rootInputLabel }} htmlFor="house-goods">商品库房</InputLabel>
            <Input
              id="house-goods"
              type='tel'
              endAdornment={<InputAdornment position="end">#</InputAdornment>}
              onChange={(e) => this.handleChange('house',e)}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ root: classes.rootInputLabel }} htmlFor="price-goods">商品价格</InputLabel>
            <Input
              id="price-goods"
              type='tel'
              endAdornment={<InputAdornment position="end">￥</InputAdornment>}
              onChange={(e) => this.handleChange('price',e)}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ root: classes.rootInputLabel }} htmlFor="supplier-goods">供应商</InputLabel>
            <Input
              id="supplier-goods"
              type="text"
              onChange={(e) => this.handleChange('supplier',e)}
            />
          </FormControl>
          <Button raised color="primary" className={classes.button} onClick={(e) => this.handleSubmit(e)}>确认</Button>
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
