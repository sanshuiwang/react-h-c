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
  primaryColor: {
    backgroundColor: THEMBGMAT
  },
  primaryColorBar: {
    backgroundColor: THEMBG
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
