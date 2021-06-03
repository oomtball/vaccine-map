import React, { Component } from 'react';
import '../styles/PDFModel.css';
import axios from 'axios';
import {saveAs} from 'file-saver';

class PDFModel extends Component{
    
    constructor(props){
      super(props);
      this.state={
          name:'',
          receiptID:0,
          price1:0,
          price2:0,
      };
    }
    handelChange = ({target:{value,name}}) =>this.setState({[name]:value})
    
    createAndDownloadPdf = () =>{
        axios.post('http://localhost:3002/api/create-pdf',this.state)
        .then(() => axios.get('http://localhost:3002/api/fetch-pdf', { responseType:'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data], {type:'application/pdf'});
            var url = URL.createObjectURL(res.data);
            saveAs(pdfBlob, 'newPdf.pdf')
            console.log(this.state);
            return(url)
        }) 
    }
     
    render(){
            
        return(
            <div className="PDFModel" style ={{marginTop:"20%"}}>
                <input type ="text" placeholder="Name" name="name" onChange = {this.handelChange}/>
                <input type ="number" placeholder="Receipt ID" name="receiptID" onChange = {this.handelChange}/>
                <input type ="number" placeholder="Price1" name="price1" onChange = {this.handelChange}/>
                <input type ="number" placeholder="Price2" name="price2" onChange = {this.handelChange}/>
                <button onClick={this.createAndDownloadPdf}> Download Pdf </button>
            </div>
        );
    }
}

export default PDFModel;

