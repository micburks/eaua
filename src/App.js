import React, {useEffect} from 'react';
import {styled} from 'styletron-react';
import * as d3 from 'd3';

const width = 250
const height = 250
const outerRadius = Math.min(width, height) * .5 - 20
const innerRadius = outerRadius * .5
const data = [ .5, .25, .125, .0625, .03125, 0.03125 ]
const color = d3.schemeCategory10
  .sort(() =>  Math.random() > .5)
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

function renderChart() {
  const svg = d3.select('.Card-chart')
    .append('svg')
    .attr('width', width)
    .attr('height', height)

  svg.selectAll('.arc')
    .data(arcs(data))
    .enter()
    .append('g')
    .attr('class', 'arc')
    .attr('transform', `translate(${width / 2}, ${height / 2})`)
    .append('path')
    .attr('fill', (d, i) => color[i])
    .attr('d', arc)
};

const Card = styled('div', {
  width: '250px',
  height: '400px',
  margin: '10px',
  backgroundColor: '#F2F0EB',
  borderRadius: '5px',
  '-moz-box-shadow': '1px 1px 5px 2px #BAAD87',
  '-webkit-box-shadow': '1px 1px 5px 2px #BAAD87',
  'box-shadow': '1px 1px 5px 2px #BAAD87',
});

const CardHeader = styled('h1', {
  fontSize: '25px',
  padding: '25px 20px 0',
  margin: '0',
  fontFamily: 'Work Sans, sans-serif',
});

const CardAddress = styled('small', {
  fontSize: '15px',
  padding: '0 20px',
  color: '#474234',
  fontFamily: 'Open Sans, sans-serif',
});

const AddressLink = styled('a', {
  textDecoration: 'underline',
  color: '#474234',
  ':active': {
    color: '#474234',
  },
  ':visited': {
    color: '#474234',
  },
});

const CardFacets = styled('ul', {
  margin: '0',
  padding: '0 20px',
  listStyle: 'none',
  fontSize: '12px',
});

const CardFacet = styled('li', {
  display: 'inline-block',
  margin: '0 0 5px',
  position: 'relative',
});

const CardFacetItem = styled('span', props => ({
  backgroundColor: props.color,
  display: 'inline-block',
  width: '15px',
  height: '15px',
  borderRadius: '2px',
  margin: '0 3px -3px',
}));

const facets = [
  'Classy dinner',
  'Cocktails',
  'Customer service',
  'Decor',
];

function App() {
  useEffect(renderChart);
  return (
    <Card>
      <CardHeader>Chico's</CardHeader>
      <CardAddress>
        <AddressLink>
          1331 addr blvd ne
        </AddressLink>
      </CardAddress>
      <div className='Card-chart'/>
      <CardFacets className='Card-facets'>
        {facets && facets.map((facet, i) => {
          const isOdd = i % 2 !== 0;
          return (
            <CardFacet $style={isOdd && {float: 'right'}}>
              {!isOdd && <CardFacetItem color={color[i]}/>}
              {facet}
              {isOdd && <CardFacetItem color={color[i]} $style={{float:'right'}}/>}
            </CardFacet>
          );
        })}
      </CardFacets>
    </Card>
  );
}

export default App;
