import React, { Component } from "react";
import "../styles/home.css"
import HomeCasePresent from "./home_casePresent";


export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { latestObjects: [], onSaleObjects: [] };
    }
    getLatestObjectsFromDb = async () => {
        await fetch("http://localhost:3002/api/getHomepageLatest")
        .then(res => { return res.json();})
        .then(res => ( this.setState({latestObjects: res.data}) ));
    };
    getOnSaleObjectsFromDb = async () => {
        await fetch("http://localhost:3002/api/getHomepageOnSale")
        .then(res => { return res.json();})
        .then(res => ( this.setState({onSaleObjects: res.data}) ));
    };
    componentDidMount() {
        window.scrollTo(0,0);
        this.getLatestObjectsFromDb()
        this.getOnSaleObjectsFromDb()
    }
    render() {
        return (
           <div className = "home-root">     
                <div className="home-bgcolor"></div>
                <div className= "home-wall">
                    <HomeCasePresent className =" " title = "最新上市" marginTop = ""
                        objectsList1 = {this.state.latestObjects.slice(0, 5)}
                        objectsList2 = {this.state.latestObjects.slice(5, 10)}
                    >
                    </HomeCasePresent>
            

                    <HomeCasePresent className =" " title = "降價強攻" marginTop="4%"
                        objectsList1 = {this.state.onSaleObjects.slice(0, 5)}
                        objectsList2 = {this.state.onSaleObjects.slice(5, 10)}
                    >     
                    </HomeCasePresent>
                
                
                </div>
                
            
                
                
                
                
                
                
                
                
                
                
                
                <div className = "home-bgcolor2"></div>
                <div className = "home-clear"></div>
            </div>
        );
    }
}
