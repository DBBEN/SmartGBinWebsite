/*
Template Name: Admin Pro Admin
Author: Wrappixel
Email: niravjoshi87@gmail.com
File: js
*/
$(function () {
  "use strict";
  // ==============================================================
  // Newsletter
  // ==============================================================

  var chart1 = new Chartist.Bar(
    ".amp-pxl",
    {
      labels: ["Paper/Cardboard", "Metal/Glass", "Plastic", "Trash"],
      series: [10,8,6,8],
    },
    {
      axisX: {
        // On the x-axis start means top and end means bottom
        position: "end",
        showGrid: false,
      },
      axisY: {
        // On the y-axis start means left and end means right
        position: "start",
      },
      //high: "12",
      low: "0",
      distributeSeries: true,
      plugins: [Chartist.plugins.tooltip()],
    }
  );
  //var chart = [chart2];

  // var chart2 = new Chartist.Bar(
  //   ".amp-pxl",
  //   {
  //     labels: ["Paper/Cardboard", "Metal/Glass", "Plastic", "Trash"],
  //     series: [10,8,6,8],
  //   },
  //   {
  //     axisX: {
  //       // On the x-axis start means top and end means bottom
  //       position: "end",
  //       showGrid: false,
  //     },
  //     axisY: {
  //       // On the y-axis start means left and end means right
  //       position: "start",
  //     },
  //     //high: "12",
  //     low: "0",
  //     distributeSeries: true,
  //     plugins: [Chartist.plugins.tooltip()],
  //   }
  // );
});
