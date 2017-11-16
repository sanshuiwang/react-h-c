import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {delectCommodityAlertDialog} from './action';

import {THEMBG,delectIcon} from '../../util/materialColor';

import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import Button from 'material-ui/Button';
import Tooltip from 'material-ui/Tooltip';

import DeleteIcon from 'material-ui-icons/Delete';
import ModeEdit from 'material-ui-icons/ModeEdit';
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
            <TableCell numeric>商品库存</TableCell>
            <TableCell numeric>商品库房/#</TableCell>
            <TableCell numeric>商品价格/￥</TableCell>
            <TableCell>供应商</TableCell>
            <TableCell>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            commodityList.length !== 0 ? commodityList.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.id}</TableCell>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>
                <TableCell>{n.protein}</TableCell>
                <TableCell>
                  <Tooltip id="tooltip-icon" title="编辑" placement="left-start">
                    <IconButton aria-label="Edit" className={classes.button}>
                      <ModeEdit className={classes.icon} style={{ color: THEMBG }}/>
                    </IconButton>
                  </Tooltip>
                  <Tooltip id="tooltip-icon" title="删除" placement="right-start">
                    <IconButton aria-label="Delete" onClick={() => props.delectCommodityAlertDialog({id: n.id,open: true, title: `删除ID (${n.id}) 商品`,content: `确认删除商品(${n.name})吗？`})}>
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
};

export default withStyles(styles)(connect(() => ({}),{
    delectCommodityAlertDialog
  })(CommodityList));
