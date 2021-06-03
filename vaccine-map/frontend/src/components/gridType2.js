import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

export default class GridType extends Component {
    handleChange = e => {
        this.props.changeFunc(e.target.value);
    }
    render() {
        return (
            <TextField
                id={this.props.id}
                label={this.props.label}
                padding="20px 30px"
                margin="dense"
                variant="filled"
                value={this.props.value}
                onChange={this.handleChange}
                style = {{width:this.props.width, marginLeft:8, marginRight:8, marginTop:12, 
                }}
            />
        );
    }
}
