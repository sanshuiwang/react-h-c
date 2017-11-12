import React, {Component} from 'react';
import {connect} from 'react-redux';
import ScrollableTabsButtonAuto from '../../components/ScrollableTabsButtonAuto';
import CommodityList from './commodityList';

import {getCommodityList} from './action';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }

  componentDidMount() {
    this.props.getCommodityList();
  }

  render(){
    const commodityTabs = ['列表','添加','搜索'];
    const commodityNodes = [<CommodityList commodityList={this.props.commodityList.commodityListArr} />,'添加!!!','sousuo !!!']
    return (
      <div>
        <ScrollableTabsButtonAuto tabsItems={commodityTabs} itemNodes={commodityNodes}/>
      </div>
    );
  }
}

export default connect((state) => ({commodityList: state.commodityList}),{getCommodityList})(Home);
