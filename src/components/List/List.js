import "./List.css"

import React, {createRef, useEffect, useState} from 'react'

import { CircularProgress } from "@material-ui/core"
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import Placedetails from "../PLaceDetails/Placedetails"
import Select from "@material-ui/core/Select"
import Typography from '@material-ui/core/Typography'

function List({places, childClicked, login, type, setType, rating, setRating}) {




  const [elRefs, setElRefs] = useState([]);

  console.log({childClicked});


  // console.log(cadena);
  // console.log(childClicked);


  useEffect(() => {
    const ref = Array(places?.length).fill().map((_  ,i)=> elRefs[i] || createRef())

    setElRefs(ref)
    console.log(ref);
    
  }, [places]);

  

  return (
    <div className='Contenedor'>
        <Typography variant="h4" color="initial">Restaurants, Hotels and Attractions around you</Typography>
 

       {login ?       <div className="loadingPage">
       <CircularProgress />
       </div> :  
       
        <div className="selectOption">
          <div className="selectContainer">
            <FormControl className="selectContainer">
              <InputLabel>Type</InputLabel>
              <Select value={type} onChange={(e)=> setType(e.target.value)}>
                <MenuItem value="restaurants">Restaurants</MenuItem>
                <MenuItem value="hotels">Hotels</MenuItem>
                <MenuItem value="attractions">Attractions</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="selectContainer">
            <FormControl >
              <InputLabel>Rating</InputLabel>
              <Select value={rating} onChange={(e)=> setRating(e.target.value)}>
                <MenuItem value={0}>All</MenuItem>
                <MenuItem value={3}>Above 3.0</MenuItem>
                <MenuItem value={4}>Above 4.0</MenuItem>
                <MenuItem value={4.5}>Above 4.5</MenuItem>
              </Select>
            </FormControl>
          </div> 
        </div>}
        <div>
          <Grid container spacing={3}>
            {places?.map((place, i)=>(
              <Grid item key= {i} xs={12} >
                <Placedetails 
                place={place}
                selected={Number(childClicked) === i}
                refProp = {elRefs[i]}
                />              
              </Grid>
            ))}            
          </Grid>
        </div>
    </div>
  )
}

export default List