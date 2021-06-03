import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

export default class GridType1 extends Component {
    handleChange = e => {
        this.props.changeFunc(e.target.value);
    }
    render() {
        return (
                <TextField
                id={this.props.id}
                select
                label={this.props.label}
                SelectProps={{
                native: true,
                MenuProps: {
                    width: 200,
                },
                }}
                helperText={this.props.helperText}
                margin="dense"
                variant="filled"
                value={this.props.value}
                onChange={this.handleChange}
                InputProps ={{
                    
                }}
                style = {{width:this.props.width,marginLeft:8, marginRight:8, marginTop:12,
                        }}
                >
                {this.props.choices.map(option => (
                <option key={option.value} value={option.value}>
                    {option.label}
                </option>
                ))}
                </TextField>   
        );
    }
}
