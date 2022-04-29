import { AnyAction } from "redux";
import { IRoom } from "../../../interfaces/room.interface";
import { SET_ROOM } from "../../types/room";

interface RoomState {
   room: IRoom;
}

const initialState: RoomState = {
   room: <IRoom>{},
};

const roomReducer = (state = initialState, action: AnyAction) => {
   switch (action.type) {
      case SET_ROOM: {
         return {
            ...state,
            room: action.payload,
         };
      }
      default:
         return state;
   }
};

export default roomReducer;
