import React from 'react';
import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
import Slide from 'material-ui/transitions/Slide';

function TransitionLeft(props) {
  return <Slide direction="left" {...props} />;
}

function TransitionUp(props) {
  return <Slide direction="up" {...props} />;
}

function TransitionRight(props) {
  return <Slide direction="right" {...props} />;
}

function TransitionDown(props) {
  return <Slide direction="down" {...props} />;
}

class SnackbarMsg extends React.Component {
  render() {
    const {SnackbarData,handleRequestCloseSnackbar} = this.props;
    let transitionFunc = Function();
    switch(SnackbarData.transition) {
      case 'TransitionLeft':
        transitionFunc = TransitionLeft;
        break;
      case 'TransitionUp':
        transitionFunc = TransitionUp;
        break;
      case 'TransitionRight':
       transitionFunc = TransitionRight;
       break;
      case 'TransitionDown':
       transitionFunc = TransitionDown;
       break;
      default:
        break;
    }
    return (
      <div>
        <Snackbar
          key={SnackbarData.key}
          open={SnackbarData.open}
          onClose={handleRequestCloseSnackbar}
          transition={transitionFunc}
          SnackbarContentProps={{
            'aria-describedby': SnackbarData.messageId,
          }}
          message={<span id={SnackbarData.messageId}>{SnackbarData.message}</span>}
        />
      </div>
    );
  }
}

export default SnackbarMsg;
