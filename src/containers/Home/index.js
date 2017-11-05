import React, {Component} from 'react';
import ScrollableTabsButtonAuto from '../../components/ScrollableTabsButtonAuto';
class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0
    }
  }

  render(){
    return (
      <div>
        <ScrollableTabsButtonAuto />
      </div>
    );
  }
}

export default Home;
