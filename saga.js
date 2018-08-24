import * as Act from 'actions';
import { put, select, call, takeEvery } from 'redux-saga/effects';
import { callTakeEvery, callTakeLatest } from 'util';
import * as Fetch from 'lib/server';
/**
 * 测试用例
 */
let target_common_methods = function*() {
  yield callTakeEvery(Act.TARGET_COMMON_METHODS, function*(action) {
    let data = yield call(Fetch.target_list_init, action.params);
    if (data) {
      action.cb && action.cb(data);
    }
  });
};

export default function* rootSaga() {
  yield [target_common_methods()];
}
