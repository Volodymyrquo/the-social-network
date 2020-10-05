import * as axios from 'axios';

export const moviesAPI = () => {
  return axios({
  "method":"GET",
  "url":"https://imdb-api.com/en/API/Top250Movies/k_A4pyGfGe"
   }
  )
  .then(response=>response.data) 
  .catch((error)=>{
    console.log(error)
  })
}

 