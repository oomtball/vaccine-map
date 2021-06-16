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
                <iframe src="https://public.tableau.com/views/2_16238412900410/1_1?:language=zh-TW&:display_count=n&:origin=viz_share_link&:showVizHome=no&:embed=true" width="1000" height="700"></iframe>
                <div className = "home-bgcolor2"></div>
                <div className = "home-clear"></div>
            </div>
        );
    }
}
