import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import c from 'classnames';

import {addCommodityFormChange,addCommodityToDB,addCommodityFormConfirm} from './action';
import FormInput from './components/FormInput';
import {THEMBG} from '../../util/materialColor';

import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';


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
      let inputKeysArr = Object.getOwnPropertyNames(addCommodityFormDataCopy);

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
          <FormInput
            FormInputData={addCommodityFormData}
            handleChange={this.handleChange}
            idNoDisplay={true}
          />
          <Button
            disabled = {addCommodityConfirm}
            variant='raised'
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
