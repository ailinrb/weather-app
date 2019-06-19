 import React, { Component } from 'react';
 import Paper from '@material-ui/core/Paper';
 import AppBar from '@material-ui/core/AppBar';
 import Typography from '@material-ui/core/Typography';
 import ToolBar from '@material-ui/core/Toolbar';
 import { Grid, Row, Col } from 'react-flexbox-grid';
 import LocationList from './components/LocationList';
 import ForecastExtended from './components/ForecastExtended';
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
    <Grid>
      <Row>
        <AppBar position='sticky'>
          <ToolBar>
            <Typography variant='title' color='inherit'>
              Weather App
            </Typography>
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
          <Paper zDepth={4}>
             <div className="details">
               <ForecastExtended city={'Bogota,co'}>

               </ForecastExtended>
             </div>
          </Paper>
        </Col>
      </Row>
      
    </Grid>
    );
  } 

}

export default App;
