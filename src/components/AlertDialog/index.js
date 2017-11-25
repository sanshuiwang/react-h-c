import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import { withStyles } from 'material-ui/styles';

import {THEMBG} from '../../util/materialColor';

const styles = theme => ({
  label: {
    color: THEMBG
  }
});

function Transition(props) {
  return <Slide direction="up" timeout={{enter:100, exit:100}} {...props} />;
}

class AlertDialog extends React.Component {
  render() {
    const {classes,alertDialogData,handleRequestClose,handleRequestDelect} = this.props;
    return (
      <div>
        <Dialog
          open={alertDialogData.open}
          onRequestClose={handleRequestClose}
          transition={Transition}
          >
            <DialogTitle>{alertDialogData.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>{alertDialogData.content}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRequestClose} classes={{
                label : classes.label
              }}>取消</Button>
              <Button onClick={handleRequestDelect} classes={{
                label : classes.label
              }}>确认</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }
}
AlertDialog.propTypes = {
  classes: PropTypes.object,
  alertDialogData: PropTypes.object,
  handleRequestClose: PropTypes.func,
  handleRequestDelect: PropTypes.func
}
export default withStyles(styles)(AlertDialog);
