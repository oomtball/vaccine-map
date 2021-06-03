const mongoose = require("mongoose");
const express = require("express");
var cors = require("cors");
const User = require("./user")
const File = require("./file")
const Object = require("./objects")

const API_PORT = 3002;
const Grid = require('gridfs-stream');
Grid.mongo = mongoose.mongo;
const app = express();
app.use(cors());
const router = express.Router();

// this is our MongoDB database
const dbRoute = "mongodb+srv://oomtball:123@objects-o15da.mongodb.net/test?retryWrites=true&w=majority"
// connects our back end code with the database
//const conn = mongoose.createConnection(dbRoute);
mongoose.connect(
  dbRoute,
  { useNewUrlParser: true }
);

let conn = mongoose.connection;
let gfs;
conn.once("open", () => {
  console.log("connected to the database")
  gfs = Grid(conn.db, mongoose.mongo);  
  gfs.collection('uploads');
});
// checks if connection with the database is successful
conn.on("error", console.error.bind(console, "MongoDB connection error:"));

router.post('/addOneObject', (req, res) => {
  let data = new Object();
  const { caseName, contractNum, contractPrice, buildingType1, buildingType2, buildingType3, usage, caseStartDate,
    caseFinishDate, constructFinishDate, city, district, village1, village2, neighbor, road1, road2, section, lane,
    alley, number1, number2, floor1, floor2, allUpFloor, allDownFloor, onSale, mrtArea, mrtRoute1, mrtRoute2,
    frontRoadWidth, typeOfRoad, feature, room1, room2, livingroom, bathroom, otherPattern, facing, lighting, sideRoom,
    darkRoom, mainMaterial, compartmentMaterial, outsideWall, status, securityGuard, manageFee, amountOfManageFee,
    feeFrequency, elementary, junior, park, market, trMainRoad, trLine, trStation, ownershipArea, extensionArea,
    ratioOfPublic, mainBuilding, subsidiaryBuilding, areaOfPublic, parkingSpace, pingOfParkingSpace, quantityOfParkingSpace,
    numberOfParkingSpace, priceOfParkingSpace, depth, faceWidth, highCeiling, highBeam, cargoElevator, tonsOfCargoElevator,
    crane, tonsOfCrane, bigElec, hpOfBigElec, basement, agency1, agency2, agency3, agency4, agency5, agency6 } = req.body;

  if (!caseName || !contractNum || !contractPrice || !buildingType1 || !buildingType2 || !usage ||
    !city || !district || !road1 || !road2 || !number1 || !allUpFloor || !allDownFloor || !feature || !room1 || !room2 ||
    !livingroom || !bathroom || !mainMaterial || !mainBuilding || !subsidiaryBuilding || !areaOfPublic) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }
    data.caseName = caseName; 
    data.contractNum = contractNum; 
    data.contractPrice = contractPrice;
    data.buildingType1 = buildingType1;
    data.buildingType2 = buildingType2;
    data.buildingType3 = buildingType3;
    data.usage = usage;
    data.caseStartDate = caseStartDate;
    data.caseFinishDate = caseFinishDate;
    data.constructFinishDate = constructFinishDate;
    data.city = city;
    data.district = district;
    data.village1 = village1;
    data.village2 = village2;
    data.f = neighbor;
    data.road1 = road1;
    data.road2 = road2;
    data.section = section;
    data.lane = lane;
    data.alley = alley; data.number1 = number1; data.number2 = number2; data.floor1 = floor1; data.floor2 = floor2;
    data.allUpFloor = allUpFloor; data.allDownFloor = allDownFloor; data.onSale = onSale; data.mrtArea = mrtArea; 
    data.mrtRoute1 = mrtRoute1; data.mrtRoute2 = mrtRoute2; data.frontRoadWidth = frontRoadWidth; data.typeOfRoad = typeOfRoad;
    data.feature = feature; data.room1 = room1; data.room2 = room2; data.livingroom = livingroom; data.bathroom = bathroom; 
    data.otherPattern = otherPattern; data.facing = facing; data.lighting = lighting; data.sideRoom = sideRoom;
    data.darkRoom = darkRoom; data.mainMaterial = mainMaterial; data.compartmentMaterial = compartmentMaterial; 
    data.outsideWall = outsideWall; data.status = status; data.securityGuard = securityGuard; data.manageFee = manageFee; 
    data.amountOfManageFee = amountOfManageFee; data.feeFrequency = feeFrequency; data.elementary = elementary; 
    data.junior = junior; data.park = park; data.market = market; data.trMainRoad = trMainRoad; data.trLine = trLine; 
    data.trStation = trStation; data.ownershipArea = ownershipArea; data.extensionArea = extensionArea;
    data.ratioOfPublic = ratioOfPublic; data.mainBuilding = mainBuilding; data.subsidiaryBuilding = subsidiaryBuilding; 
    data.areaOfPublic = areaOfPublic; data.parkingSpace = parkingSpace; data.pingOfParkingSpace = pingOfParkingSpace; 
    data.quantityOfParkingSpace = quantityOfParkingSpace; data.numberOfParkingSpace = numberOfParkingSpace; 
    data.priceOfParkingSpace = priceOfParkingSpace; data.depth = depth; data.faceWidth = faceWidth; data.highCeiling = highCeiling; 
    data.highBeam = highBeam; data.cargoElevator = cargoElevator; data.tonsOfCargoElevator = tonsOfCargoElevator;
    data.crane = crane; data.tonsOfCrane = tonsOfCrane; data.bigElec = bigElec; data.hpOfBigElec = hpOfBigElec; 
    data.basement = basement; data.agency1 = agency1; data.agency2 = agency2; data.agency3 = agency3; data.agency4 = agency4; 
    data.agency5 = agency5; data.agency6 = agency6;
    console.log(buildingType1)
  data.save(err => {
    if (err) {console.log(err);return res.json({ success: false, error: err });}
    return res.json({ success: true });
  });
});
router.get("/getUser", (req, res) => {
    User.find((err, data) => {
      if (err) return res.json({ success: false, error: err });
      return res.json({ success: true, data: data });
    });
});

// append /api for our http requests
app.use("/api", router);

// launch our backend into a port
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));