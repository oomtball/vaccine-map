import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#fcd29f",
    color: theme.palette.common.black,
    fontSize: 16,
    paddingTop: 20,
  },
  body: {
    fontSize: 13,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(0),
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  name: {
    color: "black",
    
  }
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
  var handleChange = e => {
    props.getItemInfo(e);
  }
  
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <StyledTableCell>案名</StyledTableCell>
            <StyledTableCell align="right">合約編號</StyledTableCell>
            <StyledTableCell align="right">地址</StyledTableCell>
            <StyledTableCell align="right">售價</StyledTableCell>
            <StyledTableCell align="right">格局</StyledTableCell>
            <StyledTableCell align="right">經紀人</StyledTableCell>
            <StyledTableCell align="right">房屋類型</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataFromdb1.map(row => (
            <StyledTableRow key={row.caseName}>
              <NavLink to={"/item_search/"+row.contractNum}>
                <StyledTableCell component="th" scope="row" onClick={() => handleChange(row)}>
                  {row.innerNum + row.caseName}
                </StyledTableCell>
              </NavLink>
              <StyledTableCell align="right">{row.contractNum}</StyledTableCell>
              <StyledTableCell align="right">{row.district + row.road}</StyledTableCell>
              <StyledTableCell align="right">{row.contractPrice}</StyledTableCell>
              <StyledTableCell align="right">{row.room1 + "+" + row.room2 + "房" + row.livingroom + "廳" + row.bathroom + "衛"}</StyledTableCell>
              <StyledTableCell align="right">{row.agency1}</StyledTableCell>
              <StyledTableCell align="right">{row.buildingType}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}