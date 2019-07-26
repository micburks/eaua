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
  React.useEffect(() => {
    const svg = d3.select('.pie-chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    svg.selectAll('.arc')
      .data(arcs(props.data))
      .enter()
      .append('g')
      .attr('class', 'arc')
      .attr('transform', `translate(${width / 2}, ${height / 2})`)
      .append('path')
      .attr('fill', (d, i) => props.colors[i])
      .attr('d', arc)
  }, [props.data, props.colors]);

  return <div className='pie-chart'/>
}

export default PieChart;
