import React from "react";

import '../styles/new_item.css'
import 'date-fns';


import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';

import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {CustomTabs} from '../components/CustomTabs';
import {CustomTab} from '../components/CustomTab';
import AddItemPage1 from './addItemPage1';
import AddItemPage2 from './addItemPage2';
import AddItemPage3 from './addItemPage3';
import AddItemPage4 from './addItemPage4';

import UploadIcon from '@material-ui/icons/CloudUpload';
import OverflowScrolling from 'react-overflow-scrolling';
import {BootstrapButton} from './BootstrapButton';
// const contract_state = [
//     {},
//     {
//         value: '銷售中',
//         label: '銷售中',
//     },
//     {
//         value: '終止',
//         label: '終止',
//     },
//     {
//         value: '逾期',
//         label: '逾期',
//     },
//     {
//         value: '成交',
//         label: '成交',
//     }
// ]
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Typography
        component="div"
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-auto-tabpanel-${index}`}
        aria-labelledby={`scrollable-auto-tab-${index}`}
		
		{...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
  }
  
  
  export default function ScrollableTabsButtonAuto(props) {

    const [value, setValue] = React.useState(0);
	const [caseNamez, setCaseName] = React.useState("");
	const [contractNumz, setContractNum] = React.useState("");
	const [innerNumz,setInnerNum] = React.useState("");
	const [contractPricez, setContractPrice] = React.useState("");
	const [sellingPricez, setSellingPrice] = React.useState("");
	const [buildingTypez, setBuildingType] = React.useState("");
	const [usagez, setUsage] = React.useState("");
	const [caseStartDatez, setCaseStartDate] = React.useState(new Date());
	const [caseFinishDatez, setCaseFinishDate] = React.useState(new Date());
	const [constructFinishDatez, setConstructFinishDate] = React.useState(new Date());
	const [cityz, setCity] = React.useState("");
	const [districtz, setDistrict] = React.useState("");
	const [villagez, setVillage] = React.useState("");
	const [neighborz, setNeighbor] = React.useState("");
	const [roadz, setRoad] = React.useState("");
	const [sectionz, setSection] = React.useState("");
	const [lanez, setLane] = React.useState("");
	const [alleyz, setAlley] = React.useState("");
	const [number1z, setNumber1] = React.useState("");
	const [number2z, setNumber2] = React.useState("");
	const [floor1z, setFloor1] = React.useState("");
	const [floor2z, setFloor2] = React.useState("");
	const [allUpFloorz, setAllUpFloor] = React.useState("");
	const [allDownFloorz, setAllDownFloor] = React.useState("");

	const [mrtAreaz, setMrtArea] = React.useState("");
	const [mrtRoute1z, setMrtRoute1] = React.useState("");
	const [mrtRoute2z, setMrtRoute2] = React.useState("");
	const [trMainRoadz, setTrMainRoad] = React.useState("");
	const [trLinez, setTrLine] = React.useState("");
	const [trStationz, setTrStation] = React.useState("");
	const [frontRoadWidthz, setFrontRoadWidth] = React.useState("");
	const [typeOfRoadz, setTypeOfRoad] = React.useState("");
	const [featurez, setFeature] = React.useState("");
	const [remarkz, setRemark] = React.useState("");
	
	const [room1z, setRoom1] = React.useState("");
	const [room2z, setRoom2] = React.useState("");
	const [livingroomz, setLivingroom] = React.useState("");
	const [bathroomz, setBathroom] = React.useState("");
	const [otherPatternz, setOtherPattern] = React.useState("");
	const [facingz, setFacing] = React.useState("");
	const [landHoldingsz,setLandHoldings] = React.useState("")
	const [landAreaz,setLandArea] = React.useState("")
	const [lightingz, setLighting] = React.useState("");
	const [sideRoomz, setSideRoom] = React.useState("");
	const [darkRoomz, setDarkRoom] = React.useState("");
	const [mainMaterialz, setMainMaterial] = React.useState("");
	const [compartmentMaterialz, setCompartmentMaterial] = React.useState("");
	const [outsideWallz, setOutsideWall] = React.useState("");
	const [statusz, setStatus] = React.useState("");
	const [securityGuardz, setSecurityGuard] = React.useState("");
	const [manageFeez, setManageFee] = React.useState("");
	const [amountOfManageFeez, setAmountOfManageFee] = React.useState("");
	const [feeFrequencyz, setFeeFrequency] = React.useState("");
	
	const [elementaryz, setElementary] = React.useState("");
	const [juniorz, setJunior] = React.useState("");
	const [parkz, setPark] = React.useState("");
	const [marketz, setMarket] = React.useState("");

	const [ownershipAreaz, setOwnershipArea] = React.useState("");
	const [extensionAreaz, setExtensionArea] = React.useState("");
	const [ratioOfPublicz, setRatioOfPublic] = React.useState("");
	const [mainBuildingz, setMainBuilding] = React.useState("");
	const [subsidiaryBuildingz, setSubsidiaryBuilding] = React.useState("");
	const [areaOfPublicz, setAreaOfPublic] = React.useState("");
	const [parkingSpacez, setParkingSpace] = React.useState("");
	const [pingOfParkingSpacez, setPingOfParkingSpace] = React.useState("");
	const [quantityOfParkingSpacez, setQuantityOfParkingSpace] = React.useState("");
	const [numberOfParkingSpacez, setNumberOfParkingSpace] = React.useState("");
	const [priceOfParkingSpacez, setPriceOfParkingSpace] = React.useState("");
	const [depthz, setDepth] = React.useState("");
	const [faceWidthz, setFaceWidth] = React.useState("");
	const [highCeilingz, setHighCeiling] = React.useState("");
	const [highBeamz, setHighBeam] = React.useState("");
	const [cargoElevatorz, setCargoElevator] = React.useState("");
	const [tonsOfCargoElevatorz, setTonsOfCargoElevator] = React.useState("");
	const [cranez, setCrane] = React.useState("");
	const [tonsOfCranez, setTonsOfCrane] = React.useState("")
	const [bigElecz, setBigElec] = React.useState("");
	const [hpOfBigElecz, setHpOfBigElec] = React.useState("");
	const [basementz,setBasement] = React.useState("");
	const [agency1z, setAgency1] = React.useState("");
	const [agency2z, setAgency2] = React.useState("");
	const [agency3z, setAgency3] = React.useState("");
	const [agency4z, setAgency4] = React.useState("");
	const [agency5z, setAgency5] = React.useState("");
	const [agency6z, setAgency6] = React.useState("");
	const [pattern_pic, setPattern_pic] = React.useState("");
	const [house_pics, setHouse_pics] = React.useState("");
	const [pattern_pic_name, setPattern_pic_name] = React.useState([]);
	const [house_pics_names, setHouse_pics_names] = React.useState([]);
	
	const [boolManageFeez, setBoolManageFee] = React.useState(true);
	const [boolParkingSpacez, setBoolParkingSpace] = React.useState(true);
	const [boolCargoElevatorz, setBoolCargoElevator] = React.useState(true);
	const [boolCranez, setBoolCrane] = React.useState(true);
	const [boolBigElecz, setBoolBigelec] = React.useState(true);
	
	const [ifDoneCaseNamez, setIfDoneCaseName] = React.useState(true);
	const [saleStatusz,setSaleStatus] = React.useState("");
	
	const [waiting, setWaiting] = React.useState(false);
	let test = new Date(2019, 11, 12)
	let test2 = new Date(2019, 11, 23)
	let a = [test, test2]
	console.log(Math.max(a))
	let calculateRatioOfPublic = () => {
		var ans = Number(areaOfPublicz)/(Number(ownershipAreaz)-Number(pingOfParkingSpacez))*100
		if (ans > 100){
			return ans.toPrecision(5)
		}
		else{
			return ans.toPrecision(4)
		}
	}
	let calculateHouseAge = () => {
		let today = new Date();
		return  today.getFullYear() - constructFinishDatez.getFullYear();
	}
	let calculatePricePerPing = () => {
		if (sellingPricez !== ""){
			return (sellingPricez / ownershipAreaz).toPrecision(5);
		}
		else{
			return (contractPricez / ownershipAreaz).toPrecision(5);
		}
	}
	const addOneObject = async () => {
		let breaking = true;
		if (caseNamez === "" || contractNumz === "" || innerNumz === "" || contractPricez === "" || buildingTypez === "" ||
		usagez === "" || cityz === "" || districtz === "" || roadz === "" ||
		number1z === "" || allUpFloorz === "" || allDownFloorz === "" || featurez ==="" || room1z === "" || 
		livingroomz === "" || bathroomz === "" || mainMaterialz === "" || mainBuildingz === "" || subsidiaryBuildingz === "" ||
		areaOfPublicz === ""){
			alert("請填寫所有必填項目！!")
			return null;		
		}
            
        await setWaiting(true);

		let data = { caseName:caseNamez, contractNum:contractNumz, innerNum:innerNumz, contractPrice:contractPricez, sellingPrice: sellingPricez, buildingType:buildingTypez, 
			 usage:usagez, caseStartDate:caseStartDatez,houseAge:calculateHouseAge(), pricePerPing:calculatePricePerPing(),
			caseFinishDate:caseFinishDatez, constructFinishDate:constructFinishDatez, city:cityz, district:districtz,
			village:villagez, neighbor:neighborz, road:roadz,  section:sectionz, lane:lanez,
			alley:alleyz, number1:number1z, number2:number2z, floor1:floor1z, floor2:floor2z, allUpFloor:allUpFloorz, 
			allDownFloor:allDownFloorz, mrtArea:mrtAreaz, mrtRoute1:mrtRoute1z, mrtRoute2:mrtRoute2z,
			frontRoadWidth: frontRoadWidthz, typeOfRoad:typeOfRoadz, remark:remarkz, feature:featurez, room1:room1z, room2:room2z, 
			livingroom:livingroomz, bathroom:bathroomz, otherPattern:otherPatternz, facing:facingz, landHoldings:landHoldingsz, landArea: landAreaz, lighting:lightingz, sideRoom:sideRoomz,
			darkRoom:darkRoomz, mainMaterial:mainMaterialz, compartmentMaterial:compartmentMaterialz, outsideWall:outsideWallz, 
			status:statusz, securityGuard:securityGuardz, manageFee:manageFeez, amountOfManageFee:amountOfManageFeez,
			feeFrequency:feeFrequencyz, elementary:elementaryz, junior:juniorz, park:parkz, market:marketz, trMainRoad:trMainRoadz, 
			trLine:trLinez, trStation:trStationz, ownershipArea:ownershipAreaz, extensionArea:extensionAreaz,
			ratioOfPublic:calculateRatioOfPublic(), mainBuilding:mainBuildingz, subsidiaryBuilding:subsidiaryBuildingz, areaOfPublic:areaOfPublicz, 
			parkingSpace:parkingSpacez, pingOfParkingSpace:pingOfParkingSpacez, quantityOfParkingSpace:quantityOfParkingSpacez,
			numberOfParkingSpace:numberOfParkingSpacez, priceOfParkingSpace:priceOfParkingSpacez, depth:depthz, faceWidth:faceWidthz, 
			highCeiling:highCeilingz, highBeam:highBeamz, cargoElevator:cargoElevatorz, tonsOfCargoElevator:tonsOfCargoElevatorz,
			crane:cranez, tonsOfCrane:tonsOfCranez, bigElec:bigElecz, hpOfBigElec:hpOfBigElecz, basement:basementz, agency1:agency1z, 
			agency2:agency2z, agency3:agency3z, agency4:agency4z, agency5:agency5z, agency6:agency6z, house_pics_names:house_pics_names };
        await fetch('http://localhost:3002/api/addOneObject', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => { return res.json() })
        .then(res => {
            if(res.success){
				breaking = false;
				alert("完成新增文字項目！");
            }
            else {
				console.log(res)
				breaking = true;
				alert("請填寫所有必填項目！");
            }
		})
        .catch((err) => {
			breaking = true;
			console.error(err);
			alert("上傳失敗，請檢查所有項目是否填寫正確！");
		});
		if (breaking === false){
			const file1 = pattern_pic;
			if (file1 !== []){
				const formData_pattern = new FormData();
				formData_pattern.append('img', file1[0])
				console.log(file1)
				let uploadUrl = 'http://localhost:3002/api/upload_imgs/'+file1[0].name+'/pattern/'+contractNumz
				await fetch(uploadUrl, {
					method: 'POST',
					body: formData_pattern,
				}).then(res => {
					if(res.success){
						console.log("完成新增格局圖片！");
					}
				})
			}

			const file2 = house_pics;
			if (file2 !== []){
				let formData_house = "";
				for (let i=0; i<file2.length; i++){
					console.log("jjj");
					formData_house = new FormData();
					formData_house.append('img', file2[i])
					let uploadUrl = 'http://localhost:3002/api/upload_imgs/'+file2[i].name+'/house/'+contractNumz
					await fetch(uploadUrl, {
						method: 'POST',
						body: formData_house,
					}).then(res => {
						if(res.success){
							console.log("完成新增房屋圖片！");
						}
				})
				}
			}
			props.history.push('/home');
		}
    }

	var pattern_pic_ref = React.createRef();
	var house_pic_ref = React.createRef();
	//pictures
	var localUpload = e => {
        if(e.target.files.length === 0)
            setPattern_pic(null);
        else if(e.target.files.length === 1){
			setPattern_pic(e.target.files);
			setPattern_pic_name(e.target.files[0].name);
		}
		else{
			alert("上傳數量最多一張！")
		}
	}
	var localUpload2 = e => {
        if(e.target.files.length === 0)
            setHouse_pics(null);
        else if(e.target.files.length <= 6){
			var their_name = []
			console.log(e.target.files)
			setHouse_pics(e.target.files);
			for (var i = 0; i < e.target.files.length; i++){
				their_name.push(e.target.files[i].name);
			}
			setHouse_pics_names(their_name);
		}
		else{
			alert("上傳數量最多六張！")
		}

	}
	function handleChange(event, newValue) {
      setValue(newValue);
    }
    const edit = key => e => {
		if (key === "caseName"){
			setCaseName(e);
		}
		else if (key === "innerNum"){
			setInnerNum(e);
		}
		else if (key === "contractNum"){
			setContractNum(e);
		}
		else if (key === "contractPrice"){
			setContractPrice(e);
		}
		else if (key === "sellingPrice"){
			setSellingPrice(e);
		}
		
		else if (key === "buildingType"){
			setBuildingType(e);
		}
	
		else if (key === "usage"){
			setUsage(e);
		}
		else if (key === "caseStartDate"){
			setCaseStartDate(e);
		}
		else if (key === "caseFinishDate"){
			setCaseFinishDate(e);
		}
		else if (key === "constructFinishDate"){
			setConstructFinishDate(e);
		}
		else if (key === "city"){
			setCity(e);
		}
		else if (key === "district"){
			setDistrict(e);
		}
		else if (key === "village"){
			setVillage(e);
		}
		
		else if (key === "neighbor"){
			setNeighbor(e);
		}
		else if (key === "road"){
			setRoad(e);
		}
		
		else if (key === "section"){
			setSection(e);
		}
		else if (key === "lane"){
			setLane(e);
		}
		else if (key === "alley"){
			setAlley(e);
		}
		else if (key === "number1"){
			setNumber1(e);
		}
		else if (key === "number2"){
			setNumber2(e);
		}
		else if (key === "floor1"){
			setFloor1(e);
		}
		else if (key === "floor2"){
			setFloor2(e);
		}
		else if (key === "allUpFloor"){
			setAllUpFloor(e);
		}
		else if (key === "allDownFloor"){
			setAllDownFloor(e);
		}
		else if (key === "mrtArea"){
			setMrtArea(e);
		}
		else if (key === "mrtRoute1"){
			setMrtRoute1(e);
		}
		else if (key === "mrtRoute2"){
			setMrtRoute2(e);
		}
		else if (key ==="trMainRoad"){
			setTrMainRoad(e);
		}
		else if (key ==="trLine"){
			setTrLine(e)
		}
		else if (key ==="trStation"){
			setTrStation(e)
		}
		
		else if (key === "frontRoadWidth"){
			setFrontRoadWidth(e);
		}
		else if (key === "typeOfRoad"){
			setTypeOfRoad(e);
		}
		else if (key === "remark"){
			setRemark(e);
		}
		else if (key === "feature"){
			setFeature(e);
		}
		
		else if (key === "room1"){
			setRoom1(e);
		}
		else if (key === "room2"){
			setRoom2(e);
		}
		else if (key === "livingroom"){
			setLivingroom(e);
		}
		else if (key === "bathroom"){
			setBathroom(e);
		}
		else if (key === "otherPattern"){
			setOtherPattern(e);
		}
		else if (key === "facing"){
			setFacing(e);
		}
		else if (key === "landHoldings"){
			setLandHoldings(e);
		}
		else if (key === "landArea"){
			setLandArea(e);
		}
		else if (key === "lighting"){
			setLighting(e);
		}
		else if (key === "sideRoom"){
			setSideRoom(e);
		}
		else if (key === "darkRoom"){
			setDarkRoom(e);
		}
		else if (key === "mainMaterial"){
			setMainMaterial(e);
		}
		else if (key === "compartmentMaterial"){
			setCompartmentMaterial(e);
		}
		else if (key === "outsideWall"){
			setOutsideWall(e);
		}
		else if (key === "status"){
			setStatus(e);
		}
		else if (key === "securityGuard"){
			setSecurityGuard(e);
		}
		else if (key === "manageFee"){
			setManageFee(e);
		}
		else if (key === "boolManageFee"){
			setBoolManageFee(e)
		}
		else if (key === "amountOfManageFee"){
			setAmountOfManageFee(e);
		}
		else if (key === "feeFrequency"){
			setFeeFrequency(e);
		}
		else if (key === "elementary"){
			setElementary(e);
		}
		else if (key === "junior"){
			setJunior(e);
		}
		else if (key === "park"){
			setPark(e);
		}
		else if (key === "market"){
			setMarket(e);
		}
		else if (key === "ownershipArea"){
			setOwnershipArea(e);
		}
		else if (key === "extensionArea"){
			setExtensionArea(e);
		}
		else if (key === "ratioOfPublic"){
			setRatioOfPublic(e);
		}
		else if (key === "mainBuilding"){
			setMainBuilding(e);
		}
		else if (key === "subsidiaryBuilding"){
			setSubsidiaryBuilding(e);
		}		
		else if (key === "areaOfPublic"){
			setAreaOfPublic(e);
		}
		else if (key === "parkingSpace"){
			setParkingSpace(e);
		}
		else if (key === "boolParkingSpace"){
			setBoolParkingSpace(e);
		}
		else if (key === "pingOfParkingSpace"){
			setPingOfParkingSpace(e);
		}
		
		else if (key === "quantityOfParkingSpace"){
			setQuantityOfParkingSpace(e);
		}
		
		else if (key === "numberOfParkingSpace"){
			setNumberOfParkingSpace(e);
		}
		
		else if (key === "priceOfParkingSpace"){
			setPriceOfParkingSpace(e);
		}
		else if (key === "depth"){
			setDepth(e);
		}	
		else if (key === "faceWidth"){
			setFaceWidth(e);
		}
		else if (key === "highCeiling"){
			setHighCeiling(e);
		}
		else if (key === "highBeam"){
			setHighBeam(e);
		}
		else if (key === "cargoElevator"){
			setCargoElevator(e);
		}
		else if (key === "tonsOfCargoElevator"){
			setTonsOfCargoElevator(e);
		}
		else if (key === "boolCargoElevator"){
			setBoolCargoElevator(e)
		}
		else if (key === "crane"){
			setCrane(e);
		}
		else if (key === "tonsOfCrane"){
			setTonsOfCrane(e);
		}
		else if (key === "boolCrane"){
			setBoolCrane(e)
		}
		else if (key === "bigElec"){
			setBigElec(e);
		}
		else if (key === "hpOfBigElec"){
			setHpOfBigElec(e);
		}
		else if (key === "boolBigElec"){
			setBoolBigelec(e)
		}
		else if (key === "basement"){
			setBasement(e);
		}
		else if (key === "agency1"){
			setAgency1(e);
		}
		else if (key === "agency2"){
			setAgency2(e);
		}
		else if (key === "agency3"){
			setAgency3(e);
		}
		else if (key === "agency4"){
			setAgency4(e);
		}
		else if (key === "agency5"){
			setAgency5(e);
		}
		else if (key === "agency6"){
			setAgency6(e);
		}
		else if (key ==="ifDoneCaseName"){
			setIfDoneCaseName(e);
		}
		else if (key ==="saleStatus"){
			setSaleStatus(e);
		}
	
	
	}
	let address = () => {
		var villageCheck = () => {if(villagez !== "" ){return (villagez)}}
		var neighborCheck = () => {if(neighborz !== ""){return (neighborz+"鄰")}}
		var sectionCheck = () => {if(sectionz !== ""){return (sectionz+"段")}}
		var laneCheck = () => {if(lanez !== ""){return (lanez+"巷")}}
		var alleyCheck = () => {if(alleyz !== ""){return (alleyz+"弄")}}
		var numberCheck = () => {if(number1z !== ""){
			if (number2z !== ""){return(number1z+"號之"+number2z)}else{return(number1z+"號")}
		}}
		var floorCheck = () => {if(floor1z !== ""){
			if (floor2z !== ""){return(floor1z+"樓之"+floor2z)}else{return(floor1z+"樓")}
		}}
		if (cityz !== " " && districtz !== " " && roadz !== ""  && number1z !== ""){
			return(<t>{cityz}{districtz}{villageCheck()}&nbsp;{neighborCheck()}&nbsp;
			{roadz}&nbsp;{sectionCheck()}{laneCheck()}{alleyCheck()}<div>{numberCheck()}</div>
			{floorCheck()}</t>)
		}
	}
	let contractPriceUnit = () =>{
		if(contractPricez !=="")
			return contractPricez + "萬"
		else
			return ""
	
	}
	let patternSummary = () => {
		var roomCheck = () => {if (room1z !== ""){
			if (room2z !== ""){return(room1z+"+"+room2z+"房")}else{return(room1z+"房");};
		}};
		var livingroomCheck = () => {if (livingroomz !== ""){return(livingroomz+"廳");}};
		var bathroomCheck = () => {if (bathroomz !== ""){return(bathroomz+"衛");}};
	 	return(<t>{roomCheck()}{livingroomCheck()}{bathroomCheck()}</t>);
	}
	let startDateSummary = () => {
		return(caseStartDatez.getFullYear()+"/"+(caseStartDatez.getUTCMonth()+1)+"/"+caseStartDatez.getDate()); 
	}
	let finishDateSummary = () => {
		return(caseFinishDatez.getFullYear()+"/"+(caseFinishDatez.getUTCMonth()+1)+"/"+caseFinishDatez.getDate()); 
	}

    return (
      <div className='new_item-root'>
		<div className='new_item-bgcolor'></div>  
			<div><OverflowScrolling className='overflow-scrolling-inNewItem'>
            <AppBar  position="static" color="default">
            <CustomTabs
                value={value}
				onChange={handleChange}
				style={{marginTop: "12px",}}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
            >
                <CustomTab label="銷售物件" {...a11yProps(0)} />
                <CustomTab label="物件說明" {...a11yProps(1)} />
                <CustomTab label="建物說明" {...a11yProps(2)} />
                <CustomTab label="登記資料" {...a11yProps(3)} />
                <CustomTab label="圖片上傳" {...a11yProps(4)} />
                <CustomTab label="儲存確認" {...a11yProps(5)} />
                
            </CustomTabs>
            </AppBar>
            <TabPanel value={value} index={0}>
			  <AddItemPage1 changeFunc = {edit} caseName = {caseNamez} contractNum = {contractNumz} innerNum = {innerNumz}
			  contractPrice = {contractPricez} sellingPrice = {sellingPricez} buildingType = {buildingTypez}  usage = {usagez} caseStartDate = {caseStartDatez}
			  caseFinishDate = {caseFinishDatez} constructFinishDate = {constructFinishDatez} city = {cityz} district = {districtz}
			  village = {villagez}  neighbor = {neighborz} road = {roadz} 
			  section = {sectionz} lane = {lanez} alley = {alleyz} number1 = {number1z} number2 = {number2z} floor1 = {floor1z}
			  floor2 = {floor2z} allUpFloor = {allUpFloorz} allDownFloor = {allDownFloorz}
			  ifDoneCaseName = {ifDoneCaseNamez} saleStatus={saleStatusz}
			  
			  
			  
			  />
            </TabPanel>
            <TabPanel value={value} index={1}>
				<AddItemPage2 changeFunc = {edit} mrtArea = {mrtAreaz} mrtRoute1 = {mrtRoute1z} mrtRoute2 = {mrtRoute2z} 
				trMainRoad = {trMainRoadz} trLine = {trLinez} trStation = {trStationz}
				frontRoadWidth = {frontRoadWidthz} typeOfRoad = {typeOfRoadz} feature = {featurez} remark={remarkz}/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <AddItemPage3 changeFunc = {edit} room1 = {room1z} room2 = {room2z} livingroom = {livingroomz} bathroom = {bathroomz}
				otherPattern = {otherPatternz} facing = {facingz} landHoldings = {landHoldingsz} landArea = {landAreaz}
				lighting = {lightingz} sideRoom = {sideRoomz} darkRoom = {darkRoomz}
				mainMaterial = {mainMaterialz} compartmentMaterial = {compartmentMaterialz} outsideWall = {outsideWallz}
				status = {statusz} securityGuard = {securityGuardz} manageFee = {manageFeez} amountOfManageFee = {amountOfManageFeez}
				boolManageFee = {boolManageFeez}
				feeFrequency = {feeFrequencyz}
				elementary = {elementaryz} junior = {juniorz} park = {parkz}
				market = {marketz}/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <AddItemPage4 changeFunc = {edit} ownershipArea={ownershipAreaz} extensionArea = {extensionAreaz} ratioOfPublic = {ratioOfPublicz}
				mainBuilding = {mainBuildingz} subsidiaryBuilding ={subsidiaryBuildingz} areaOfPublic = {areaOfPublicz}
				parkingSpace = {parkingSpacez} pingOfParkingSpace = {pingOfParkingSpacez} boolParkingSpace = {boolParkingSpacez}
				quantityOfParkingSpace = {quantityOfParkingSpacez} 
				numberOfParkingSpace = {numberOfParkingSpacez} 
				priceOfParkingSpace = {priceOfParkingSpacez}  depth = {depthz}
				faceWidth = {faceWidthz} highCeiling = {highCeilingz} highBeam = {highBeamz} cargoElevator = {cargoElevatorz}
				tonsOfCargoElevator = {tonsOfCargoElevatorz} boolCargoElevator = {boolCargoElevatorz} crane = {cranez} tonsOfCrane = {tonsOfCranez}
				boolCrane = {boolCranez} bigElec = {bigElecz} hpOfBigElec={hpOfBigElecz} boolBigElec = {boolBigElecz} basement={basementz} 
				agency1 = {agency1z} agency2 = {agency2z} agency3 = {agency3z}
				agency4 = {agency4z} agency5 = {agency5z} agency6 = {agency6z}
				
				/>
            </TabPanel>
            <TabPanel value={value} index={4}>
			<div className="clear"></div>
            <div>
				<button type="image" className="upload-button" style={{marginLeft:"17%"}} onClick={e => pattern_pic_ref.click()}>
					<p style={{fontSize:"20px"}}>點此上傳格局圖(最多一張)</p>
                    <UploadIcon style={{ width: '60%', minHeight: '50%', maxHeight: '50%' }}/>
					<input ref={input => pattern_pic_ref = input} style={{ visibility: 'hidden'}} onChange={localUpload}
					type="file" name="file" accept="image/*"/>
					<p style={{fontSize:"15px", backgroundColor:"black"}}>{pattern_pic_name}</p>
                </button>
                <button type="image" className="upload-button" style={{marginLeft:"5%"}} onClick={e => house_pic_ref.click()}>
					<p style={{fontSize:"20px"}}>點此上傳實景圖(最多六張)</p>
                    <UploadIcon style={{ width: '60%', minHeight: '50%', maxHeight: '50%' }}/>
					<input ref={input => house_pic_ref = input} style={{ visibility: 'hidden'}} onChange={localUpload2}
					type="file" name="file" multiple  accept="image/*"/>
					{house_pics_names.map(a => (<div style={{fontSize:"15px", backgroundColor:"black"}}>{a}</div>))}
                </button>		
            </div>
			<div className="clear"></div>
            </TabPanel>
            <TabPanel value={value} index={5}>
		
				<table className = "new_item-confirm-table">
    				<tr>
        				<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">銷售物件</h1>
        				</td>
						<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">物件說明</h1>
        				</td>
						<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">建物說明</h1>
        				</td>
						<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">登記資料</h1>
        				</td>
					
					</tr>

    				<tr>
        				<td className = "new_item-td">
							物件案名：{innerNumz+caseNamez}<br></br>
							契約編號：{contractNumz}<br></br>
							委託售價：{contractPriceUnit()}<br></br>
							委託起始日期：{startDateSummary()}<br></br>
							委託終止日期：{finishDateSummary()}<br></br>
							屋齡：{calculateHouseAge()}年<br></br>
							每坪售價：{calculatePricePerPing()}萬<br></br>
							地址：<br></br>
							{address()}<br></br>
							
						</td>
       					<td className = "new_item-td">
            				捷運站：{mrtRoute2z}<br></br>
							台鐵：{trStationz}<br></br>
							面臨路寬：{frontRoadWidthz}<br></br>
							面鄰路型：{typeOfRoadz}
						</td>
						<td className = "new_item-td">
							格局 : {patternSummary()} <br></br>
							主要坐向：{facingz}<br></br>
							主要建材：{mainMaterialz}<br></br>
							使用現況：{statusz}<br></br>
							警衛或管理員：{securityGuardz}
						</td>	
						<td className = "new_item-td">
							權狀面積：{ownershipAreaz}坪<br></br>
							增建面積：{extensionAreaz}坪<br></br>
							公設比：{calculateRatioOfPublic()}%<br></br>
							主建物：{mainBuildingz}坪<br></br>
							附屬建物：{subsidiaryBuildingz}坪<br></br>
							公設面積：{areaOfPublicz}坪<br></br>
							車位：{parkingSpacez}<br></br>
							車位總數：{quantityOfParkingSpacez}<br></br>
							車位價格：{priceOfParkingSpacez}萬<br></br>
							經紀人：{agency1z}{agency2z}{agency3z}{agency4z}{agency5z}{agency6z}
						</td>
					
					
					
					
					</tr>
				</table>
				<BootstrapButton style={{width:"15%",marginLeft:"42.5%"}} onClick={addOneObject}>確認並儲存</BootstrapButton>
		   
	
		   
		   
		    </TabPanel>
			</OverflowScrolling></div>
        <div className="new_item-bgcolor2"></div>
        <div className='clear'></div>
      </div>
    );
  }