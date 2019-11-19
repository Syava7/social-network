import * as axios from 'axios'


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '8a4ddf1f-f60c-4f9d-8b0a-fc3f789364fb'
  }
})


export const usersAPI = {
  getUsers(currentPage, pageSize)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}` )
      .then(response => response.data)
  },
  follow(userId) {
    return instance.post(`follow/${userId}` )
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}` )
  },
  getProfile(userId) {
    return profileAPI.getProfile(userId)   
  } 
}

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/${userId}`)   
  },
  getStatus(userId) {
    return instance.get(`profile/status/${userId}`)   
  },
  updateStatus(status) {
    return instance.put(`profile/status`, { status })   
  },
  savePhoto(photofile) {
    let formData = new FormData()
    formData.append('image', photofile)
    return instance.put(`profile/photo`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  }   
}

export const authAPI = {
  me() {
    return instance.get(`auth/me`)
  },
  login(email, password, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe})
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}
  
