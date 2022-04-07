import {CssBaseline, Grid} from "@material-ui/core";
import React, {useEffect, useState} from 'react';

import { CircularProgress } from "@material-ui/core";
import GetPLacesData from "./api/Index" ;
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';

function App() {

  const [places, setPlaces] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  const [childClicked, setchildClicked] = useState(null);
  const [login, setLogin] = useState(false);
  const [type, setType] = useState("restaurants");  
  const [rating, setRating] = useState("");
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((e)=>{setCoordinates({lat:e.coords.latitude, lng: e.coords.longitude})})
    
  }, []);

  useEffect(() => {
   const ratingChange = places.filter((place)=> place.rating > rating)
   setFilterData(ratingChange)
  console.log({ratingChange});
  }, [rating]);


  useEffect(() => {

    if (bounds) {
      
      setLogin(true)
      GetPLacesData(bounds.ne, bounds.sw, type).then((data)=> 
      { console.log(data);
        setPlaces((data?.filter((place)=> place.name && place.num_reviews > 0)));
        setFilterData([])
        setLogin(false)})
        
    }
    // console.log(coordinates, bounds);
  }, [bounds,type]);


  return (
    <div className="App">
      <CssBaseline />
      <Header setCoordinates={setCoordinates}/>
      <Grid container spacing={0} style={{ width: "100%" }} >
        <Grid item xs={12} md={4} style={{ border: "1px solid red" }}>
          <List
           login={login}
           places={filterData.length ? filterData : places}
           childClicked={childClicked}
           type={type}
           setType={setType}
           rating={rating}
           setRating={setRating}
           />
          </Grid>
        <Grid item xs={12} md={8} style={{ border: "1px solid grey" }}>
          <Map 
          setCoordinates={setCoordinates}
          coordinates={coordinates}
          setBounds={setBounds}
          places={filterData.length ? filterData : places}
          setchildClicked={setchildClicked}
          />
          </Grid>
      </Grid>
      
    </div>
  );
}

export default App;
