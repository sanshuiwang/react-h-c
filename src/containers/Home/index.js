import React, {Component} from 'react';
import {connect} from 'react-redux';

import ScrollableTabsButtonAuto from '../../components/ScrollableTabsButtonAuto';
import AlertDialog from '../../components/AlertDialog';

import CommodityList from './commodityList';
import {getCommodityList} from './action';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      open: true
    }
  }

  componentDidMount() {
    this.props.getCommodityList();
  }

  // handleClickOpen = () => {
  //   this.setState({ open: true });
  // };

  handleRequestClose = () => {
    this.setState({ open: false });
  };

  render(){
    const commodityTabs = ['列表','添加','搜索'];
    const commodityNodes = [<CommodityList commodityList={this.props.commodityList.commodityListArr} />,'添加!!!','sousuo !!!']
    return (
      <div>
        <ScrollableTabsButtonAuto tabsItems={commodityTabs} itemNodes={commodityNodes}/>
        <AlertDialog open={this.state.open} handleRequestClose={this.handleRequestClose}/>
      </div>
    );
  }
}

export default connect((state) => ({
  commodityList: state.commodityList
}),{
  getCommodityList
})(Home);
