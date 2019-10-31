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
  }
}

 
  
