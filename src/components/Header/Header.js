import "./Styles.css"

import React, {useState} from 'react'

import AppBar from '@material-ui/core/AppBar'
import { Autocomplete } from '@react-google-maps/api'
import Box from '@material-ui/core/Box'
import InputBase from '@material-ui/core/InputBase'
import SearchIcon from '@material-ui/icons/Search'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles';

function Header({setCoordinates}) {

    const [autoComplete, setAutoComplete] = useState(null);

    const onLoad = (autoC)=> setAutoComplete(autoC)
    const onPlaceChanged = ()=> {
        const lat = autoComplete.getPlace().geometry.location.lat()
        const lng = autoComplete.getPlace().geometry.location.lng()

        setCoordinates({lat, lng})
    }
    
  return (
    
          <AppBar position="static" color="primary">
              <Toolbar className="toolbar">
                  <Typography variant="h5" >
                      Travel Advisor
                  </Typography>
                  <Box className="searchBox">
                      <Typography variant="h6" 
                      >
                          Explore new places
                      </Typography>
                      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
                          <div className="search">
                              <div className="searchIcon">
                                  <SearchIcon/>
                              </div>
                              <div className="searchInput">
                                <InputBase placeholder="Search..."/>  
                              </div>
                          </div>
                      </Autocomplete>
                  </Box>

              </Toolbar>
          </AppBar>

  )
}

export default Header