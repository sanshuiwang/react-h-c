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

  componentWillMount() {
    this.props.getCommodityList();
  }

  render(){
    const commodityTabs = ['列表','添加','搜索'];
    const commodityNodes = [<CommodityList commodityList={this.props.commodityList} />,'添加!!!','sousuo !!!']
    return (
      <div>
        <ScrollableTabsButtonAuto tabsItems={commodityTabs} itemNodes={commodityNodes}/>
      </div>
    );
  }
}

export default connect((state) => ({commodityList: state.commodityList.commodityListArr}),{getCommodityList})(Home);
