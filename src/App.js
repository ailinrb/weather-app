 import React, { Component } from 'react';
 import Paper from '@material-ui/core/Paper';
 import AppBar from '@material-ui/core/AppBar';
 import ToolBar from '@material-ui/core/Toolbar';
 import { Grid, Row, Col } from 'react-flexbox-grid';
 import LocationList from './components/LocationList';
 import ForecastExtended from './components/ForecastExtended';
 import { setCity } from './actions';
 import { store } from './store';
 
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

  constructor (){
    super();
    this.state = { city: null };
  }
  handleSelectedLocation = city => {
    this.setState({ city });
    console.log(`handleSelectedLocation ${city}`);

    store.dispatch(setCity(city));
  }
  render() {
    const { city } = this.state;
  return (
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <ToolBar>
              Weather App
          </ToolBar>
        </AppBar>
      </Row>
      <Row>
        <Col xs={12} md={6}>
          <LocationList cities={cities}
            onSelectedLocation={this.handleSelectedLocation}>
          </LocationList>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
             <div className="details">
               {
                 city &&
                 <ForecastExtended city={city}></ForecastExtended>
               }
             </div>
          </Paper>
        </Col>
      </Row>
      
    </Grid>
    );
  } 

}

export default App;
