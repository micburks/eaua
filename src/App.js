import React from 'react';
import {styled} from 'styletron-react';
import RestaurantCard from './restaurant-card.js';

const AppContainer = styled('div', {
});

function App(props) {
  return (
    <AppContainer>
      {props.restaurants && props.restaurants.map((restaurant, index) => (
        <RestaurantCard key={index} restaurant={restaurant} colors={props.colors} />
      ))}
    </AppContainer>
  );
}

export default App;
