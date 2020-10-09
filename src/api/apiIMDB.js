import * as axios from 'axios';

const apiKey = "k_A4pyGfGe";
const top250 = "Top250Movies";
const title = "Title"

const instance = axios.create({
    baseURL:`https://imdb-api.com/en/API/`
})


export const moviesAPI = () => {
  return instance.get(
 `${top250}/${apiKey}`
     )
  .then(response=>response.data) 
  .catch((error)=>{
    console.log(error)
  })
}

export const movieProfileAPI = (movieId) => {
  return instance.get(
 `${title}/${apiKey}/${movieId}`
     )
  .then(response=>response.data) 
  .catch((error)=>{
    console.log(error)
  })
}
