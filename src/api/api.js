import * as axios from 'axios';

const instance = axios.create ({
withCredentials: true,
baseURL: `https://social-network.samuraijs.com/api/1.0/`,
headers: {
  "API-KEY": "0e4a0c37-3872-48f9-9ae4-37fa140cd311"
}
})

export const usersAPI = {

 getUsers(currentPage, pageSize){
    return  instance.get(
  `users?page=${currentPage}&count=${pageSize}`)
.then(response => response.data)
},
unfollow(userId) {
  return instance.delete(
    `follow/${userId}`)
    .then(response => response.data)
  },
  follow(userId) {
   return instance.post(
      `follow/${userId}`)
      .then(response => response.data)
    }
  
}

export const authAPI = {
  auth() {
    return instance.get(
      `auth/me`
    )
    .then(response => response.data);

  }
}

export const profileAPI = {

  setUserProfile(userId) {
    return instance.get(
`profile/${userId}`
    )
    .then(response => response.data)
  }

}