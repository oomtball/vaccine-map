import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

export default class GridType4 extends Component {
    handleChange = e => {
        this.props.changeFunc(e.target.value);
        if (this.props.checkBool === "boolManageFee"){
            if (e.target.value === "每坪"){
                this.props.changeFunc2(false);
            }
            else if (e.target.value === "每戶"){
                this.props.changeFunc2(false);
            }
            else{
                this.props.changeFunc2(true);
            }
        }
        else if (this.props.checkBool === "boolCargoElevator"){
            if (e.target.value === "有"){
                this.props.changeFunc2(false);
            }
            else{
                this.props.changeFunc2(true);
            }
        }
        else if (this.props.checkBool === "boolCrane"){
            if (e.target.value === "有"){
                this.props.changeFunc2(false);
            }
            else{
                this.props.changeFunc2(true);
            }
        }
        else if (this.props.checkBool === "boolBigElec"){
            if (e.target.value === "有"){
                this.props.changeFunc2(false);
            }
            else{
                this.props.changeFunc2(true);
            }
        }
        else if (this.props.checkBool === "boolParkingSpace"){
            if (e.target.value === "有"){
                this.props.changeFunc2(false);
            }
            else{
                this.props.changeFunc2(true);
            }
        }
        // console.log(e.target.value)
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
                error = {this.check()}
                InputProps ={{
                  
                }}
                style = {{width:this.props.width,marginLeft:8, marginRight:8, marginTop:15,
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
