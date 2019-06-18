 import React, { Component } from 'react';
 import LocationList from './components/LocationList';
import './App.css';

const cities = [
  'Bogota,co',
  'Buenos Aires,ar',
  'Washington,us',
  'Madrid,es',
  'Ciudad de México,mx',
  'Lima,pe',
];
class App extends Component {
  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);
  }
  render() {
  return (

    <div className="App">
     <LocationList cities={cities}
     onSelectedLocation={this.handleSelectedLocation}></LocationList>
    </div>
  );
  }
}

export default App;
