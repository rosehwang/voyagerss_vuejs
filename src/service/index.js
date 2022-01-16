import axios from 'axios'
import router from '../router'
import qs from 'qs'

const DOMAIN =  '/api'

const BadRequest = 400
const Unauthorized = 401
const Forbidden = 403
const NotFound = 404


export const setAuthInHeader = token => {
    axios.defaults.headers.common['Authorization'] = token ? 'Bearer ${token}' : null
}

export const onUnauthorized = (response) => {
    router.push('/login?returnPath=${encodeURIComponent(location.pathname)}')
    throw Error(response)
}
export const onForbidden = (response) => {
    alert('권한이 없습니다.')
    router.push('/')
    throw Error(response)
}

export const onBadRequest = (response) => {
    alert('잘못된요청입니다.')
    throw Error(response)
}

export const onNotFound = (response) => {
    alert('잘못된 접근입니다.')
    throw Error(response)
}


const authRequest = (method, url, data) => {
    return axios({
        headers: {
            'Authorization': 'Basic aWQ6c2VjcmV0',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        method,
        url: DOMAIN + url,
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



export const auth = {
    login(playload) {
        return authRequest('post', DOMAIN + '/oauth/token', playload)
    }
}

// const request = (method, url, data) => {
//     return axios({
//         method,
//         url: DOMAIN + url,
//         data,

//     })
// }

// const requestFile = (method, url, data) => {
//     return axios({
//         method,
//         url: DOMAIN + url,
//         data,
//         processData: false,
//         contentType: false

//     }).then(result => result)
//         .catch(error => error.response)
// }

// export const account = {
//     fetch() {
//         return request('get', DOMAIN + '/accounts')
//     },
//     create(playload) {
//         return request('post', DOMAIN + '/accounts', playload)
//     },
//     put(playload) {
//         return request('put', DOMAIN + '/accounts', playload)
//     },
//     fetchManager(playload) {
//         return request('get', DOMAIN + '/accounts/manager?page=${playload.page}&size=10&sort=id,DESC')
//     },
//     fetchManagerSearch(playload) {
//         return request('get', DOMAIN + '/accounts/manager/${playload.option}/${playload.keyword}?page=${playload.page}&size=10&sort=id,DESC')
//     },
//     idCheck(playload) {
//         return request('post', DOMAIN + '/accounts/join/check', playload)
//     },
//     createFiles(playload) {
//         return requestFile('post', DOMAIN + '/accounts/files/${playload.accountId}', playload.formData)
//     }
// }
