import axios from "axios";

const Url = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



const GetPLacesData = async (ne,sw, type) => {   
    
    try {
        const {data: {data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {

            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
              'X-RapidAPI-Key': 'b40214b5fcmsheba29c398312b5ep1bb031jsn5d700785760b'
            }
          })
        return data
        
    } catch (error) {
        console.log(error);
    }

}

export default GetPLacesData;
