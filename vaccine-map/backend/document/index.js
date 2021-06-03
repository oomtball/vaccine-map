module.exports = ( tableBack ) => {
    const today = new Date();
var empty_censor = e =>{

    if(e !=undefined)
        return(e); 
    else
        return('暫無');
}

var empty_censor_10k = e =>{

    if(e !=undefined && e !="")
        return(e+' 萬'); 
    else
        return('暫無');
}

var empty_censor_ping = e =>{

    if(e !=undefined)
        return(e+' 坪'); 
    else
        return('暫無');
}

var empty_censor_section = e =>{

    if(e !=undefined)
        return(e+'段'); 
    else
        return('');
}

var empty_censor_ratio = e =>{

    if(e !=undefined)
        return(e+'%'); 
    else
        return('');
}

const CalPerPrice = function(price1,price2,ping)
{
    if(price2 !=undefined)
        return(Number(price2/ping));
    else    
        return(Number(price1/ping));

}

var ShowDate =  e =>{
    var return_date='';
    let fulldate = new Date(e);
    year = fulldate.getFullYear();
    month = Number(fulldate.getMonth())+1;
    month = String(month);
    date = fulldate.getDate();
    
    return_date = year + '年' + month + '月' + date + '日'; 
    return(return_date);

}
var houseAge = e => {
    var constructDate = new Date(e)
    var now = new Date()
    var year1 = constructDate.getFullYear()
    var year2 = now.getFullYear()
    if (constructDate.getMonth() <= now.getMonth()){
        x = String(year2 - year1) + ' 年'
        return(x)
    }
    else{
        x = String(year2 - year1 - 1) + ' 年'
        return(x)
    }

}

var SellingFloor = e =>{
    if (e!= undefined)
        return(e + '樓');
    else
        return('');

}

var AllFloor = e =>{
    
    if(e != undefined)
        return(e + ' 層');
    else
        return('');
}

var patternSummary = (room1,room2,livingroom,bathroom) => {

    var pattern='';
    if(room2 != undefined && room2 !=null && room2 != "0" && room2!=0)
        pattern = room1 + '+' + room2 + '房';
    else
        pattern = room1 + '房';
    if(livingroom != undefined)
        pattern = pattern + livingroom + '廳';
    else
        pattern = pattern + '0' + '廳';
    if(bathroom !=undefined)
        pattern = pattern + bathroom + '衛';
    else 
        pattern = pattern + '0' + '衛';

    console.log(pattern);
    return(pattern);
}

var MarketPark = (market, park) =>{
    
    mp = '';
    if(market != undefined)
        mp= mp + market;
    else
        mp= mp + '無';
    mp = mp + '/';
    if(park != undefined)
        mp= mp + park;
    else
        mp= mp + '無';

    return(mp);

}

var School = (junior, elementary) =>{
    je = '';
    if(junior != undefined)
        je = je + junior +'國中';
    else    
        je = je + '無';
    je = je + '/';
    if(elementary != undefined)
        je = je + elementary + '國小';
    else
        je = je + '無';
    
    return(je); 
}

var Meter = e =>{
    m = '';
    if(e != undefined)
        m = m + e +'米';
    else 
        m = 暫無資料;
    return(m);

}

var Tons = (e, tons) =>{
    cc = '';
    cc = e;
    
    if(e != undefined && e != '無') 
        cc = cc + '/' + tons + '米';
    else 
        return(cc);
    return(cc);
}

var Hp = (e, hp) =>{
    cc = '';
    cc = e;
    
    if(e != undefined && e != '無') 
        cc = cc + '/' + hp + '馬力';
    else 
        return(cc);
    return(cc);
}

var render_pic = (contractNum, house_pics_names) =>{
    let pic_set =[];
    for(let i = 0; i < house_pics_names.length; i++){
        pic_set.push(`http://localhost:3002/api/getHousePic/house/${contractNum}/${house_pics_names[i]}`);
    }
    for(i = house_pics_names.length; i < 4; i++){
        pic_set.push("");
    }
    return(pic_set);
}

var feature_render = feature =>{
    var tag ="";
    newarray = feature.split("\n");
    
    for(let i = 0; i < newarray.length; i ++){
        
       
        tag = tag + `<tr><td style= "font-size:3mm">${newarray[i]}</td></tr>` + '\n';
    }
    return(tag);
}




var pic_set = render_pic(tableBack.contractNum, tableBack.house_pics_names);



return(
  
`<!doctype html>
<html>
    <head>
    
        <meta charset="utf-8"></meta>
        <title>Pdf Result Template</title>
        <style>
        .page 
        {
            width: 210mm; /*隨著紙張大小異動*/
            min-height: 297mm;/*隨著紙張大小異動*/
            padding: 2mm;
            margin: 2mm auto;
            border: 1px #D3D3D3 solid;
            border-radius: 5px;
            background: white;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
        }
        .logo
        {
            width:80.8mm;
            height: 48mm; 
            margin:0px;
            padding: 0px;
        }
        .table
        {
            width: 210mm;
            border:0px #000000 solid ;
            height: 297mm;
        }
        .title
        {
            text-align:center;
            font-size: 12mm;
            margin-top:0px;
            
        }
        .title-box
        {
            margin-top:0px;
            width:100%;
        }
        .sub-title
        {
            text-align:center;
            font-size: 8mm;
        }
        
        .photo
        {
            width:79mm;
            height:50mm; 
        }    
        .properties
        {
            font-size: 4mm;
        }
        .area-price
        {
            font-size: 5mm;
            color:#064789;
        }
        .onsale-price
        {
            font-size: 6.5mm;
            color:#F2332D;
        }
        .properties-table
        {
            height: 100%;
            line-height: 0.5mm;
            padding: 0.5mm;
        }
        </style>
    </head>
    <body>
        <div class="page">
            <table class="table" cellpdding="0" border = "1">
                <tr >
                    <td>
               
                            <img class="logo" src ="http://localhost:3002/api/getPattern/pattern/logo">
                  
                    </td>
                    <td>
                        <table class="title-box">
                            <tr class="">
                                <td style={{width:"100%"}}>
                                    <h1 class ="title">不動產售屋流通表</h1>
                                </td>
                            </tr>
                            <tr class="sub-title">
                                <td >${empty_censor(tableBack.city)+empty_censor(tableBack.district)}  ${empty_censor(tableBack.innerNum)+empty_censor(tableBack.caseName)}</td>
                              
                                
                            </tr>    
                            
                        
                        </table>
                    
                    
                    </td>                   
                </tr>                 
            
                <tr>
                    <td>
                        <table>
                            <tr><td><img class="photo" src = "${pic_set[0]}"></td></tr>
                            <tr><td><img class="photo" src = "${pic_set[1]}"></td></tr>
                            <tr><td><img class="photo" src = "${pic_set[2]}" alt= ""></td></tr>
                            <tr><td><img class="photo" src = "http://localhost:3002/api/getPattern/pattern/${tableBack.contractNum}"></td></tr>
                        </table>
                    </td>
                    <td>
                        <table class="properties-table">
                            <tr> 
                                <td class="area-price">銷售總價:</td>
                                <td class="area-price">${empty_censor_10k(tableBack.contractPrice)}
                                <td class="area-price">權狀面積:</td>
                                <td class="area-price">${empty_censor_ping(tableBack.ownershipArea)}
                            </tr>
                            <tr>
                                <td class="onsale-price">最新降價:</td>
                                <td class="onsale-price">${empty_censor_10k(tableBack.sellingPrice)}
                                <td class="properties">物件地址:</td>
                                <td class="properties">${empty_censor(tableBack.road)+empty_censor_section(tableBack.section)}</td>
                            </tr>
                            <tr>
                                <td class="properties">主建物坪:</td>
                                <td class="properties">${empty_censor_ping(tableBack.mainBuilding)}</td>
                                <td class="properties">附屬建物:</td>
                                <td class="properties">${empty_censor_ping(tableBack.subsidiaryBuilding)}</td>
                            </tr>
                            <tr>
                                <td class="properties">公設坪數:</td>
                                <td class="properties">${empty_censor_ping(tableBack.areaOfPublic)}</td>
                                <td class="properties">車位坪數:</td>
                                <td class="properties">${empty_censor_ping(tableBack.pingOfParkingSpace)}</td>
                            </tr>
                            <tr>
                                <td class="properties">公設比:</td>
                                <td class="properties">${empty_censor_ratio(tableBack.ratioOfPublic)}</td>
                                <td class="properties">平均單價:</td>
                                <td class="properties">${empty_censor_10k(CalPerPrice(tableBack.contractPrice, tableBack.sellingPrice, tableBack.ownershipArea))}</td>
                            </tr>
                            <tr>
                                <td class="properties">委託類別:</td>
                                <td class="properties">${empty_censor(tableBack.buildingType)}</td>
                                <td class="properties">房屋用途:</td>
                                <td class="properties">${empty_censor(tableBack.usage)}</td>
                            </tr>
                            <tr>
                                <td class="properties">土地面積:</td>
                                <td class="properties">${empty_censor_ping(tableBack.landArea)}</td>
                                <td class="properties">土地持份:</td>
                                <td class="properties">${empty_censor(tableBack.landHoldings)}</td>
                            </tr>
                            <tr>
                                <td class="properties">竣工日期:</td>
                                <td class="properties">${ShowDate(tableBack.constructFinishDate)}</td>
                                <td class="properties">屋齡:</td>
                                <td class="properties">${houseAge(tableBack.constructFinishDate)}</td>
                            </tr>
                            <tr>
                                <td class="properties">建物樓高:</td>
                                <td class="properties">${AllFloor(tableBack.allUpFloor)}</td>
                                <td class="properties">出售樓層:</td>
                                <td class="properties">${SellingFloor(tableBack.floor1)}</td>
                            </tr>
                            <tr>
                                <td class="properties">建物外觀:</td>
                                <td class="properties">${empty_censor(tableBack.outsideWall)}</td>
                                <td class="properties">隔間:</td>
                                <td class="properties">${empty_censor(tableBack.sideRoom)}</td>
                            </tr>
                            <tr>
                                <td class="properties">室內格局:</td>
                                <td class="properties">${patternSummary(tableBack.room1,tableBack.room2,tableBack.livingroom,tableBack.bathroom)}</td>
                                <td class="properties">建築結構:</td>
                                <td class="properties">${empty_censor(tableBack.mainMaterial)}</td>
                            </tr>
                            <tr>
                                <td class="properties">增建格局:</td>
                                <td class="properties">${empty_censor(tableBack.otherPattern)}</td>
                                <td class="properties">物件座向:</td>
                                <td class="properties">${empty_censor(tableBack.facing)}</td>
                            </tr>
                            <tr>
                                <td class="properties">停車位:</td>
                                <td class="properties">${empty_censor(tableBack.parkingSpace)}</td>
                                <td class="properties">車位價格:</td>
                                <td class="properties">${empty_censor_10k(tableBack.priceOfParkingSpace)}</td>
                            </tr>
                            <tr>
                                <td class="properties">警衛管理:</td>
                                <td class="properties">${empty_censor(tableBack.securityGuard)}</td>
                                <td class="properties">車位編號:</td>
                                <td class="properties">${empty_censor(tableBack.numberOfParkingSpace)}</td>
                            </tr>
                            <tr>
                                <td class="properties">市場公園:</td>
                                <td class="properties">${MarketPark(tableBack.market, tableBack.park)}</td>
                                <td class="properties">國中國小學區:</td>
                                <td class="properties">${School(tableBack.junior,tableBack.elementary)}</td>
                            </tr>
                            <tr>
                                <td class="properties">巷道:</td>
                                <td class="properties">${Meter(tableBack.frontRoadWidth)}</td>
                                <td class="properties">路寬:</td>
                                <td class="properties">${empty_censor(tableBack.typeOfRoad)}</td>
                            </tr>
                            <tr>
                                <td class="properties">面寬:</td>
                                <td class="properties">${Meter(tableBack.faceWidth)}</td>
                                <td class="properties">深度:</td>
                                <td class="properties">${Meter(tableBack.depth)}</td>
                            </tr>
                            <tr>
                                <td class="properties">挑高:</td>
                                <td class="properties">${Meter(tableBack.highCeiling)}</td>
                                <td class="properties">樑下:</td>
                                <td class="properties">${Meter(tableBack.highBeam)}</td>
                            </tr>
                            <tr>
                                <td class="properties">天車:</td>
                                <td class="properties">${Tons(tableBack.crane, tableBack.tonsOfCrane)}</td>
                                <td class="properties">貨梯:</td>
                                <td class="properties">${Tons(tableBack.cargoElevator, tableBack.tonsOfCargoElevator)}</td>
                            </tr>
                            <tr>
                                <td class="properties">大電:</td>
                                <td class="properties">${Hp(tableBack.bigElec, tableBack.hpOfBigElec)}</td>
                                <td class="properties">地下室:</td>
                                <td class="properties">${empty_censor(tableBack.basement)}</td>
                            </tr>
                        </table>
                    </td>
                
                </tr>
                <tr style = "padding: 1mm" >
                   <td colspan="2">
                        <table style = "margin-left:5mm">
                            <tr><td style="font-size:3mm">物件優點：</td></tr>
                            ${feature_render(tableBack.feature)}
                        
                        
                        </table>
                   </td>
                </tr>
            
            
            
            </table>
        </div>
    </body>
    <footer>
    </footer>

</html>`

)}