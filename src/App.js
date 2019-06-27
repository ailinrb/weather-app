 import React, { Component } from 'react';
 import Paper from '@material-ui/core/Paper';
 import AppBar from '@material-ui/core/AppBar';
 import ToolBar from '@material-ui/core/Toolbar';
 import { Grid, Row, Col } from 'react-flexbox-grid';
 import LocationListContainer from './containers/LocationListContainer';
 import ForecastExtendedContainer from './containers/ForecastExtendedContainer';
 
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

  render() {
  
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
          <LocationListContainer cities={cities}></LocationListContainer>
        </Col>
        <Col xs={12} md={6}>
          <Paper elevation={4}>
             <div className="details">
                <ForecastExtendedContainer/>
             </div>
          </Paper>
        </Col>
      </Row>
      
    </Grid>
    );
  } 

}

export default App;

