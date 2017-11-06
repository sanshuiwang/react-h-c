import React, {Component} from 'react';
import ScrollableTabsButtonAuto from '../../components/ScrollableTabsButtonAuto';
import CommodityList from './CommodityList';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }

  render(){
    const commodityTabs = ['列表','添加','搜索'];
    const commodityNodes = [<CommodityList />,'添加!!!','sousuo !!!']
    return (
      <div>
        <ScrollableTabsButtonAuto tabsItems={commodityTabs} itemNodes={commodityNodes}/>
      </div>
    );
  }
}

export default Home;
