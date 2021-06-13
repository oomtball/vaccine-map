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
            <StyledTableCell>縣市</StyledTableCell>
            <StyledTableCell align="left">鄉鎮</StyledTableCell>
            <StyledTableCell align="left">疫苗名稱</StyledTableCell>
            <StyledTableCell align="left">剩餘數量</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataFromdb1.map(row => (
            <StyledTableRow key={row.city}>
              <StyledTableCell align="left">{row.city}</StyledTableCell>
              <StyledTableCell align="left">{row.district}</StyledTableCell>
              <StyledTableCell align="left">{row.vaccineType}</StyledTableCell>
              <StyledTableCell align="left">{row.num}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}