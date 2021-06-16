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
                <div class='tableauPlaceholder' id='viz1623841366347' style={{position: "relative"}}>
                    <noscript>
                        <a href='#'>
                            <img alt='儀表板窗格 1 ' src='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;2_&#47;2_16238412900410&#47;1_1&#47;1_rss.png' style={{border:"none"}} />
                        </a>
                    </noscript>
                    <object class='tableauViz'  style={{display:"none"}}>
                        <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
                        <param name='embed_code_version' value='3' /> 
                        <param name='site_root' value='' />
                        <param name='name' value='2_16238412900410&#47;1_1' />
                        <param name='tabs' value='no' />
                        <param name='toolbar' value='yes' />
                        <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;2_&#47;2_16238412900410&#47;1_1&#47;1.png' />
                        <param name='animate_transition' value='yes' />
                        <param name='display_static_image' value='yes' />
                        <param name='display_spinner' value='yes' />
                        <param name='display_overlay' value='yes' /><param name='display_count' value='yes' />
                        <param name='language' value='zh-TW' />
                    </object>
                </div>                
                {/* <script type='text/javascript'>                    
                var divElement = document.getElementById('viz1623841366347');                    
                var vizElement = divElement.getElementsByTagName('object')[0];                    
                if ( divElement.offsetWidth > 800 ) { 
                    vizElement.style.width='1000px';
                    vizElement.style.height='827px';
                } 
                else if ( divElement.offsetWidth > 500 ) {
                    vizElement.style.width='1000px';
                    vizElement.style.height='827px';
                } 
                else { 
                    izElement.style.width='100%';
                    vizElement.style.height='1527px';
                }                     
                var scriptElement = document.createElement('script');                    
                scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';                    
                vizElement.parentNode.insertBefore(scriptElement, vizElement);                
                </script> */}
                <div className = "home-bgcolor2"></div>
                <div className = "home-clear"></div>
            </div>
        );
    }
}
