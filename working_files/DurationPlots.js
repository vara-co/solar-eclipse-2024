
let title = `Eclipse Totality Durations`

let states = ["AR", "IL", "IN", "KY", "ME", "MI", "MO", "NH", "NY", "OH", "OK", "PA", "TX", "VT"]

let averages = [3.267, 3.267, 3.167, 1.75, 2.017, .65, 3.083, 2.25, 3.033, 3.017, 2.483, 2.533, 3.25, 2.683 ]

let trace = {
  x: states,
  y: averages,
  mode: 'markers',
  type: 'bar'
};

let data = [trace];

let layout = {
  title: title,
  xaxis: {title: 'States in Path of Totality'},
  yaxis: {title: 'Totality in Minutes'},
};

Plotly.newPlot("plot", data, layout);