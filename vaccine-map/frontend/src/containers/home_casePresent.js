import "../styles/home_casePresent.css"
import React, { Component } from "react";
import OverflowScrolling from 'react-overflow-scrolling';
import HomeCaseImg from '../components/home_case_img';
import testImagine from "../containers/images/testhouse.jpg"
import { NavLink } from "react-router-dom";

export  default class Home_casePresent extends Component{
    render(){
        return(
            <div className="home_casePresent-root">
                <div style={{marginTop:this.props.marginTop}} className ="home_casePresent-wall">
                    <OverflowScrolling className= "overflow-scrolling-inHome_casePresent">
                        <h1 style ={{marginLeft:"6%",marginBottom:"0%",}}>  {this.props.title}</h1>
                        <table>
                            <tr>
                                {this.props.objectsList1.map(row => (
                                    <td>
                                        <div>
                                            <NavLink to={{pathname:"./item_search/"+row.contractNum, aboutProps:{row:row}}}>
                                                <img className="home_case_img-img" 
                                                    src = {`http://localhost:3002/api/getHousePic/house/${row.contractNum}/${row.house_pics_names[0]}`} 
                                                    alt="">
                                                </img>
                                            </NavLink>
                                            <p className = "home_case_img-name"> {row.innerNum + row.caseName}</p>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                {this.props.objectsList2.map(row => (
                                    <td>
                                        <div>
                                            <NavLink to={{pathname:"./item_search/"+row.contractNum, aboutProps:{row:row}}}>
                                                <img className="home_case_img-img" 
                                                    src = {`http://localhost:3002/api/getHousePic/house/${row.contractNum}/${row.house_pics_names[0]}`} 
                                                    alt="">
                                                </img>
                                            </NavLink>
                                            <p className = "home_case_img-name"> {row.innerNum + row.caseName}</p>
                                        </div>
                                    </td>
                                ))}
                            </tr>
                        </table>
                    </OverflowScrolling>



                </div>
            </div>
        );    
    }
}