import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cs from 'classnames';

import { withStyles } from 'material-ui/styles';
import { LinearProgress } from 'material-ui/Progress';
import {THEMBG,THEMBGMAT} from '../../util/materialColor';

const styles = {
  root: {
    width: '100%',
    zIndex: '999'
  },
  colorPrimary: {
    backgroundColor: THEMBGMAT
  },
  barColorPrimary: {
    backgroundColor: THEMBG
  }
};

class Loading extends Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.root}>
              <LinearProgress classes={{
                  colorPrimary: classes.colorPrimary,
                  barColorPrimary: classes.barColorPrimary
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
