import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 0,
    overflowX: 'auto'
  },
  table: {
    minWidth: 700
  },
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
            <TableCell numeric>供应商</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {commodityList.map(n => {
            return (
              <TableRow key={n.id}>
                <TableCell>{n.id}</TableCell>
                <TableCell>{n.name}</TableCell>
                <TableCell numeric>{n.calories}</TableCell>
                <TableCell numeric>{n.fat}</TableCell>
                <TableCell numeric>{n.carbs}</TableCell>
                <TableCell numeric>{n.protein}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

CommodityList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CommodityList);
