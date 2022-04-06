import "./styles.css"

import { Box, Card, CardContent, CardMedia, Chip } from '@material-ui/core'
import { LocalPhone, LocationOn } from "@material-ui/icons"

import React from 'react'

function Placedetails({place}) {
  return (
    <div>
      <Card>
      <CardMedia
        component="img"
        height="194"
        image={place.photo ? place.photo.images.large.url : null}
        title={place.name}
      />
      <CardContent>

      <h2 className="placeName">{place.name}</h2>
      <div className='cardRow'>
        <h3>Price:</h3>
        <h3>{place.price_level}</h3>
      </div>
      <div className='cardRow'>
        <h3>Ranking:</h3>
        <h3>{place.ranking}</h3>
      </div>
      <div className='cardRow'>
        <LocationOn className="locationIcon"/>
        <h3>{place.address}</h3>
      </div>
      <div className='cardRow'>
        <LocalPhone className="locationIcon"/>
        <h3>{place.phone}</h3>
      </div>

      {place?.awards?.map((award)=>(
          <div className="awardContainer">
            <div className="awardSubContainer">
              <img src={award.images.small} alt="" className="imgAward"/>
              <h3>{award.display_name}</h3>
            </div>
            </div>
      ))}

      {place?.cuisine?.map((name)=>(

          <Chip  label={name.name} size="small" className="chipFood"/>

      ))}
      </CardContent>
    
      </Card>
    </div>
  )
}

export default Placedetails