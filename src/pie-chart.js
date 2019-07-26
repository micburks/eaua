import React from 'react';
import * as d3 from 'd3';

const width = 250
const height = 250
const outerRadius = Math.min(width, height) * .5 - 20
const innerRadius = outerRadius * .5
const arc = d3.arc()
const pie = d3.pie()

function arcs (data) {
  return pie(data).map((arc, i) => {
    arc.innerRadius = innerRadius
    arc.outerRadius = outerRadius
    arc.next = data[i+1]
    return arc
  })
}

function PieChart(props) {
  let arcData;
  React.useMemo(() => {
    arcData = arcs(props.data);
  }, [props.data]);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      {arcData && arcData.map((arcDatum, i) => (
        <g key={i} transform={`translate(${width / 2}, ${height / 2})`}>
          <path d={arc(arcDatum)} fill={props.colors[i]} />
        </g>
      ))}
    </svg>
  );
}

export default PieChart;
