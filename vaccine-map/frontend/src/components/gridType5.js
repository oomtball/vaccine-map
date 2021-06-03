import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

export default class GridType5 extends Component {
    handleChange = e => {
        this.props.changeFunc(e.target.value);
    }
    check = () =>{
        if(this.props.value ==="" && this.props.ifRequired ===true)
            return true;
        else
            return false; 

    }
   
   
   
    render() {
        return (
            <TextField
                id={this.props.id}
                label={this.props.label}
                multiline
                rows="6"
                margin="dense"
                variant="filled"
                value={this.props.value}
                error = {this.check()}
                onChange={this.handleChange}
                style = {{width:this.props.width, marginLeft:8, marginRight:8, marginTop:16,
                }}
            />
        );
    }
}
