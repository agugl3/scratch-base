import { put, takeLatest, all } from 'redux-saga/effects';

function* fetchList(action) {
  let payload = {};
  if(action && action.payload){
    payload = action.payload;
  }

  var params = Object.keys(payload)
  .filter(function (key) {
    return payload[key] ? true : false
  })
  .map(function (key) {
    return encodeURIComponent(key) + '=' + encodeURIComponent(payload[key])
  })
  .join('&');
  

  const data = yield fetch('https://rickandmortyapi.com/api/character/?'+ params,  { method: 'GET' })
    .then(response => response.json());

  yield put({ type: "LIST_RECEIVED", jsonObj: data || [{ error: json.message }] });
}

function* actionWatcher() {
  yield takeLatest('GET_LIST', fetchList)
}


export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
