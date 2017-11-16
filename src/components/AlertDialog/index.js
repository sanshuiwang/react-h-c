import React from 'react';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';

function Transition(props) {
  return <Slide direction="up" timeout={{enter:100, exit:100}} {...props} />;
}

class AlertDialog extends React.Component {

  render() {
    const {alertDialogData,handleRequestClose} = this.props;
    return (
      <div>
        <Dialog open={alertDialogData.open} onRequestClose={handleRequestClose} transition={Transition}>
          <DialogTitle>{alertDialogData.title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{alertDialogData.content}</DialogContentText>
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
