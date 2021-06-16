const mongoose = require("mongoose");
var cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const multer = require('multer');
var fs = require('fs');
var mongodb = require('mongodb');
const Schema = mongoose.Schema;
const GridFsStorage = require('multer-gridfs-storage');
const Grid = require('gridfs-stream');
const methodOverride = require('method-override');
Grid.mongo = mongoose.mongo;
const User = require("./user")
const File = require("./file")
const Objects = require("./objects")

const {Bigtable} = require('@google-cloud/bigtable');
const bigtable = new Bigtable();
// Connect to an existing instance:my-bigtable-instance
const instance = bigtable.instance("app-database");
// Connect to an existing table:my-table
const tableID = "vaccination-record";
const table = instance.table(tableID);
const COLUMN_FAMILY_ID = "vaccination-family";
const COLUMN_QUALIFIER = "vacs";

const express = require('express')
const app = express()
app.use(cors());
const router = express.Router();
const API_PORT = 3002
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
router.use(methodOverride('_method'))
router.use(logger("dev"));
app.set('view engine', 'ejs')

router.post('/addOneCase', (req, res) => {
    temp = req.body;
    const vacs = [temp.user_name, temp.user_id, temp.gender, temp.birthday, temp.city, temp.district, temp.village, temp.neighbor,
    temp.road, temp.section, temp.lane, temp.alley, temp.number1, temp.number2, temp.floor1, temp.floor2, temp.vaccine_name,
    temp.vaccine_id, temp.vaccine_info, temp.vaccination_date];
    const rowsToInsert = {
      key: temp.user_id + "-" + temp.vaccine_id,
      data: {
        "profile": {
          "user_name": {timestamp: new Date(), value: temp.user_name},
          "user_id": {timestamp: new Date(), value: temp.user_id},
          "temp_gender": {timestamp: new Date(), value: temp.gender},
          "birthday": {timestamp: new Date(), value: temp.birthday},
          "city": {timestamp: new Date(), value: temp.city},
          "district": {timestamp: new Date(), value: temp.city},
          "village": {timestamp: new Date(), value: temp.village},
          "neighbor": {timestamp: new Date(), value: temp.neighbor},
          "road": {timestamp: new Date(), value: temp.road},
          "section": {timestamp: new Date(), value: temp.section},
          "lane": {timestamp: new Date(), value: temp.lane},
          "alley": {timestamp: new Date(), value: temp.alley},
          "number1": {timestamp: new Date(), value: temp.number1},
          "number2": {timestamp: new Date(), value: temp.number2},
          "floor1": {timestamp: new Date(), value: temp.floor1},
          "floor2": {timestamp: new Date(), value: temp.floor2},
        },
        "vaccination": {
          "vaccine_name": {timestamp: new Date(), value: temp.vaccine_name},
          "vaccine_id": {timestamp: new Date(), value: temp.vaccine_id},
          "vaccine_info": {timestamp: new Date(), value: temp.vaccine_info},
          "vaccination_date": {timestamp: new Date(), value: temp.vaccination_date},
        },
      },
    };
    table.insert(rowsToInsert);
    res.json({ success: true })
    // .catch((err) => {
    //   console.error(err);
    // })
})
const getRows = row => {
	return row.data["profile"]["city"][0].value;
};
async function getRowData() {
	const filter = [
		{
		  column: {
			cellLimit: 1, // Only retrieve the most recent version of the cell.
		  },
		},
	  ];
	  
	// console.log('Reading a single row by row key');
	// const [singleRow] = await table.row('vac0').get({filter}); // change the number behind greeting will get the different words!
	// console.log(`\tRead: ${getRows(singleRow)}`);

	let return_data = {};
	table.createReadStream({filter: filter/*, prefix: 'watame'*/})
    .on('data', row => {
      // Do something about the row object
    //   console.log(`The id (key) of the row: ${row.id}`);
    //   console.log('The data of the row object:');
    //   console.log(row.data);
      // retrieve all column families
      for(let cf in row.data){
        console.log(`\tcolumnfamily ${cf}`);
        // retrieve all columns
        for(let c in row.data[cf]){
          // retrieve the real data in the most recent cell
          console.log(`\t\tcolumn ${cf}:${c}, content: ${row.data[cf][c][0].value}`);
          // equivalent to getRowGreeting(row)
        }
      }
    });
};
router.post('/searchCase1', (req, res) => {
  console.log(req.body);
  const searchFactor = req.body;
  const filter = [
    {
      column: {
        cellLimit: 1, // Only retrieve the most recent version of the cell.
      },
    },
    {
      row: new RegExp('\\d+-' + searchFactor.vaccine_id),
    }
  ];
  // Get rows that matches the vaccine ID in row key
  // It is better to put all the factors on the key,
  // so that the whole search can be down in one line.
  const base_rows = table.getRows({filter: filter});
  // Filter the rows matching the constraints
  // using the built-in filter in javascript.
  const result_rows = base_rows.filter(row => {
    return
      row.data['profile']['city'][0].value == searchFactor.city &&
      row.data['profile']['district'][0].value == searchFactor.district &&
      row.data['profile']['road'][0].value == searchFactor.road;
  });
  return res.json({ success: true, data: result_rows });
})

