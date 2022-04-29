import { IRoom } from "../../../interfaces/room.interface";
import { ASYNC_SET_ROOM, SET_ROOM, SET_ROOM_FULFILLED, SET_ROOM_REJECTED } from "../../types/room";

export const asyncSetRoomCreator = (payload: any) => {
   return { type: ASYNC_SET_ROOM, payload };
};

export const setRoomCreator = (payload: IRoom) => {
   return { type: SET_ROOM, payload };
};

export const setRoomCreatorFulfilled = () => {
   return { type: SET_ROOM_FULFILLED };
};

export const setRoomCreatorRejected = (error: any) => {
   return { type: SET_ROOM_REJECTED, payload: error };
};
