import GoogleMapReact from 'google-map-react';
import React from 'react'
import Typography from '@material-ui/core/Typography'

function Map({coordinates, setCoordinates,setBounds}) {


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
        >

        </GoogleMapReact>
        <Typography variant="h5" color="initial">Maps</Typography>
    </div>
  )
}

export default Map