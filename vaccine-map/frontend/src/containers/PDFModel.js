import React, { Component } from 'react';
import '../styles/PDFModel.css';
import axios from 'axios';
import {saveAs} from 'file-saver';

class PDFModel extends Component{
    
    state={
        name:'',
        receiptID:0,
        price1:0,
        price2:0,
    }
    
    handelChange = ({target:{value,name}}) =>this.setState({[name]:value})
    
    createAndDownloadPdf = () =>{
        axios.post('http://localhost:3002/api/create-pdf',this.state)
        .then(() => axios.get('http://localhost:3002/api/fetch-pdf', { responseType:'blob'}))
        .then((res) => {
            const pdfBlob = new Blob([res.data], {type:'application/pdf'});
        
            saveAs(pdfBlob, 'newPdf.pdf');
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




   // let pdf = this.createAndDownloadPdf;
        // var test = pdf =>{
        //     return(
        //       <PDFViewer
        //       document = {{
        //         url:pdf,
        //       }}
        //       />
        //     )


        // }