router.post('/searchCase2', (req, res) => {
  console.log(req.body);
  return res.json({ success: true });
})

async function initializeTable(){
  const [tableExists] = await table.exists();
  if(!tableExists){
    console.log(`Creating table ${tableID}`);
    // This is the main structure of the table
    const options = {
      families: [
        {
          name: "profile",
          rule: {
            versions: 1
          }
        },
        {
          name: "vaccination",
          rule: {
            versions: 1
          }
        }
      ]
    };
    await table.create(options);
  }
  console.log(`Table ${tableID} is ready.`);
}
initializeTable();

// async function quickstart() {
  
//   console.log('Write some greetings to the table');
//     const greetings = ['Hello World!', 'Hello Bigtable!', 'Hello Node!'];
//     const rowsToInsert = greetings.map((greeting, index) => ({
//       // Note: This example uses sequential numeric IDs for simplicity, but this
//       // pattern can result in poor performance in a production application.
//       // Rows are stored in sorted order by key, so sequential keys can result
//       // in poor distribution of operations across nodes.
//       //
//       // For more information about how to design an effective schema for Cloud
//       // Bigtable, see the documentation:
//       // https://cloud.google.com/bigtable/docs/schema-design
//       key: `greeting${index}`,
//       data: {
//         [COLUMN_FAMILY_ID]: {
//           [COLUMN_QUALIFIER]: {
//             // Setting the timestamp allows the client to perform retries. If
//             // server-side time is used, retries may cause multiple cells to
//             // be generated.
//             timestamp: new Date(),
//             value: greeting,
//           },
//         },
//       },
//     }));
//     await table.insert(rowsToInsert);

//     const filter = [
//       {
//         column: {
//           cellLimit: 1, // Only retrieve the most recent version of the cell.
//         },
//       },
//     ];

//     console.log('Reading a single row by row key');
//     const [singleRow] = await table.row('greeting1').get({filter}); // change the number behind greeting will get the different words!
//     console.log(`\tRead: ${getRowGreeting(singleRow)}`);
// }
// quickstart();

async function getAllData(){
  const filter = [
    {
      column: {
        cellLimit: 1, // Only retrieve the most recent version of the cell.
      },
    },
  ];
  // get single row by key
  // let row = table.row(key);

  // get all rows
  // you can restrict what rows you want by prefix of the row key, etc.
  table.createReadStream({filter: filter/*, prefix: 'watame'*/})
    .on('data', row => {
      // Do something about the row object
      console.log(`The id (key) of the row: ${row.id}`);
      console.log('The data of the row object:');
      console.log(row.data);
      // retrieve all column families
      for(let cf in row.data){
        console.log(`\tcolumnfamily ${cf}`);
        // retrieve all columns
        for(let c in row.data[cf]){
          // retrieve the real data in the most recent cell
          console.log(`\t\tcolumn ${cf}:${c}, content: ${row.data[cf][c][0].value}`);
          // equivalent to getRowGreeting(row)
        }
      }
    });
}
getAllData();
app.use("/api", router);
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));

// const API_PORT = 3002;
// const app = express();
// app.use(cors());
// const router = express.Router();

// // this is our MongoDB database
// const dbRoute = "mongodb://oomtball:123@objects-shard-00-00-o15da.mongodb.net:27017,objects-shard-00-01-o15da.mongodb.net:27017,objects-shard-00-02-o15da.mongodb.net:27017/test?ssl=true&replicaSet=Objects-shard-0&authSource=admin&retryWrites=true&w=majority"

