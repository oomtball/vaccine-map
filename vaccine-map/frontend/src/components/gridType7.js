import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

export default class GridType7 extends Component {
    handleChange = e => {
        this.props.changeFunc(e.target.value);
    }
    state = {readOnly : true}
    render() {
        const {readOnly} = this.state;
        return (
            <TextField
                inputProps={{
                    readOnly: Boolean(readOnly),
                    disabled: Boolean(readOnly),
                }}
                id={this.props.id}
                label={this.props.label}
            
                
                margin="dense"
                variant="filled"
                value={this.props.value}
                onChange={this.handleChange}
                style = {{width:this.props.width, marginLeft:8, marginRight:8, marginTop:16,
                }}
            />
        );
    }
}
