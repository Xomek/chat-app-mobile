import { all } from "redux-saga/effects";
import { roomSaga } from "./room";
import { userSaga } from "./user";

export default function* rootSaga() {
   yield all([userSaga(), roomSaga()]);
}