// router.use(bodyParser.urlencoded({ extended: false }));
// router.use(bodyParser.json());
// router.use(methodOverride('_method'))
// router.use(logger("dev"));
// app.set('view engine', 'ejs')
// // connects our back end code with the database
// //const conn = mongoose.createConnection(dbRoute);
// mongoose.connect(
//   dbRoute,
//   { useNewUrlParser: true }
// );

// let conn = mongoose.connection;
// let gfs;
// let gridFSBucket;
// conn.once("open", () => {
//   console.log("connected to the database")
//   gridFSBucket = new mongoose.mongo.GridFSBucket(conn.db);
//   gfs = Grid(conn.db, mongoose.mongo);  
// });

// // checks if connection with the database is successful
// conn.on("error", console.error.bind(console, "MongoDB connection error:"));

// const storage = new GridFsStorage({
//   url: dbRoute,
//   root: 'img',
//   filename: (req, file, cb) => {
//     // The way you want to store your file in database
//     if (req.params.filename != ""){
//       cb(null, req.params.filename);
//     }
//   },
//   // Additional Meta-data that you want to store
//   metadata: function(req, file, cb) {
//     cb(null, { usage: req.params.usage, contractNum: req.params.contractNum });
//   }
// });

// const upload = multer({ storage })
// // // all POST ------------------------------------------------------
// router.post('/upload_imgs/:filename/:usage/:contractNum', upload.single('img'), (req, res) => {
//   return res.json({ success: true });
// });

// router.post('/addOneAgent', (req, res) => {
//   let user = new User();
//   const {name, account, password, shop, phoneNum, title, inService} = req.body;
//   if (!name || !account || !password || !shop || !phoneNum ||
//     !title || !inService) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//   User.count({}, function(err, result){
//     if (err){
//       res.send(err)
//     }
//     else{
//       user.number = result + 1
//       user.name = name
//       user.account = account
//       user.password = password
//       user.shop = shop
//       user.phoneNum = phoneNum
//       user.title = title
//       user.inService = inService
//       user.save(err => {
//       if (err) {console.log(err);return res.json({ success: false, error: err });}
//         return res.json({ success: true });
//       });
//       }
//     })
// })

// router.post('/addOneObject', (req, res) => {
//   let data = new Objects();
//   const { caseName, innerNum, contractNum, contractPrice, sellingPrice, buildingType, usage, caseStartDate,
//     caseFinishDate, constructFinishDate, city, district, village, neighbor, road, section, lane,
//     alley, number1, number2, floor1, floor2, allUpFloor, allDownFloor, mrtArea, mrtRoute1, mrtRoute2,
//     frontRoadWidth, typeOfRoad, remark, feature, room1, room2, livingroom, bathroom, otherPattern, facing, lighting, 
//     landHoldings, landArea, sideRoom, houseAge, pricePerPing,
//     darkRoom, mainMaterial, compartmentMaterial, outsideWall, status, securityGuard, manageFee, amountOfManageFee,
//     feeFrequency, elementary, junior, park, market, trMainRoad, trLine, trStation, ownershipArea, extensionArea,
//     ratioOfPublic, mainBuilding, subsidiaryBuilding, areaOfPublic, parkingSpace, pingOfParkingSpace, quantityOfParkingSpace,
//     numberOfParkingSpace, priceOfParkingSpace, depth, faceWidth, highCeiling, highBeam, cargoElevator, tonsOfCargoElevator,
//     crane, tonsOfCrane, bigElec, hpOfBigElec, basement, agency1, agency2, agency3, agency4, agency5, agency6, house_pics_names } = req.body;

