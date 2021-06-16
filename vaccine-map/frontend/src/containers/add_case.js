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

import OverflowScrolling from 'react-overflow-scrolling';
import {BootstrapButton} from './BootstrapButton';
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
	const [user_namez, set_user_name] = React.useState("");
	const [user_idz, set_user_id] = React.useState("");
	const [genderz,set_gender] = React.useState("");
	const [birthdayz, set_birthday] = React.useState(new Date());

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

	const [vaccine_namez,set_vaccine_name] = React.useState("");
	const [vaccine_idz,set_vaccine_id] = React.useState("");
	const [vaccine_infoz,set_vaccine_info] = React.useState("");
	const [vaccination_datez, set__vaccination_date] = React.useState(new Date());
	
	const [waiting, setWaiting] = React.useState(false);
	const addOneCase = async () => {
		let breaking = true;
		// if (user_namez === "" || user_idz === "" || genderz === "" || birthdayz === "" || vaccine_namez === "" ||
		// vaccine_idz === "" || vaccine_infoz === "" || vaccination_datez === "" || cityz === "" || districtz === "" ||
		// roadz === "" ||number1z === ""){
		// 	alert("請填寫所有必填項目！!")
		// 	return null;		
		// }
        let data = {user_name:user_namez, user_id:user_idz, gender:genderz, birthday:birthdayz, city:cityz, district:districtz,
		village:villagez, neighbor:neighborz, road:roadz, section:sectionz, lane:lanez, alley:alleyz, number1:number1z, 
		number2:number2z, floor1:floor1z, floor2:floor2z, vaccine_name:vaccine_namez, vaccine_id:vaccine_idz, vaccine_info:vaccine_infoz,
		vaccination_date:vaccination_datez}
        await setWaiting(true);
		await fetch('http://localhost:3002/api/addOneCase', {
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
				alert("完成新增接種案例！");
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
	}

	function handleChange(event, newValue) {
      setValue(newValue);
    }
    const edit = key => e => {
		if (key === "user_name"){
			set_user_name(e);
		}
		else if (key === "user_id"){
			set_user_id(e);
		}
		else if (key === "gender"){
			set_gender(e);
		}
		else if (key === "birthday"){
			set_birthday(e);
		}
		else if (key === "vaccine_name"){
			set_vaccine_name(e);
		}
		else if (key === "vaccine_id"){
			set_vaccine_id(e);
		}
		else if (key === "vaccine_info"){
			set_vaccine_info(e);
		}
		else if (key === "vaccination_date"){
			set__vaccination_date(e);
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
	let birthday_summary = () => {
		return(birthdayz.getFullYear()+"/"+(birthdayz.getUTCMonth()+1)+"/"+birthdayz.getDate()); 
	}
	let vaccination_date_summary = () => {
		return(vaccination_datez.getFullYear()+"/"+(vaccination_datez.getUTCMonth()+1)+"/"+vaccination_datez.getDate()); 
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
                <CustomTab label="施打疫苗登記" {...a11yProps(0)} />
                <CustomTab label="儲存確認" {...a11yProps(1)} />
                
            </CustomTabs>
            </AppBar>
            <TabPanel value={value} index={0}>
			  <AddItemPage1 changeFunc = {edit} user_name = {user_namez} user_id = {user_idz} gender = {genderz}
			  birthday = {birthdayz} vaccine_name = {vaccine_namez} vaccine_id = {vaccine_idz} vaccine_info = {vaccine_infoz}
			  vaccination_date = {vaccination_datez}
			  city = {cityz} district = {districtz} village = {villagez} neighbor = {neighborz} road = {roadz} section = {sectionz}
			  lane = {lanez} alley = {alleyz} number1 = {number1z} number2 = {number2z} floor1 = {floor1z} floor2 = {floor2z} 
			  />
            </TabPanel>
            <TabPanel value={value} index={1}>
		
				<table className = "new_item-confirm-table">
    				<tr>
        				<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">施打人資訊</h1>
        				</td>
						<td  className = "new_item-confirm-title">
           					 <h1 className ="new_item-confirm-title-font">疫苗資訊</h1>
        				</td>
					</tr>

    				<tr>
        				<td className = "new_item-td">
							姓名：{user_namez}<br></br>
							身分證：{user_idz}<br></br>
							地址：<br></br>
							{address()}<br></br>
							生日：{birthday_summary()}<br></br>
							性別：{genderz}<br></br>
						</td>
       					<td className = "new_item-td">
            				施打疫苗名稱：{vaccine_namez}<br></br>
							疫苗編號：{vaccine_idz}<br></br>
							疫苗出產資訊：{vaccine_infoz}<br></br>
							施打日期：{vaccination_date_summary()}<br></br>
						</td>		
					</tr>
				</table>
				<BootstrapButton style={{width:"15%",marginLeft:"42.5%"}} onClick={addOneCase}>確認並儲存</BootstrapButton>
		   
	
		   
		   
		    </TabPanel>
			</OverflowScrolling></div>
        <div className="new_item-bgcolor2"></div>
        <div className='clear'></div>
      </div>
    );
  }