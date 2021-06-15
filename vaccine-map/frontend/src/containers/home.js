import React, { Component } from "react";
import "../styles/home.css"
export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    // getLatestObjectsFromDb = async () => {
    //     await fetch("http://localhost:3002/api/getHomepageLatest")
    //     .then(res => { return res.json();})
    //     .then(res => ( this.setState({latestObjects: res.data}) ));
    // };
    // getOnSaleObjectsFromDb = async () => {
    //     await fetch("http://localhost:3002/api/getHomepageOnSale")
    //     .then(res => { return res.json();})
    //     .then(res => ( this.setState({onSaleObjects: res.data}) ));
    // };
    // componentDidMount() {
    //     window.scrollTo(0,0);
    //     this.getLatestObjectsFromDb()
    //     this.getOnSaleObjectsFromDb()
    // }
    render() {
        return (
           <div className = "home-root">     
                <div className="home-bgcolor"></div>
                abc
                <div className = "home-bgcolor2"></div>
                <div className = "home-clear"></div>
            </div>
        );
    }
}