//   if (!caseName || !contractNum || !innerNum || !contractPrice || !buildingType || !usage ||
//     !city || !district || !road || !number1 || !allUpFloor || !allDownFloor || !feature || !room1 ||
//     !livingroom || !bathroom || !mainMaterial || !mainBuilding || !subsidiaryBuilding || !areaOfPublic) {
//     return res.json({
//       success: false,
//       error: "INVALID INPUTS"
//     });
//   }
//     data.caseName = caseName; 
//     data.innerNum = innerNum;
//     data.contractNum = contractNum; 
//     data.contractPrice = contractPrice;
//     data.sellingPrice = sellingPrice;
//     data.buildingType = buildingType;
//     data.usage = usage;
//     data.caseStartDate = caseStartDate;
//     data.caseFinishDate = caseFinishDate;
//     data.constructFinishDate = constructFinishDate;
//     data.houseAge = houseAge;
//     data.pricePerPing = pricePerPing;
//     data.city = city;
//     data.district = district;
//     data.village = village;
//     data.neighbor = neighbor;
//     data.road = road;
//     data.section = section;
//     data.lane = lane;
//     data.alley = alley; data.number1 = number1; data.number2 = number2; data.floor1 = floor1; data.floor2 = floor2;
//     data.allUpFloor = allUpFloor; data.allDownFloor = allDownFloor; data.mrtArea = mrtArea; 
//     data.mrtRoute1 = mrtRoute1; data.mrtRoute2 = mrtRoute2; data.frontRoadWidth = frontRoadWidth; data.typeOfRoad = typeOfRoad;
//     data.remark=remark; data.feature = feature; data.room1 = room1; data.room2 = room2; data.livingroom = livingroom; data.bathroom = bathroom; 
//     data.otherPattern = otherPattern; data.facing = facing; data.lighting = lighting; data.landHoldings = landHoldings; 
//     data.landArea = landArea; data.sideRoom = sideRoom;
//     data.darkRoom = darkRoom; data.mainMaterial = mainMaterial; data.compartmentMaterial = compartmentMaterial; 
//     data.outsideWall = outsideWall; data.status = status; data.securityGuard = securityGuard; data.manageFee = manageFee; 
//     data.amountOfManageFee = amountOfManageFee; data.feeFrequency = feeFrequency; data.elementary = elementary; 
//     data.junior = junior; data.park = park; data.market = market; data.trMainRoad = trMainRoad; data.trLine = trLine; 
//     data.trStation = trStation; data.ownershipArea = ownershipArea; data.extensionArea = extensionArea;
//     data.ratioOfPublic = ratioOfPublic; data.mainBuilding = mainBuilding; data.subsidiaryBuilding = subsidiaryBuilding; 
//     data.areaOfPublic = areaOfPublic; data.parkingSpace = parkingSpace; data.pingOfParkingSpace = pingOfParkingSpace; 
//     data.quantityOfParkingSpace = quantityOfParkingSpace; data.numberOfParkingSpace = numberOfParkingSpace; 
//     data.priceOfParkingSpace = priceOfParkingSpace; data.depth = depth; data.faceWidth = faceWidth; data.highCeiling = highCeiling; 
//     data.highBeam = highBeam; data.cargoElevator = cargoElevator; data.tonsOfCargoElevator = tonsOfCargoElevator;
//     data.crane = crane; data.tonsOfCrane = tonsOfCrane; data.bigElec = bigElec; data.hpOfBigElec = hpOfBigElec; 
//     data.basement = basement; data.agency1 = agency1; data.agency2 = agency2; data.agency3 = agency3; data.agency4 = agency4; 
//     data.agency5 = agency5; data.agency6 = agency6; data.house_pics_names = house_pics_names;

//   data.save(err => {
//     if (err) {console.log(err);return res.json({ success: false, error: err });}
//     return res.json({ success: true });
//   });
// });

// // update an object
// router.post("/updateObject", (req, res) => {
//   const { contractNum, update } = req.body;
//   Objects.findOneAndUpdate({ contractNum: contractNum }, update, err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// router.post("/updateUser", (req, res) => {
//   const { account, update } = req.body;
//   console.log(update.shop)
//   User.findOneAndUpdate({ account: account }, update, err => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// });

// router.delete("/deletePattern_pic/:contractNum/:id", (req, res) => {
//   // gfs.collection('img')
//   // gfs.chunks.deleteOne({files_id: req.params.id}, (err, data) => {
//   //   if (err) return res.json({ success: false, error: err });
//   // });
//   gfs.collection('img');
//   gfs.files.deleteOne({ "metadata.contractNum": req.params.contractNum, "metadata.usage":"pattern" }, (err) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true });
//   });
// })

