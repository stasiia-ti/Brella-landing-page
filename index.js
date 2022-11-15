// data for schedule

var xArray = ["Deductible", "Annual Max"];
var yArray = [1644, 4039];

var data = [
  {
    x: xArray,
    y: yArray,
    type: "bar",
    marker: {
      color: "#43806C",
    },
  },
];

// var layout = {title:"2020 individual averages (Source: KFF)"};

Plotly.newPlot("myPlot", data);
