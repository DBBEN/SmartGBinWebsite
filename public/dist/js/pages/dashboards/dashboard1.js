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
      labels: ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"],
      series: [
        [1, 4, 2, 5, 3, 2, 6],
        [6, 8, 1, 6, 2, 3, 4],
        [4, 2, 1, 2, 5, 8, 2],
        [3, 4, 6, 7, 5, 9, 2]
      ]
    },
    {
      seriesBarDistance: 10,
      axisX: {
        // On the x-axis start means top and end means bottom
        showGrid: false,
      },
      axisY: {
        // On the y-axis start means left and end means right
        //position: "start",
        labelInterpolationFnc: function (value) {
          return parseInt(value);
        }
      },
      //high: "12",
      //distributeSeries: true,
      //plugins: [Chartist.plugins.tooltip()],
    }
  );
  //var chart = [chart2];

  var chart2 = new Chartist.Bar(
    ".amp-pxl2",
    {
      labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
      series: [
        [19,16,12,14],
        [10,8,13,11],
        [12,17,12,15],
        [20,13,9,14]
      ]
    },
    {
      seriesBarDistance: 10,
      axisX: {
        // On the x-axis start means top and end means bottom
        position: "end",
        showGrid: false,
      },
      axisY: {
        // On the y-axis start means left and end means right
        position: "start",
        labelInterpolationFnc: function (value) {
          return parseInt(value);
        } 
      },
      //high: "12",
      //distributeSeries: true,
    }
  );
});