// router.delete("/deleteHouse_pics/:contractNum", (req, res) => {
//   gfs.collection('img');
//   if (req.params.contractNum !== undefined){
//     gfs.files.deleteMany({ "metadata.contractNum": req.params.contractNum, "metadata.usage":"house" }, (err) => {
//       if (err) return res.json({ success: false, error: err });
//       return res.json({ success: true });
//     });
//   } 
// })

// // all GET ---------------------------------------------------------
// // get all users
// router.post("/getUser", (req, res) => {
//   const {account, password} = req.body;
//   var a = {account:account, password:password}
//   User.find(a, (err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   })
// });
// // get homepage latest 10 objects
// router.get("/getHomepageLatest", (req, res) => {
//   Objects.find((err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   }).sort({caseStartDate:1}).limit(10);
// });
// // get homepage latest 10 onsale objects
// router.get("/getHomepageOnSale", (req, res) => {
//   Objects.find({sellingPrice:{$ne:""}}, (err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   }).sort({caseStartDate:1}).limit(10);
// });
// // router.get("/getPattern/:usage/:contractNum", (req, res) => {
// //   gfs.collection('img'); //set collection name to lookup into
// //     /** First check if file exists */
// //     gfs.files.find({ "metadata.contractNum": req.params.contractNum, "metadata.usage":req.params.usage }).toArray(function(err, files){
// //         if(!files || files.length === 0){
// //             // return res.status(404).json({
// //             //     responseCode: 1,
// //             //     responseMessage: "error"
// //             // });
// //             return res.json({ success: true, data: []});
// //         }
// //         return res.json({success: true, data:files});
// //     });
// // });

// router.get("/getPattern/:usage/:contractNum/", (req, res) => {
//   gfs.collection('img'); //set collection name to lookup into
//     /** First check if file exists */ 
//     gfs.files.findOne({ "metadata.contractNum": req.params.contractNum, "metadata.usage": "pattern"}, (err, file) => {
//       // Check if file
//       if (!file || file.length === 0) {
//         return res.status(404).json({
//           err: 'No file exists',
//         })
//       }
//       if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
//         if (req.params.usage === "pattern"){
//           res.set("Content-Type", file.contentType);
//           const readstream = gfs.createReadStream(file.filename);
//           readstream.pipe(res);
//         }
//         else if (req.params.usage === "files"){
//           return res.json({success: true, data:file});
//         }
//       } else {
//         console.log("hi")
//         res.status(404).json({
//           err: 'Not an image',
//         })
//       }
//     });
// });
// router.get("/getHousePics/:usage/:contractNum", (req, res) => {
//   gfs.collection('img'); //set collection name to lookup into
//   console.log(req.params.usage)
//   /** First check if file exists */
//   if (req.params.contractNum !== undefined){
//     gfs.files.find({ "metadata.usage": "house", "metadata.contractNum": req.params.contractNum})
//     .toArray(function(err, files){
//         if(!files || files.length === 0){
//           return res.status(404).json({
//             err: 'No file exists',
//           })
//         }
//         if (req.params.usage === "files"){
//           return res.json({success: true, data:files});
//         }
//         //return res.json({success: true, data:files});
//     });
//   } 
// });
// router.get("/getHousePic/:usage/:contractNum/:filename", (req, res) => {
//   gfs.collection('img'); //set collection name to lookup into
//     /** First check if file exists */
//     if (req.params.filename !== undefined){
//       gfs.files.find({ "metadata.usage": "house", "metadata.contractNum": req.params.contractNum, filename: req.params.filename})
//       .toArray(function(err, files){
//           if(!files || files.length === 0){
//             return res.status(404).json({
//               err: 'No file exists',
//             })
//           }
//           if (req.params.usage === "house"){
//             res.set("Content-Type", files[0].contentType);
//             const readstream = gfs.createReadStream(files[0].filename);
//             readstream.pipe(res);
//           }
//           //return res.json({success: true, data:files});
//       });
//     }
// });
// router.post("/findSomeAgents/", (req, res) => {
//   const {name, shop, title} = req.body;
//     var a = {}
//     if (name !== "") {a.name = new RegExp(name)}
//     if (shop !== "") {a.shop = shop}
//     if (title !== "") {a.title = title}
  
//   User.find(a, (err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   })
// });

