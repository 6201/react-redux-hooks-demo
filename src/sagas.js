import { put, takeLatest, all } from 'redux-saga/effects'
import axios from 'axios';


const getCustomData = function* () {
  let remoteData;
  yield axios.get('http://httpbin.org/json').then(res => {
    remoteData = res.data
  });
  yield put({type: "SET_DATA", payload: remoteData})
}

function* asyncCustomData() {
  yield takeLatest("ASYNC_DATA", getCustomData)
}

export default function* rootSaga() {
  yield all([asyncCustomData()])
}
