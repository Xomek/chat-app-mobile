import { AnyAction } from "redux";
import { IUser } from "../../../interfaces/user.interface";
import { SET_USER, SET_USER_FULFILLED, SET_USER_REJECTED } from "../../types/user";

interface UserState {
   user: IUser;
   loading: boolean;
   error: string;
}

const initialState: UserState = {
   user: <IUser>{},
   loading: false,
   error: "",
};

const userReducer = (state = initialState, action: AnyAction) => {
   switch (action.type) {
      case SET_USER: {
         return {
            ...state,
            user: action.payload,
         };
      }
      case SET_USER_FULFILLED: {
         return { ...state, loading: false };
      }
      case SET_USER_REJECTED: {
         return { ...state, loading: false, error: action.payload };
      }
      default:
         return state;
   }
};

export default userReducer;
