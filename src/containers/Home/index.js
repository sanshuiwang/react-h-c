import React, {Component} from 'react';
import {connect} from 'react-redux';

import ScrollableTabsButtonAuto from '../../components/ScrollableTabsButtonAuto';
import AlertDialog from '../../components/AlertDialog';

import CommodityList from './commodityList';
import CommodityAdd from './CommodityAdd';

import {getCommodityList,delectCommodityAlertDialog,delectCommodityById} from './action';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getCommodityList();
  }

  handleRequestClose = () => {
    let alertDialogDataCopy = JSON.parse(JSON.stringify(this.props.alertDialogData));
    alertDialogDataCopy.open = false;
    this.props.delectCommodityAlertDialog(alertDialogDataCopy);
  };
  handleRequestDelect = () => {
    let id = this.props.alertDialogData.id;
    this.props.delectCommodityById(id);
  }
  render(){
    const {commodityListData,alertDialogData} = this.props;
    const commodityTabs = ['列表','添加','搜索'];
    const commodityNodes = [<CommodityList commodityList={commodityListData} />,<CommodityAdd />,'sousuo !!!'];
    return (
      <div>
        <ScrollableTabsButtonAuto tabsItems={commodityTabs} itemNodes={commodityNodes}/>
        <AlertDialog
          alertDialogData={alertDialogData}
          handleRequestClose={this.handleRequestClose}
          handleRequestDelect={this.handleRequestDelect}
        />
      </div>
    );
  }
}

export default connect((state) => ({
  commodityListData: state.commodity.commodityListArr,
  alertDialogData: state.commodity.alertDialog
}),{
  getCommodityList,
  delectCommodityById,
  delectCommodityAlertDialog
})(Home);
