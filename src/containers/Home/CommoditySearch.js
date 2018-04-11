import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import _ from 'lodash';

import {searchInputTextChange,searchGoods} from './action';

import CommodityList from './CommodityList';

import {THEMBG} from '../../util/materialColor';
import { withStyles } from 'material-ui/styles';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import { FormControl, FormHelperText } from 'material-ui/Form';
import SearchIcon from '@material-ui/icons/Search';

import Icon from 'material-ui/Icon';

const styles = theme => ({
  formControl: {
    display: 'block',
    margin: theme.spacing.unit
  },
  shrinkInputLabel: {
    color: THEMBG,
  }
});

class CommoditySearch extends React.Component {

  handleChangeSearch = (event) => {
    new Promise((resolve, reject) => {
      resolve(this.props.searchInputTextChange(event.target.value));
    }).then(() => {
      //如果一个词汇都不输入会造成全部查询出来。API接口我配的模糊查找
      if(this.props.searchInputText !== '' && _.trim(this.props.searchInputText).length !== 0){
        this.props.searchGoods(this.props.searchInputText);
      }
    }).catch((error) => console.log('CommoditySearch::'+error));
  }

  render() {
    const { classes,searchInputText,searchCommodityListArr } = this.props;
    return (
      <div>
        <div className={'search-input-wrapper'}>
          <FormControl className={classes.formControl}>
            <InputLabel classes={{ shrink: classes.shrinkInputLabel }} htmlFor="search-goods">商品名称</InputLabel>
            <Input
              fullWidth
              id="search-goods"
              className={ 'input-focused' }
              type="text"
              value={searchInputText}
              onChange={(event) => this.handleChangeSearch(event)}
              endAdornment={
                <InputAdornment position="end">
                  <Icon color="disabled">
                    <SearchIcon />
                  </Icon>
                </InputAdornment>
              }
            />
          </FormControl>
        </div>
        <CommodityList commodityList={searchCommodityListArr}/>
      </div>
    );
  }
}

CommoditySearch.propTypes = {
  classes: PropTypes.object.isRequired,
  searchInputText: PropTypes.string,
  searchCommodityListArr: PropTypes.array
};

export default withStyles(styles)(connect((state)=>({
  searchInputText: state.commodity.searchInputText,
  searchCommodityListArr: state.commodity.searchCommodityListArr
}),{
  searchInputTextChange,
  searchGoods
})(CommoditySearch));
