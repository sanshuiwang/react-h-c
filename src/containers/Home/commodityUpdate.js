import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withStyles } from 'material-ui/styles';

import {THEMBG} from '../../util/materialColor';

const styles = theme => ({
  label: {
    color: THEMBG
  },
  formControl: {
    display: 'block',
    margin: theme.spacing.unit
  },
  shrinkInputLabel: {
    color: THEMBG
  }
});

function Transition(props) {
  return <Slide direction="down" timeout={{enter:100, exit:100}} {...props} />;
}

class AlertDialogForm extends Component {

  handleChange = (item,event) => {

  }

  render() {
    const {classes,AlertDialogFormData} = this.props;
    return (
      <div>
        <FormControl className={classes.formControl}>
          <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="name-goods" required>商品名称</InputLabel>
          <Input
            id="name-goods"
            className={ 'input-focused' }
            type="text"
            fullWidth
            value={AlertDialogFormData['name']}
            onChange={(e) => this.handleChange('name',e)}
          />
          <FormHelperText className={c({'form-helper-text': _.trim(AlertDialogFormData['name']).length })} error>请输入商品名称</FormHelperText>
        </FormControl>
      </div>
    );
  }
}
AlertDialogForm.propTypes = {
  classes: PropTypes.object
}
export default withStyles(styles)(AlertDialogForm);
