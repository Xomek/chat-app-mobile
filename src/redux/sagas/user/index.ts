import { call, put, takeLatest } from "redux-saga/effects";
import { setUserCreator, setUserCreatorFulfilled, setUserCreatorRejected } from "../../actions/user";
import { ASYNC_SET_USER } from "../../types/user";
import { db } from "../../../firebase/index";
import { collection, addDoc, getDoc } from "@firebase/firestore";
import { IUser } from "../../../interfaces/user.interface";
import { asyncSetRoomCreator } from "../../actions/room";

async function enterChat(userName: IUser) {
   try {
      const res = await addDoc(collection(db, "users"), {
         userName,
      });

      const doc = await getDoc(res);
      const name = await doc.data()!.userName;

      return name;
   } catch (error) {
      return error;
   }
}

export function* userEnterChatWorker({ payload }: any) {
   try {
      const user: IUser = yield call(enterChat, payload.userName);
      yield put(setUserCreatorFulfilled());
      yield put(setUserCreator(user));
      yield put(asyncSetRoomCreator({ theme: payload.theme, subTheme: payload.subTheme }));
   } catch (error) {
      yield put(setUserCreatorRejected(error));
   }
}

export function* userWatcher() {
   yield takeLatest(ASYNC_SET_USER, userEnterChatWorker);
}

export function* userSaga() {
   yield userWatcher();
}
