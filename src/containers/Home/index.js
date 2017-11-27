import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ScrollableTabsButtonAuto from '../../components/ScrollableTabsButtonAuto';
import AlertDialog from '../../components/AlertDialog';
import SnackbarMsg from '../../components/SnackbarMsg';

import CommodityList from './commodityList';
import CommodityAdd from './CommodityAdd';

import {
  getCommodityList,
  delectCommodityAlertDialog,
  delectCommodityById,
  addSucSnackbarChange
} from './action';

import './styles.scss';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getCommodityList();
  }

  handleRequestCloseDialog = () => {
    let alertDialogDataCopy = JSON.parse(JSON.stringify(this.props.alertDialogData));
    alertDialogDataCopy.open = false;
    this.props.delectCommodityAlertDialog(alertDialogDataCopy);
  }

  handleRequestConfirm = () => {
    let id = this.props.alertDialogData.id;
    this.props.delectCommodityById(id);
  }

  handleRequestCloseSnackbar = () => {
    let addSucSnackbarCopy = JSON.parse(JSON.stringify(this.props.addSucSnackbar));
    addSucSnackbarCopy['open'] = false;
    this.props.addSucSnackbarChange(addSucSnackbarCopy);
  }

  render(){
    const {commodityListData,alertDialogData,addSucSnackbar} = this.props;
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
          alertDialogData={alertDialogData}
          handleRequestCloseDialog={this.handleRequestCloseDialog}
          handleRequestConfirm={this.handleRequestConfirm}
        />
        <SnackbarMsg
          SnackbarData={addSucSnackbar}
          handleRequestCloseSnackbar={this.handleRequestCloseSnackbar}
        />
      </div>
    );
  }
}

Home.propTypes = {
  commodityListData: PropTypes.array,
  alertDialogData: PropTypes.object,
  getCommodityList: PropTypes.func,
  delectCommodityById: PropTypes.func,
  delectCommodityAlertDialog: PropTypes.func
}

export default connect((state) => ({
  commodityListData: state.commodity.commodityListArr,
  alertDialogData: state.commodity.alertDialog,
  addSucSnackbar: state.commodity.addSucSnackbar
}),{
  getCommodityList,
  delectCommodityById,
  delectCommodityAlertDialog,
  addSucSnackbarChange
})(Home);
