import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

export default class GridType3 extends Component {
    handleChange = e => {
        this.props.changeFunc(e.target.value);
    
    
    
    
    
    
    
    
    
    
    
    
    }
    handleValue = () => {
        if (this.props.boolDisabled === true){
            this.props.changeFunc("");
            return "";
        }
        return this.props.value;
    }
    
    check = () =>{
        if(this.props.value === "" && this.props.ifRequired === true)
            return true;
        else
            return false;
    }
    
    
    
    
    
    render() {
        return (
            <TextField
                error = {this.check()}
                id={this.props.id}
                label={this.props.label}
                disabled = {this.props.boolDisabled}
                margin="dense"
                variant="filled"
                value={this.handleValue()}
                onChange={this.handleChange}
                style = {{width:this.props.width, marginLeft:8, marginRight:8, marginTop:16,
                }}
            />
        );
    }
}
