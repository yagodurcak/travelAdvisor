import {CssBaseline, Grid} from "@material-ui/core";
import React, {useEffect, useState} from 'react';

import GetPLacesData from "./api/Index" ;
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e)=>{setCoordinates({lat:e.coords.latitude, lng: e.coords.longitude})})
  }, []);


  useEffect(() => {
    // console.log(coordinates, bounds);
    GetPLacesData(bounds.ne, bounds.sw).then((data)=> 
    { console.log(data);
      setPlaces(data)})
  }, [coordinates, bounds]);


  return (
    <div className="App">
      <CssBaseline />
      <Header />
      <Grid container spacing={0} style={{ width: "100%" }} >
        <Grid item xs={12} md={4} style={{ border: "1px solid red" }}>
          <List places={places}/>
          </Grid>
        <Grid item xs={12} md={8} style={{ border: "1px solid grey" }}>
          <Map 
          setCoordinates={setCoordinates}
          coordinates={coordinates}
          setBounds={setBounds}
          />
          </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
