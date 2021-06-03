const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataSchema = new Schema(
  { 
    caseName: {
      type: String,
      required: [true, 'Case name field is required.']
    },
    innerNum: {
        type: String,
        required: true
      },
    contractNum: {
      type: String,
      required: [true, 'Contract number field is required.']
    },
    contractPrice: {
      type: String,
      required: [true, 'Contract price field is required.']
    },
    buildingType: {
      type: String,
      required: [true, 'Building type field is required.']
    },
    sellingPrice: {
      type: String,
      required: false
    },
    usage: {
        type: String,
        required: [true, 'usage field is required.']
    },
    caseStartDate: {
      type: String,
      required: false
    },
    caseFinishDate: {
        type: String,
        required: false
    },
    constructFinishDate: {
        type: String,
        required: false
    },
    houseAge: {
        type: String, 
        required: false
    },
    pricePerPing: {
        type: String,
        required: false  
    },
    city: {
        type: String,
        required: [true, 'city field is required.']
    },
    district: {
        type: String,
        required: [true, 'district field is required.']
    },
    village: {
        type: String,
        required: false
    },
    neighbor: {
        type: String,
        required: false
    },
    road: {
        type: String,
        required: [true, 'road field is required.']
    },
    section: {
        type: String,
        required: false
    },
    lane: {
        type: String,
        required: false
    },
    alley: {
        type: String,
        required: false
    },
    number1: {
        type: String,
        required: [true, 'number1 field is required.']
    },
    number2: {
        type: String,
        required: false
    },
    floor1: {
        type: String,
        required: false
    },
    floor2: {
        type: String,
        required: false
    },
    allUpFloor: {
        type: String,
        required: [true, 'allUpFloor field is required.']
    },
    allDownFloor: {
        type: String,
        required: [true, 'allDownFloor field is required.']
    },
    mrtArea: {
        type: String,
        required: false
    },
    mrtRoute1: {
        type: String,
        required: false
    },
    mrtRoute2: {
        type: String,
        required: false,
    },
    trMainRoad: {
        type: String,
        required: false,
    },
    trLine: {
        type: String,
        required: false,
    },
    trStation: {
        type: String,
        required: false,
    },
    frontRoadWidth: {
        type: String,
        required: false,
    },
    typeOfRoad: {
        type: String,
        required: false,
    },
    remark: {
        type: String,
        required: false,
    },
    feature: {
        type: String,
        required: true,
    },
    room1: {
        type: String,
        required: true,
    },
    room2: {
        type: String,
        required: false,
    },
    livingroom: {
        type: String,
        required: true,
    },
    bathroom: {
        type: String,
        required: true,
    },
    otherPattern: {
        type: String,
        required: false,
    },
    facing: {
        type: String,
        required: false,
    },
    landHoldings: {
        type: String,
        required: false,
    },
    landArea: {
        type: String,
        required: false,
    },
    lighting: {
        type: String,
        required: false,
    },
    sideRoom: {
        type: String,
        required: false,
    },
    darkRoom: {
        type: String,
        required: false,
    },
    mainMaterial: {
        type: String,
        required: true,
    },
    compartmentMaterial: {
        type: String,
        required: false,
    },
    outsideWall: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: false,
    },
    securityGuard: {
        type: String,
        required: false,
    },
    manageFee: {
        type: String,
        required: false,
    },
    amountOfManageFee: {
        type: String,
        required: false,
    },
    feeFrequency: {
        type: String,
        required: false,
    },
    elementary: {
        type: String,
        required: false,
    },
    junior: {
        type: String,
        required: false,
    },
    park: {
        type: String,
        required: false,
    },
    market: {
        type: String,
        required: false,
    },
    ownershipArea: {
        type: String,
        required: false,
    },
    extensionArea: {
        type: String,
        required: false,
    },
    ratioOfPublic: {
        type: String,
        required: false,
    },
    mainBuilding: {
        type: String,
        required: true,
    },
    subsidiaryBuilding: {
        type: String,
        required: true,
    },
    areaOfPublic: {
        type: String,
        required: true,
    },
    parkingSpace: {
        type: String,
        required: false,
    },
    pingOfParkingSpace: {
        type: String,
        required: false,
    },
    quantityOfParkingSpace: {
        type: String,
        required: false,
    },
    numberOfParkingSpace: {
        type: String,
        required: false,
    },
    priceOfParkingSpace: {
        type: String,
        required: false,
    },
    depth: {
        type: String,
        required: false,
    },
    faceWidth: {
        type: String,
        required: false,
    },
    highCeiling: {
        type: String,
        required: false,
    },
    highBeam: {
        type: String,
        required: false,
    },
    cargoElevator: {
        type: String,
        required: false,
    },
    tonsOfCargoElevator: {
        type: String,
        required: false,
    },
    crane: {
        type: String,
        required: false,
    },
    tonsOfCrane: {
        type: String,
        required: false,
    },
    bigElec: {
        type: String,
        required: false,
    },
    hpOfBigElec: {
        type: String,
        required: false,
    },
    basement: {
        type: String,
        required: false,
    },
    agency1: {
        type: String,
        required: false,
    },
    agency2: {
        type: String,
        required: false,
    },
    agency3: {
        type: String,
        required: false,
    },
    agency4: {
        type: String,
        required: false,
    },
    agency5: {
        type: String,
        required: false,
    },
    agency6: {
        type: String,
        required: false,
    },
    house_pics_names: {
        type: Object,
        required: false,
    }
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("object", DataSchema);
