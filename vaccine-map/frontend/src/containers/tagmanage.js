import React, { Component } from "react";
import '../styles/item_search.css';
import Button from '@material-ui/core/Button';
import {withStyles} from '@material-ui/core/styles';
import '../styles/tagmanage.css';

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '8px solid',
      lineHeight: 1.5,
      backgroundColor: '#80cecd',
      borderColor: '#80cecd',
      color: '#ffffff',
      width:160,
      margin:'50px',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);



export default class tagmanage extends Component {
   
    render() {
        
        return (
            <div class = "tagmanage-root">
                <div className="tagmanage-bgcolor"></div>    
                <div style = {{display: 'inline', flexWrap: 'wrap', float: 'left'}} noValidate autoComplete="off">
                    <div >
                    <BootstrapButton >建築結構</BootstrapButton>
                    </div>
                    <div>
                    <BootstrapButton>建築外觀</BootstrapButton>
                    </div>
                    <div>
                    <BootstrapButton>建築隔間</BootstrapButton>
                    </div>
                    <div> 
                    <BootstrapButton>經紀人</BootstrapButton>    
                    </div>


                </div>

                <div className="mid-line"></div> 
            
            
            
            
            
            
            
            
            <div className="clear"></div>
            </div>
        );
    }
}
