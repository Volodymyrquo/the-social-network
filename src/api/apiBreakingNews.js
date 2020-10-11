import * as axios from 'axios';

const instance = axios.create({
    "method":"GET",
    "url":"https://breaking-news2.p.rapidapi.com/wp-json/wp/v2/posts",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"breaking-news2.p.rapidapi.com",
    "x-rapidapi-key":"e18d8210b4mshf39970da57434a2p11b2a4jsn88869d8e1347",
    "useQueryString":true
    }
    })


export const newsAPI = () => {
  debugger
  return axios({
    "method":"GET",
    "url":"https://breaking-news2.p.rapidapi.com/wp-json/wp/v2/posts",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"breaking-news2.p.rapidapi.com",
    "x-rapidapi-key":"e18d8210b4mshf39970da57434a2p11b2a4jsn88869d8e1347",
    "useQueryString":true
    }
    })
    .then(response=>{
      
      return response.data} )
      .catch((error)=>{
        console.log(error)
      })
}  

 
/* export const test () { debugger
    return axios({
      
    "method":"GET",
    "url":"https://breaking-news2.p.rapidapi.com/wp-json/wp/v2/posts",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"breaking-news2.p.rapidapi.com",
    "x-rapidapi-key":"e18d8210b4mshf39970da57434a2p11b2a4jsn88869d8e1347",
    "useQueryString":true
    }
    })
    .then(response=>{
      return response.data[0].title.rendered})
    .catch((error)=>{
      console.log(error)
    }) } */