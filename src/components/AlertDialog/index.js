import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
class AlertDialog extends React.Component {

  render() {
    console.log(10001111,this.props);
    const {open,handleRequestClose} = this.props;
    return (
      <div>
        <Dialog open={open} onRequestClose={handleRequestClose}>
          <DialogTitle>{'title'}</DialogTitle>
          <DialogContent>
            <DialogContentText>{'content'}</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleRequestClose} color="primary">取消</Button>
            <Button onClick={handleRequestClose} color="primary" autoFocus>确认</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
