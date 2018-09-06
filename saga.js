import * as Act from 'actions';
import { put, select, call, takeEvery } from 'redux-saga/effects';
import { callTakeEvery, callTakeLatest } from 'util';
import * as Fetch from 'lib/server';



let {{template}} = function* () {
  yield callTakeEvery(Act.TEST, function* (action) {
    let data;
    switch (action.api) {
      case "list":
        data = yield call(Fetch.post, action.params);
        break;
      default:
        break;
    }
    data&&action.cb && action.cb(data);
  });
};

export default function* rootSaga() {
  yield [{{template}}()];
}
