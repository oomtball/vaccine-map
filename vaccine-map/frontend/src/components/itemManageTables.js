import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import '../styles/navStyle.css';

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
}));

export default function CustomizedTables(props) {
  const classes = useStyles();
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
              <NavLink to = {{pathname:"./item_manage/" + row.contractNum, caseName:row.caseName, innerNum:row.innerNum, contractNum:row.contractNum,
              contractPrice:row.contractPrice, sellingPrice:row.sellingPrice, buildingType:row.buildingType, usage:row.usage, caseStartDate:row.caseStartDate, caseFinishDate:row.caseFinishDate,
              constructFinishDate:row.constructFinishDate, city:row.city, district:row.district, village:row.village, neighbor:row.neighbor, road:row.road, section:row.section, lane:row.lane,
              alley:row.alley, number1:row.number1, number2:row.number2, floor1:row.floor1, floor2:row.floor2, allUpFloor:row.allUpFloor,
              allDownFloor:row.allDownFloor, mrtArea:row.mrtArea, mrtRoute1:row.mrtRoute1, mrtRoute2:row.mrtRoute2, trMainRoad:row.trMainRoad, trLine:row.trLine, trStation:row.trStation,
              frontRoadWidth:row.frontRoadWidth, typeOfRoad:row.typeOfRoad, remark:row.remark, feature:row.feature, room1:row.room1, room2:row.room2,
              livingroom:row.livingroom, bathroom:row.bathroom, otherPattern:row.otherPattern, facing:row.facing, landHoldings:row.landHoldings, landArea:row.landArea,
              lighting:row.lighting, sideRoom:row.sideRoom, darkRoom:row.darkRoom, mainMaterial:row.mainMaterial,
              compartmentMaterial:row.compartmentMaterial, outsideWall:row.outsideWall, status:row.status, securityGuard:row.securityGuard,
              manageFee:row.manageFee, amountOfManageFee:row.amountOfManageFee, feeFrequency:row.feeFrequency, elementary:row.elementary,
              junior:row.junior, park:row.park, market:row.market,
              ownershipArea:row.ownershipArea, extensionArea:row.extensionArea, ratioOfPublic:row.ratioOfPublic, mainBuilding:row.mainBuilding,
              subsidiaryBuilding:row.subsidiaryBuilding, areaOfPublic:row.areaOfPublic, parkingSpace:row.parkingSpace, pingOfParkingSpace:row.pingOfParkingSpace,
              quantityOfParkingSpace:row.quantityOfParkingSpace, numberOfParkingSpace:row.numberOfParkingSpace, priceOfParkingSpace:row.priceOfParkingSpace,
              depth:row.depth, faceWidth:row.faceWidth, highCeiling:row.highCeiling, highBeam:row.highBeam, cargoElevator:row.cargoElevator,
              tonsOfCargoElevator:row.tonsOfCargoElevator, crane:row.crane, tonsOfCrane:row.tonsOfCrane, bigElec:row.bigElec,
              hpOfBigElec:row.hpOfBigElec, basement:row.basement, agency1:row.agency1, agency2:row.agency2, agency3:row.agency3,
              agency4:row.agency4, agency5:row.agency5, agency6:row.agency6, onSale:row.onSale, house_pics_names:row.house_pics_names}} className="w-nav-link">
                <StyledTableCell component="th" scope="row">
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