import axios from "axios";
import { onBadRequest,onForbidden,onUnauthorized,onNotFound} from '@/service/index';

const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404


const crudService = {
  getByPath(route, data) {
    return axios.get('/api/' + route + '/' + data)
          .then(result => result )
          .catch(({response}) => {
            if (response.status === Unauthorized) return onUnauthorized()
            else if (response.status == Forbidden) return onForbidden(response)
            else if (response.status == BadRequest) return onBadRequest(response)
            else if (response.status == NotFound) return onNotFound(response)
            throw Error(response)
          });
  },
  getRequest(route) {
    return axios.get('/api/' + route)
          .then(result => result )
          .catch(({response}) => {
            if (response.status === Unauthorized) return onUnauthorized()
            else if (response.status == Forbidden) return onForbidden(response)
            else if (response.status == BadRequest) return onBadRequest(response)
            else if (response.status == NotFound) return onNotFound(response)
            throw Error(response)
          });
  },
  getDataByParam(route, data) {
    return axios.get('/api/' + route + "/params", data)
    .then(result => result )
          .catch(({response}) => {
            if (response.status === Unauthorized) return onUnauthorized()
            else if (response.status == Forbidden) return onForbidden(response)
            else if (response.status == BadRequest) return onBadRequest(response)
            else if (response.status == NotFound) return onNotFound(response)
            throw Error(response)
          });
  },
  update(route, data) {
    return axios.put('/api/' + route , data)
    .then(result => result )
          .catch(({response}) => {
            if (response.status === Unauthorized) return onUnauthorized()
            else if (response.status == Forbidden) return onForbidden(response)
            else if (response.status == BadRequest) return onBadRequest(response)
            else if (response.status == NotFound) return onNotFound(response)
            throw Error(response)
          });
  },
  save(route, data) {
    return axios.post('/api/' + route , data)
    .then(result => result )
          .catch(({response}) => {
            if (response.status === Unauthorized) return onUnauthorized()
            else if (response.status == Forbidden) return onForbidden(response)
            else if (response.status == BadRequest) return onBadRequest(response)
            else if (response.status == NotFound) return onNotFound(response)
            throw Error(response)
          });
  },

  fileUpload(route, data) {
    return axios.post('/api/' + route + '/files', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
        "Process-Data": false,
      }
    })
    .then(result => result )
          .catch(({response}) => {
            if (response.status === Unauthorized) return onUnauthorized()
            else if (response.status == Forbidden) return onForbidden(response)
            else if (response.status == BadRequest) return onBadRequest(response)
            else if (response.status == NotFound) return onNotFound(response)
            throw Error(response)
          });
  },
  fileDown(route, data) {
    var param = {
      params: {
        folderPath : route,
        filename: data
      }}
    window.location.href = '/api/file?folderPath=' + route + '&filename=' + data;

    return axios.get('/api/file/', param, {responseType: "blob"});
  }
}
export default crudService;

