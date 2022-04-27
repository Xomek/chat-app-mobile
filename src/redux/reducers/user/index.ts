import { AnyAction } from "redux";

interface UserState {
   userName: string;
   theme: string;
   subTheme: string;
}

const initialState: UserState = {
   userName: "",
   theme: "",
   subTheme: "",
};

const userReducer = (state = initialState, action: AnyAction) => {
   switch (action.type) {
      default:
         return state;
   }
};

export default userReducer;
