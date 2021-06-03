import "../styles/home_case_img.css"
import React, { Component } from "react";



export default class Home_case_img extends Component{

    render(){

    
    
        return(
            <div >
         
                    <img className="home_case_img-img" src = {this.props.src} alt=""></img>
                
                    <p className = "home_case_img-name"> {this.props.img_name}</p>
              
            </div>
        );    
    }
}