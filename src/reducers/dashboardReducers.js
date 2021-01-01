import { SHOW_USER_LIST, HIDE_USER_LIST } from "../actions/types";

const initialState = {
  ShowUserList: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SHOW_USER_LIST:
      return {
        ...state,
        ShowUserList: true,
      };
    case HIDE_USER_LIST:
      console.log("reducer");
      return {
        ...state,
        ShowUserList: false,
      };
    default:
      return state;
  }
}
