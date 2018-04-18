/*
 * Entry point for the watch app
 */
// import document from "document";
let document = require("document");
import { Gyroscope } from "gyroscope";
import { OrientationSensor } from "orientation";

let btnStop = document.getElementById("btn-stop");

let demotext = document.getElementById("demotext");
demotext.text = "Fitbit Studio rocks!";

let orientation = new OrientationSensor({ frequency: 1 });

let testObj = {
  readings: []
}
let k = 0;

let quatArr = [];

function getQvals() {
    testObj.readings[k] = {
        xVal: orientation.quaternion[0],
        yVal: orientation.quaternion[1],
        zVal: orientation.quaternion[2],
        wVal: orientation.quaternion[3]
    }
    k++;
}

orientation.onreading = function() {
  console.log("Orientation Sensor Reading: " +
              "timestamp: " + orientation.timestamp,
              "quaternion[0]: " + orientation.quaternion[0],
              "quaternion[1]: " + orientation.quaternion[1],
              "quaternion[2]: " + orientation.quaternion[2],
              "quaternion[3]: " + orientation.quaternion[3]);
  getQvals();
}

orientation.start();

// var gyro = new Gyroscope({ frequency: 1 });

// gyro.onreading = function() {

  // Peek the current sensor values
 // console.log("ts:", gyro.timestamp,
  //            "x:", gyro.x,
  //            "y:", gyro.y,
  //            "z:", gyro.z);
  
 //  console.log("x:", gyro.x,
              // "y:", gyro.y,
              // "z:", gyro.z);

  // Stop monitoring the sensor
  // gyro.stop();
// }

// Begin monitoring the sensor
// gyro.start();

btnStop.onactivate = function (evt) {
  // gyro.stop();
  orientation.stop();
}

