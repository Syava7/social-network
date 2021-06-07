import axios from 'axios'


export enum ResultCode {
  Success = 0,
  Error = 1,
  CaptchaIsRequired = 10
}

export enum ResultCodeForCaptcha {
  CaptchaIsRequired = 10
}

type MeResponseType = {
  data: {
    id: number
    email: string
    login: string
  }
  resultCode: ResultCode
  messages: Array<string>
}

type LoginResponseType = {
  data: {
    userId: number
  }
  resultCode: ResultCode | ResultCodeForCaptcha
  messages: Array<string>
}


const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '8a4ddf1f-f60c-4f9d-8b0a-fc3f789364fb'
  }
})


export const usersAPI = {
  getUsers(currentPage: number, pageSize: number)  {
    return instance.get(`users?page=${currentPage}&count=${pageSize}` )
      .then(response => response.data)
  },
  follow(userId: number) {
    return instance.post(`follow/${userId}` )
  },
  unfollow(userId: number) {
    return instance.delete(`follow/${userId}` )
  },
  getProfile(userId: number) {
    return profileAPI.getProfile(userId)   
  } 
}

export const profileAPI = {
  getProfile(userId: number) {
    return instance.get(`profile/${userId}`)   
  },
  getStatus(userId: number) {
    return instance.get(`profile/status/${userId}`)   
  },
  updateStatus(status: string) {
    return instance.put(`profile/status`, { status })   
  },
  savePhoto(photofile: any) {
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
    return instance.get<MeResponseType>(`auth/me`).then(res => res.data)
  },
  login(email: string, password: string, rememberMe: boolean = false, captcha: null | string = null) {
    return instance.post<LoginResponseType>(`auth/login`, {email, password, rememberMe, captcha}).then(res => res.data)
  },
  logout() {
    return instance.delete(`auth/login`)
  }
}

export const securityAPI = {
  getCaptchaUrl() {
    return instance.get(`security/get-captcha-url`)
  }
}
  
