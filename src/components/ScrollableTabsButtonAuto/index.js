import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import {THEMBG,tabsTextColor} from '../../util/materialColor';

function TabContainer(props) {
  return <div style={{ paddingTop: 8 * 1  }}>{props.children}</div>;
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    backgroundColor: theme.palette.background.paper,
  },
  barStyle: {
    backgroundColor: THEMBG,
  }
});

class ScrollableTabsButtonAuto extends React.Component {
  state = {
    value: 2,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes,tabsItems,itemNodes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.barStyle}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor={tabsTextColor}
            textColor= "inherit"
            scrollable
            scrollButtons="auto"
          >
            {tabsItems.map((tabsItem,index) => (
              <Tab key={index} label={tabsItem} />
            ))}
          </Tabs>
        </AppBar>
        {itemNodes.map((itemNode,index) => (
          value === index && <TabContainer key={index}>{itemNode}</TabContainer>
        ))}
      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  classes: PropTypes.object.isRequired,
  tabsItems: PropTypes.array.isRequired,
  itemNodes: PropTypes.array.isRequired
};

export default withStyles(styles)(ScrollableTabsButtonAuto);