// router.post("/findSomeObjects/", (req, res) => {
//   const {city, district, road, vaccineType, mrtStation,
//     saleStatus, salesperson, number, totalPrice, totalPrice2,
//     pricePerPing, pricePerPing2, ping, ping2, landHolding, landHolding2,
//     houseAge, houseAge2, floor, floor2, pattern, pattern2,
//     park} = req.body;
//     console.log(req.body)
//     var a = {}
//     console.log(landHolding, landHolding2);
//     if (city !== "") {a.city = city}
//     if (district !== "") {a.district = district}
//     if (road !== "") {a.road1 = new RegExp(road)}
//     if (vaccineType !== "") {a.vaccineType = vaccineType}
//     if (mrtStation !== "") {a.mrtRoute1 = mrtStation}
//     if (salesperson !== "") {a.agency1 = salesperson}
//     if (number !== "") {a.innerNum = number}
//     if (totalPrice !== "" && totalPrice2 !== "") {a.contractPrice = { $gte : totalPrice, $lte : totalPrice2}}
//     if (totalPrice !== "" && totalPrice2 === "") {a.contractPrice = { $gte : totalPrice}}
//     if (totalPrice === "" && totalPrice2 !== "") {a.contractPrice = { $lte : totalPrice2}}
//     if (floor !== "" && floor2 !== "") {a.floor1 = { $gte : floor, $lte : floor2}}
//     if (floor !== "" && floor2 === "") {a.floor1 = { $gte : floor}}
//     if (floor === "" && floor2 !== "") {a.floor1 = { $lte : floor2}}
//     if (pattern !== "" && pattern2 !== "") {a.room1 = { $gte : pattern, $lte : pattern2}}
//     if (pattern !== "" && pattern2 === "") {a.room1 = { $gte : pattern}}
//     if (pattern === "" && pattern2 !== "") {a.room1 = { $lte : pattern2}}
//     if (houseAge !== "" && houseAge2 !== "") {a.houseAge = { $gte : houseAge, $lte : houseAge2}}
//     if (houseAge !== "" && houseAge2 === "") {a.houseAge = { $gte : houseAge}}
//     if (houseAge === "" && houseAge2 !== "") {a.houseAge = { $lte : houseAge2}}
//     if (pricePerPing !== "" && pricePerPing2 !== "") {a.pricePerPing = {$gte : pricePerPing, $lte : pricePerPing2}}
//     if (pricePerPing !== "" && pricePerPing2 === "") {a.pricePerPing = {$gte : pricePerPing}}
//     if (pricePerPing === "" && pricePerPing2 !== "") {a.pricePerPing = {$lte : pricePerPing2}}
//     if (ping !== "" && ping2 !== "") {a.ownershipArea = {$gte : ping, $lte : ping2}}
//     if (ping !== "" && ping2 === "") {a.ownershipArea = {$gte : ping}}
//     if (ping === "" && ping2 !== "") {a.ownershipArea = {$lte : ping2}}
//     // if (landHolding !== "" && landHolding2 !== "") {a.landHoldings = {$gte : landHolding, $lte : landHolding2}}
//     // if (landHolding !== "" && landHolding2 === "") {a.landHoldings = {$gte : landHolding}}
//     // if (landHolding === "" && landHolding2 !== "") {a.landHoldings = {$lte : landHolding2}}
//     if (park !== "") {a.park = park}
    
//   // console.log(req.params.city)
//   Objects.find(a, (err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   })
// });

// router.post("/manageSomeObjects/", (req, res) => {
//   const {city, district, road, houseType, mrtStation,
//     saleStatus, salesperson, inner_number, contract_number} = req.body;
//     var a = {}
//     if (city !== null) {a.city = city}
//     if (district !== null) {a.district = district}
//     if (road !== null) {a.road1 = new RegExp(road)}
//     if (houseType !== null) {a.buildingType3 = houseType}
//     if (mrtStation !== null) {a.mrtRoute1 = mrtStation}
//     if (salesperson !== null) {a.agency1 = salesperson}
//     if (contract_number !== null) {a.contractNum = contract_number}
    
    
//   // console.log(req.params.city)
//   Objects.find(a, (err, data) => {
//     if (err) return res.json({ success: false, error: err });
//     return res.json({ success: true, data: data });
//   })
// });
// // get one user
// // router.get("/getProfile/:user", (req, res) => {
// //   // console.log(req);
// //   User.findOne({ account: req.params.user }, (err, data) => {
// //     if (err) return res.json({ success: false, error: err });
// //     return res.json({ success: true, data: data });
// //   });
// // });

