import {delay, put, takeEvery, takeLatest} from 'redux-saga/effects';

// 액션 타입
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
// 액션 타입 - 리덕스 사가 이후 추가 코드
const INCREASE_ASYNC = 'INCREASE_ASYNC';
const DECREASE_ASYNC = 'DECREASE_ASYNC';

// 액션 생성 함수
export const increase = () => ({type: INCREASE});
export const decrease = () => ({type: DECREASE});
// 액션 생성 함수 - 리덕스 사가 이후 추가 코드
export const increaseAsync = () => ({type: INCREASE_ASYNC});
export const decreaseAsync = () => ({type: DECREASE_ASYNC});

function* increaseSaga() {
    yield delay(1000);  //  1초를 기다립니다.
    yield put(increase());  //  put은 특정 액션을 디스패치 해줍니다.
}
function* decreaseSaga() {
    yield delay(1000);  //  1초를 기다립니다.
    yield put(decrease());  //  put은 특정 액션을 디스패치 해줍니다.
}

export function* counterSaga() {
    yield takeEvery(INCREASE_ASYNC, increaseSaga);  //  모든 INCREASE_ASYNC 액션을 처리
    yield takeLatest(DECREASE_ASYNC, decreaseSaga); //  가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

/* 
// 리덕스 사가 이전 코드
// getState를 쓰지 않는다면 굳이 파라미터로 받아올 필요 없습니다.
export const increaseAsync = () => dispatch => {
    setTimeout(() => dispatch(increase()), 1000);
};
export const decreaseAsync = () => dispatch => {
    setTimeout(() => dispatch(decrease()), 1000);
};
*/

// 초깃값(상태가 객체가 아니라 그냥 숫자여도 상관 없습니다.)
const initialState = 0;

export default function counter(state = initialState, action) {
    switch (action.type) {
        case INCREASE:
            return state + 1;
        case DECREASE:
            return state - 1;
        default:
            return state;
    }
}