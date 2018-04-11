import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {delectCommodityAlertDialog,updateCommodityAlertDialog} from './action';

import {THEMBG,delectIcon} from '../../util/materialColor';

import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

import DeleteIcon from '@material-ui/icons/Delete';
import ModeEdit from '@material-ui/icons/ModeEdit';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 0,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
  icon: {
    width: 18,
    height: 18,
    cursor: "pointer",
  },
  button: {
    width: 28
  }
});

function CommodityList(props) {
  const { classes,commodityList } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>商品名称</TableCell>
            <TableCell numeric>商品库存/件</TableCell>
            <TableCell numeric>商品库房/#</TableCell>
            <TableCell numeric>商品价格/￥</TableCell>
            <TableCell>供应商</TableCell>
            <TableCell>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            commodityList.length !== 0 ? commodityList.map(listItem => {
            return (
              <TableRow key={listItem.id}>
                <TableCell>{listItem.id}</TableCell>
                <TableCell>{listItem.name}</TableCell>
                <TableCell numeric>{listItem.num}</TableCell>
                <TableCell numeric>{listItem.house}</TableCell>
                <TableCell numeric>{listItem.price}</TableCell>
                <TableCell>{listItem.supplier}</TableCell>
                <TableCell>
                  <Tooltip id="tooltip-icon" title="编辑" placement="left-start">
                    <IconButton
                      aria-label="Edit"
                      className={classes.button}
                      onClick={() => props.updateCommodityAlertDialog({id: listItem.id,open: true, title: `编辑ID (${listItem.id}) 商品属性`,content: `更新商品(${listItem.name})属性，点击确认完成更新！`, disabledConfirm: true})}
                    >
                      <ModeEdit className={classes.icon} style={{ color: THEMBG }}/>
                    </IconButton>
                  </Tooltip>
                  <Tooltip id="tooltip-icon" title="删除" placement="right-start">
                    <IconButton
                      aria-label="Delete"
                      onClick={() => props.delectCommodityAlertDialog({id: listItem.id,open: true, title: `删除ID (${listItem.id}) 商品`,content: `确认删除商品(${listItem.name})吗？`, disabledConfirm: false})}
                    >
                      <DeleteIcon className={classes.icon} style={{ color: delectIcon }}/>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          }) : <TableRow><TableCell>暂无数据</TableCell></TableRow>
        }
        </TableBody>
      </Table>
    </Paper>
  );
}

CommodityList.propTypes = {
  classes: PropTypes.object.isRequired,
  delectCommodityAlertDialog: PropTypes.func,
  updateCommodityAlertDialog: PropTypes.func
};

export default withStyles(styles)(connect(() => ({}),{
    delectCommodityAlertDialog,
    updateCommodityAlertDialog
  })(CommodityList));