// // get all file
// // router.get("/getFile/:user_account", (req, res) => {
// //   gfs.collection('ctFiles'); //set collection name to lookup into
// //     /** First check if file exists */
// //     gfs.files.find({ "metadata.user_account": req.params.user_account }).toArray(function(err, files){
// //         if(!files || files.length === 0){
// //             // return res.status(404).json({
// //             //     responseCode: 1,
// //             //     responseMessage: "error"
// //             // });
// //             return res.json({ success: true, data: []});
// //         }
// //         return res.json({success: true, data:files});
// //     });
// // });
// //get one file
// // router.get("/getFile/:user_account/:id", (req, res) => {
// //   // File.findOne({ user_account: req.params.user, file_id: req.params.id }, (err, data) => {
// //   //   //console.log(req.body);
// //   //   if (err) return res.json({ success: false, error: err });
// //   //   return res.json({ success: true, data: data });
// //   // });
// //   gfs.collection('ctFiles'); //set collection name to lookup into

// //     /** First check if file exists */
// //     // console.log(req.params.user_account)
// //     // console.log(req.params.id)
// //     gfs.files.find({ "metadata.user_account": req.params.user_account, "metadata.file_id": req.params.id }).toArray(function(err, files){
// //       if(!files || files.length === 0){
// //           return res.status(404).json({
// //               responseCode: 1,
// //               responseMessage: "error"
// //           });
// //       }
// //       return res.json({success: true, data:files});
// //   });
// // });

// // get a file from DB
// // router.get("/gethihi/:filename", (req, res) => {
// //   gfs.collection('ctFiles'); //set collection name to lookup into

// //     /** First check if file exists */
// //     gfs.files.find({ filename: req.params.filename }).toArray(function(err, files){
// //         if(!files || files.length === 0){
// //             return res.status(404).json({
// //                 responseCode: 1,
// //                 responseMessage: "error"
// //             });
// //         }
// //         // create read stream
// //         var readstream = gfs.createReadStream({
// //             filename: files[0].filename,
// //             root: "ctFiles"
// //         });
// //         // set the proper content type 
// //         res.set('Content-Type', files[0].contentType)
// //         // Return response
// //         return readstream.pipe(res);
// //     });
// // })

// // router.get("/downloadFile/:user_account/:file_id", (req, res) => {
// //   gfs.collection('ctFiles'); //set collection name to lookup into

// //     /** First check if file exists */
// //     // console.log(req.params.file_id)
// //     // console.log(req.params.user_account)
// //     gfs.files.find({ "metadata.file_id": req.params.file_id, "metadata.user_account": req.params.user_account }).toArray(function(err, files){
// //         if(!files || files.length === 0){
// //             return res.status(404).json({
// //                 responseCode: 1,
// //                 responseMessage: "error"
// //             });
// //         }
// //         // console.log(files[0].filename)
// //         // create read stream
// //         var readstream = gfs.createReadStream({
// //             filename: files[0].filename,
// //             root: "ctFiles"
// //         });
// //         // set the proper content type 
// //         res.set('Content-Type', files[0].contentType);
// //         // Return response
// //         return readstream.pipe(res);
// //     });
// // })

// // handshake
// // router.get("/handshake", (req, res) => {
// //   const request = req.body;
// //   return res.json({ success:true, });
// // })




// /////////////////////////////////////////PDF



// const pdf = require('html-pdf');


// const pdfTemplate = require('./document');



// router.use(cors());
// router.use(bodyParser.urlencoded({extended: true}));
// router.use(bodyParser.json());
// var options={ width:'297mm',height:'420mm'};
// var options2={format:"A4", orientaion:"portrait"};
// // POST - PDF generation and fetching of the data
// router.post('/create-pdf', (req,res) => {
//     pdf.create(pdfTemplate(req.body) ,options).toFile('result.pdf', (err) =>{
//         if(err){
//             res.send(Promise.reject());
//         }
//         res.send(Promise.resolve());
//     });
// })


// //GET- Send the generated Pdf to the client
// router.get('/fetch-pdf', (req,res) =>{
//     res.sendFile(`${__dirname}/result.pdf`)
// })



// // append /api for our http requests
// app.use("/api", router);

// // launch our backend into a port
// app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));








