// import {account, order, item, qna, review, auth, cart, chat, mail} from '../api'
//
// const actions = {
//
//   LOGIN({commit, dispatch}, playload) {
//     return auth.login(playload)
//       .then(({data}) => {
//         commit('LOGIN', data.access_token)
//         dispatch('FETCH_ACCOUNT')
//       })
//   },
//
//   // 사용자
//   FETCH_ACCOUNT({commit}) {
//     return account.fetch()
//       .then(({data}) => {
//         commit('SET_ACCOUNT', data)
//         return data.status
//       })
//   },
//   FETCH_MANAGER_ACCOUNT({commit}, playload) {
//     return account.fetchManager(playload)
//       .then(({data}) => {
//         commit('SET_ACCOUNT_LIST', data)
//       })
//   },
//   ADD_ACCOUNT(_, playload) {
//     return account.create(playload)
//       .then((data) => (data.status))
//   },
//   UPDATE_ACCOUNT({dispatch}, playload) {
//     return account.put(playload)
//       .then(() => {
//         dispatch('FETCH_ACCOUNT')
//       })
//   },
//   JOIN_ID_CHECK(_, playload) {
//     return account.idCheck(playload)
//       .then((data) => (data))
//   },
//
//   // 메일보내기
//
//   SEND({}, playload) {
//     return mail.mailSend(playload)
//       .then(({data}) => {
//       })
//   }
//
// }
//
// export default actions
