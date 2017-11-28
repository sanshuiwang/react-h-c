import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ScrollableTabsButtonAuto from '../../components/ScrollableTabsButtonAuto';
import AlertDialog from '../../components/AlertDialog';
import SnackbarMsg from '../../components/SnackbarMsg';

import FormInput from './components/FormInput';
import CommodityList from './commodityList';
import CommodityAdd from './CommodityAdd';

import {
  getCommodityList,
  delectCommodityAlertDialog,
  delectCommodityById,
  addSucSnackbarChange,
  updateAlertDialogChange,
  updateCommodityFormChange,
  updateCommodityFormToDB
} from './action';

import './styles.scss';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getCommodityList();
  }

  handleRequestCloseDelDialog = () => {
    let alertDialogDataCopy = JSON.parse(JSON.stringify(this.props.delAlertDialogData));
    alertDialogDataCopy.open = false;
    this.props.delectCommodityAlertDialog(alertDialogDataCopy);
  }

  handleRequestDelConfirm = () => {
    let id = this.props.delAlertDialogData.id;
    this.props.delectCommodityById(id);
  }

  handleRequestCloseSnackbarAddSuc = () => {
    let addSucSnackbarCopy = JSON.parse(JSON.stringify(this.props.addSucSnackbar));
    addSucSnackbarCopy['open'] = false;
    this.props.addSucSnackbarChange(addSucSnackbarCopy);
  }

  handleRequestCloseUpdateDialog = () => {
    let updateAlertDialogCopy =  JSON.parse(JSON.stringify(this.props.updateAlertDialog));
    updateAlertDialogCopy['open'] = false;
    this.props.updateAlertDialogChange(updateAlertDialogCopy);
  }

  handleRequestUpdateConfirm = () => {
    let updateCommodityFormCopy = JSON.parse(JSON.stringify(this.props.updateCommodityForm));
    this.props.updateCommodityFormToDB(updateCommodityFormCopy);
  }

  handleChangeFormUpdate = (item,event) => {
    let updateCommodityFormCopy = JSON.parse(JSON.stringify(this.props.updateCommodityForm));
    if(updateCommodityFormCopy.hasOwnProperty(item)){
      updateCommodityFormCopy[item] = _.trim(event.target.value);
    }
    new Promise((resolve, reject) => {
      resolve(this.props.updateCommodityFormChange(updateCommodityFormCopy));
    }).then(() => {
      let inputKeysArr = Object.getOwnPropertyNames(updateCommodityFormCopy);
      let updateAlertDialogCopy =  JSON.parse(JSON.stringify(this.props.updateAlertDialog));

      for(var i = 0; i < inputKeysArr.length; i++){
        if(updateCommodityFormCopy[inputKeysArr[i]].length === 0){
          /*存在没填写的输入项则确认按钮就是灰色*/
          updateAlertDialogCopy['disabledConfirm'] = true;
          this.props.updateAlertDialogChange(updateAlertDialogCopy);
          break;
        }else{
          updateAlertDialogCopy['disabledConfirm'] = false;
          this.props.updateAlertDialogChange(updateAlertDialogCopy);
        }
      }
    }).catch((error) => console.log("commodityUpdate-change::", error));
  }

  render(){
    const {commodityListData,delAlertDialogData,addSucSnackbar,updateAlertDialog,updateCommodityForm} = this.props;
    const commodityTabs = ['列表','添加','搜索'];
    const commodityNodes = [
      <CommodityList commodityList={commodityListData} />,
      <CommodityAdd />,
      'sousuo !!!'
    ];
    return (
      <div>
        <ScrollableTabsButtonAuto
          tabsItems={commodityTabs}
          itemNodes={commodityNodes}
        />
        <AlertDialog
          alertDialogData={delAlertDialogData}
          handleRequestCloseDialog={this.handleRequestCloseDelDialog}
          handleRequestConfirm={this.handleRequestDelConfirm}
        />
        <SnackbarMsg
          SnackbarData={addSucSnackbar}
          handleRequestCloseSnackbar={this.handleRequestCloseSnackbarAddSuc}
        />
        <AlertDialog
          alertDialogData={updateAlertDialog}
          handleRequestCloseDialog={this.handleRequestCloseUpdateDialog}
          handleRequestConfirm={this.handleRequestUpdateConfirm}
        >
          <FormInput
            FormInputData={updateCommodityForm}
            handleChange={this.handleChangeFormUpdate}
            idNoDisplay={false}
          />
        </AlertDialog>
      </div>
    );
  }
}

Home.propTypes = {
  commodityListData: PropTypes.array,
  delAlertDialogData: PropTypes.object,
  getCommodityList: PropTypes.func,
  delectCommodityById: PropTypes.func,
  delectCommodityAlertDialog: PropTypes.func
}

export default connect((state) => ({
  commodityListData: state.commodity.commodityListArr,
  delAlertDialogData: state.commodity.delAlertDialog,
  addSucSnackbar: state.commodity.addSucSnackbar,
  updateAlertDialog: state.commodity.updateAlertDialog,
  updateCommodityForm: state.commodity.updateCommodityForm
}),{
  getCommodityList,
  delectCommodityById,
  delectCommodityAlertDialog,
  addSucSnackbarChange,
  updateAlertDialogChange,
  updateCommodityFormChange,
  updateCommodityFormToDB
})(Home);
