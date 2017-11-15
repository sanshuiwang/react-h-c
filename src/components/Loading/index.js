import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import {themBg,THEMBGMAT} from '../../util/materialColor';

const styles = {
  root: {
    width: '100%'
  },
  primaryColor: {
    backgroundColor: THEMBGMAT
  },
  primaryColorBar: {
    backgroundColor: themBg
  }
};

class Loading extends Component {
    render() {
      console.log(this.props);
        const {classes} = this.props;
        return (
            <div className={classes.root}>
              <LinearProgress classes={{
                  primaryColor: classes.primaryColor,
                  primaryColorBar: classes.primaryColorBar
                }}
              />
            </div>
        )
    }
}

Loading.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loading);
