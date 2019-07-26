import React from 'react';
import {styled} from 'styletron-react';
import PieChart from './pie-chart.js';

const Card = styled('div', {
  display: 'inline-block',
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
  minWidth: '40%',
});

const CardFacetItem = styled('span', props => ({
  backgroundColor: props.color,
  display: 'inline-block',
  width: '15px',
  height: '15px',
  borderRadius: '2px',
  margin: '0 3px -3px',
}));

function RestaurantCard(props) {
  const {name, address, facets} = props.restaurant;

  let chartData, topFacets;
  React.useMemo(() => {
    const sortedFacets = facets.sort((a, b) => b.value - a.value);
    chartData = sortedFacets.map(facet => facet.value);
    topFacets = sortedFacets.slice(0, 4);
  }, [props.restaurant]);

  return (
    <Card>
      <CardHeader>{name}</CardHeader>
      <CardAddress>
        <AddressLink>{address}</AddressLink>
      </CardAddress>
      <PieChart data={chartData} colors={props.colors} />
      <div className='Card-chart'/>
      <CardFacets className='Card-facets'>
        {topFacets && topFacets.map((facet, i) => {
          const isOdd = Boolean(i % 2);
          return (
            <CardFacet key={i} $style={isOdd && {float: 'right', textAlign: 'right'}}>
              {!isOdd && <CardFacetItem color={props.colors[i]}/>}
              {facet.label}
              {isOdd && <CardFacetItem color={props.colors[i]} $style={{float:'right'}}/>}
            </CardFacet>
          );
        })}
      </CardFacets>
    </Card>
  );
}

export default RestaurantCard;
