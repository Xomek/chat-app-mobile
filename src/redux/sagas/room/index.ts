import { addDoc, collection, getDoc } from "firebase/firestore";
import { call, put, takeLatest } from "redux-saga/effects";
import { db } from "../../../firebase";
import { IRoom } from "../../../interfaces/room.interface";
import { setRoomCreator, setRoomCreatorFulfilled, setRoomCreatorRejected } from "../../actions/room";
import { ASYNC_SET_ROOM } from "../../types/room";

async function enterChat(room: IRoom) {
   console.log(room);
   try {
      const res = await addDoc(collection(db, "rooms"), {
         theme: room.theme,
         subTheme: room.subTheme,
      });

      const doc = await getDoc(res);
      const theme = await doc.data()!.theme;
      const subTheme = await doc.data()!.subTheme;

      return { theme, subTheme };
   } catch (error) {
      return error;
   }
}

export function* roomEnterChatWorker({ payload }: any) {
   try {
      const room: IRoom = yield call(enterChat, payload);
      yield put(setRoomCreatorFulfilled());
      yield put(setRoomCreator(room));
   } catch (error) {
      yield put(setRoomCreatorRejected(error));
   }
}

export function* roomWatcher() {
   yield takeLatest(ASYNC_SET_ROOM, roomEnterChatWorker);
}

export function* roomSaga() {
   yield roomWatcher();
}
