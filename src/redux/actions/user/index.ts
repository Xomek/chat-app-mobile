import { IUser } from "../../../interfaces/user.interface";
import { ASYNC_SET_USER, SET_USER, SET_USER_FULFILLED, SET_USER_REJECTED } from "../../types/user";

export const asyncSetUserCreator = (user: any) => {
   return { type: ASYNC_SET_USER, payload: user };
};

export const setUserCreator = (user: IUser) => {
   return { type: SET_USER, payload: user };
};

export const setUserCreatorFulfilled = () => {
   return { type: SET_USER_FULFILLED };
};

export const setUserCreatorRejected = (error: any) => {
   return { type: SET_USER_REJECTED, payload: error };
};
