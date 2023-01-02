/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
import {initializeApp } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-app.js";
import { getDatabase, onValue, ref } from "https://www.gstatic.com/firebasejs/9.1.0/firebase-database.js"; 


  // Import the functions you need from the SDKs you need


  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
      apiKey: "AIzaSyCMONX2MdE8Il11d_Ee00E4kpuYxsAwfeQ",
      authDomain: "smart-gbin.firebaseapp.com",
      databaseURL: "https://smart-gbin-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "smart-gbin",
      storageBucket: "smart-gbin.appspot.com",
      messagingSenderId: "767454820018",
      appId: "1:767454820018:web:a79e7238252dbaeb543bab"
  };


  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
  const reference = ref(db, 'global/');
  var obj;
  var chartData;

  onValue(reference, (snapshot) => {
    const data = JSON.stringify(snapshot.val());
    obj = JSON.parse(data);
    console.log(obj);

    chartData = {
      labels: ["Paper", "Metal", "Plastic", "Trash"],
      series: [
        obj["paper-cardboard"],
        obj["metal-glass"],
        obj["plastic"],
        obj["trash"]
      ]
    };

    chart1.update(chartData);
  })
  // ==============================================================
  // Newsletter
  // ==============================================================

  var chart1 = new Chartist.Bar(
    ".amp-pxl",
    {
      labels: ["Paper", "Metal", "Plastic", "Trash"],
      series: [
        0,
        0,
        0,
        0
      ]
    },
    {
      //seriesBarDistance: 10,
      axisX: {
        // On the x-axis start means top and end means bottom
        showGrid: false,
      },
      axisY: {
        // On the y-axis start means left and end means right
        low: 0,
        position: "start",
        labelInterpolationFnc: function (value) {
          return Math.round(value);
        }
        
      },
      
      
      distributeSeries: true,
      plugins: [Chartist.plugins.tooltip()],
    }
  );
  //var chart = [chart2];

  // var chart2 = new Chartist.Bar(
  //   ".amp-pxl2",
  //   {
  //     labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  //     series: [
  //       [19,16,12,14],
  //       [10,8,13,11],
  //       [12,17,12,15],
  //       [20,13,9,14]
  //     ]
  //   },
  //   {
  //     seriesBarDistance: 10,
  //     axisX: {
  //       // On the x-axis start means top and end means bottom
  //       position: "end",
  //       showGrid: false,
  //     },
  //     axisY: {
  //       // On the y-axis start means left and end means right
  //       position: "start",
  //       labelInterpolationFnc: function (value) {
  //         return parseInt(value);
  //       } 
  //     },
  //     //high: "12",
  //     //distributeSeries: true,
  //   }
  // );

