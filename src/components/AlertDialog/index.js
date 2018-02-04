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
    const {classes,alertDialogData,handleRequestCloseDialog,handleRequestConfirm} = this.props;
    return (
      <div>
        <Dialog
          open={alertDialogData.open}
          onClose={handleRequestCloseDialog}
          transition={Transition}
          >
            <DialogTitle>{alertDialogData.title}</DialogTitle>
            <DialogContent>
              <DialogContentText>{alertDialogData.content}</DialogContentText>
              {this.props.children}
            </DialogContent>
            <DialogActions>
              <Button onClick={handleRequestCloseDialog} classes={{
                label : classes.label
              }}>取消</Button>
              <Button onClick={handleRequestConfirm} classes={{
                label : classes.label
              }} disabled={alertDialogData.disabledConfirm}>确认</Button>
            </DialogActions>
        </Dialog>
      </div>
    );
  }
}
AlertDialog.propTypes = {
  classes: PropTypes.object,
  alertDialogData: PropTypes.object,
  handleRequestCloseDialog: PropTypes.func,
  handleRequestConfirm: PropTypes.func
}
export default withStyles(styles)(AlertDialog);
