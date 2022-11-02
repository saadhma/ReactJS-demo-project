import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = `https://jsonplaceholder.typicode.com/users`;
async function getApi() {
  try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        });
        return await response.json();
    } catch (error) {
        throw error;
    }
}

function* fetchUsers() {
   try {
      const users = yield call(getApi);
      yield put({type: 'GET_USERS_SUCCESS', users: users});
   } catch (e) {
      yield put({type: 'GET_USERS_FAILED', message: e.message});
   }
}

function* removeUserFromList(id) {
    try {
       yield put({type: 'REMOVE_A_USER', action: id});
    } catch (e) {
       console.log(e);
    }
 }

function* userSaga() {
   yield takeEvery('GET_USERS_REQUESTED', fetchUsers);
   yield takeEvery('REMOVE_A_USER', removeUserFromList);
}

export default userSaga;