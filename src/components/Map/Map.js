import "./styles.css"

import { Paper, useMediaQuery } from '@material-ui/core';

import GoogleMapReact from 'google-map-react';
import { Rating } from "@material-ui/lab";
import React from 'react'
import Typography from '@material-ui/core/Typography'

function Map({coordinates, setCoordinates,setBounds, places, setchildClicked}) {

  const isDesktop = useMediaQuery("(min-width)")

  return (

    
    <div style={{ height: '100vh', width: '100%' }}>
      {/* siempre poner medidas de pantalla como arriba antes del map-react  */}
        <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBUb82h6jQUcm-IIoI6JcZXISzlOZ83v4c" }}
        defaultCenter={coordinates}    
        center={coordinates}  
        defaultZoom={11}
        onChange={(e)=>{
          console.log(e); 
          setCoordinates({lat:e.center.lat, lng: e.center.lng});
          setBounds({ne:e.marginBounds.ne, sw: e.marginBounds.sw})}}
        onChildClick={(child)=>setchildClicked(child)}
        >
         {places?.map((place, i)=>(
           <div       lat={place.latitude}
           className='paperInfo'
           lng={place.longitude}
           key={i}>
             
             <div >
               
               <h3>{place.name}</h3>
               <img className="imgMap" src={place.photo ? place.photo.images.small.url : "https://media-cdn.tripadvisor.com/media/photo-s/18/b1/ce/8c/caption.jpg"
} alt="" />
                      <Rating value={Number(place.rating)} readOnly className="ratingMap" size="small"/>

             </div>

           </div>
         ))}

        </GoogleMapReact>
        <Typography variant="h5" color="initial">Maps</Typography>
    </div>
  )
}

export default Map