import axios from 'axios';
import qs from 'qs'
import { onBadRequest,onForbidden,onUnauthorized,onNotFound} from '@/service/index'
import crudService from "@/service/crudService";

const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404

export const setAuthInHeader = token => {
  axios.defaults.headers.common['Authorization'] = token ? `Bearer ${token}` : null
}

export default function authHeader () {
  let accessToken = localStorage.getItem('access_token');
  if (accessToken) {
    return { Authorization: accessToken }
  } else {
    return false
  }
}

export const account = {

  login(playload) {
    return authRequest('post', '/oauth/token', playload)
  },
  fetch() {
    return crudService.getRequest('/accounts')
      .catch(response => {
        throw Error(response)
      })
  },
  idCheck(playload) {
    return crudService.save('/accounts/join/check', playload)
  },
  createFiles(playload) { 
    return crudService.fileDown(  `/accounts/files/${playload.accountId}`, playload.formData)
  }
}

export const authRequest = (method, url, data) => {
  return axios({
    headers: {
      'Authorization': 'Basic aWQ6c2VjcmV0',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    method,
    url:  '/api' + url,
    data: qs.stringify(data)
  }).then(result => result)
    .catch(({response}) => {
      if (response.status === Unauthorized) return onUnauthorized()
      else if (response.status == Forbidden) return onForbidden(response)
      else if (response.status == BadRequest) return onBadRequest(response)
      else if (response.status == NotFound) return onNotFound(response)
      throw Error(response)
    })
}






