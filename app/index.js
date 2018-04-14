/*
 *  Program assists with analyzing gryoscope and accelerometer readings
 */

let document = require("document");
import { Gyroscope } from "gyroscope";

let btnStop = document.getElementById("btn-stop");

let demotext = document.getElementById("demotext");
demotext.text = "Fitbit Studio rocks!";

var gyro = new Gyroscope({ frequency: 1 });

gyro.onreading = function() {

  // Peek the current sensor values
 // console.log("ts:", gyro.timestamp,
  //            "x:", gyro.x,
  //            "y:", gyro.y,
  //            "z:", gyro.z);
  
  console.log("x:", gyro.x,
              "y:", gyro.y,
              "z:", gyro.z);

  // Stop monitoring the sensor
  // gyro.stop();
}

// Begin monitoring the sensor
gyro.start();

btnStop.onactivate = function (evt) {
  gyro.stop();
}

