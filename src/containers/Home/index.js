import React, {Component} from 'react';
import {connect} from 'react-redux';

import ScrollableTabsButtonAuto from '../../components/ScrollableTabsButtonAuto';
import AlertDialog from '../../components/AlertDialog';

import CommodityList from './commodityList';
import {getCommodityList,delectCommodityAlertDialog} from './action';

class Home extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.getCommodityList();
  }

  handleRequestClose = () => {
    this.props.delectCommodityAlertDialog({id: null,open: false,title: '',content: ''});
  };

  render(){
    const {commodityListData,alertDialogData} = this.props;
    const commodityTabs = ['列表','添加','搜索'];
    const commodityNodes = [<CommodityList commodityList={commodityListData} />,'添加!!!','sousuo !!!'];
    return (
      <div>
        <ScrollableTabsButtonAuto tabsItems={commodityTabs} itemNodes={commodityNodes}/>
        <AlertDialog alertDialogData={alertDialogData} handleRequestClose={this.handleRequestClose}/>
      </div>
    );
  }
}

export default connect((state) => ({
  commodityListData: state.commodity.commodityListArr,
  alertDialogData: state.commodity.alertDialog
}),{
  getCommodityList,
  delectCommodityAlertDialog
})(Home);
