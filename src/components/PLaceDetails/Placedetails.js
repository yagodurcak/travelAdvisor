import "./styles.css"

import { Box, Card, CardActions, CardContent, CardMedia, Chip } from '@material-ui/core'
import { LocalPhone, LocationOn } from "@material-ui/icons"

import { Button } from "@material-ui/core"
import { Rating } from "@material-ui/lab"
import React from 'react'

function Placedetails({place, selected, refProp}) {


  if (selected) {
    refProp?.current?.scrollIntoView({behavior: "smooth", block:"start"})
  }

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
        <Rating value={Number(place.rating)} readOnly/>
        <h3>Out of {place.num_reviews} reviews</h3>
      </div>
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
        <div  className="cardRow">
          <CardActions>
          <Button size="small" onClick={()=>{ window.open(place.web_url, "_blank")}}>Trip Advisor</Button>
          </CardActions>
          <CardActions>
          <Button size="small" onClick={()=>{ window.open(place.website, "_blank")}}>Website</Button>
          </CardActions>
        </div>
      </CardContent>
      </Card>
    </div>
  )
}

export default Placedetails