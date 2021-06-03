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
   
  },
  name: {
    color: "black",
    
  }
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            
           
            <StyledTableCell align="right">姓名</StyledTableCell>
            <StyledTableCell align="right">帳號</StyledTableCell>
            <StyledTableCell align="right">密碼</StyledTableCell>
            <StyledTableCell align="right">店別</StyledTableCell>
            <StyledTableCell align="right">手機號碼</StyledTableCell>
            <StyledTableCell align="right">職稱</StyledTableCell>
            <StyledTableCell align="right">狀態</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.dataFromUserDb.map(row => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align = "right" component="th" scope="row" >
              <NavLink to={{pathname:"/agentProfile/"+row.number, number:row.number, name:row.name, account:row.account,
              password:row.password, shop:row.shop, phoneNum:row.phoneNum, title:row.title, inService:row.inService}}>
                  {row.name}
                </NavLink>
              </StyledTableCell>
              
              <StyledTableCell align="right">{row.account}</StyledTableCell>
              <StyledTableCell align="right">{row.password}</StyledTableCell>
              <StyledTableCell align="right">{row.shop}</StyledTableCell>
              <StyledTableCell align="right">{row.phoneNum}</StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.inService}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}