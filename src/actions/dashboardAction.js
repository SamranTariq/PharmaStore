import { SHOW_USER_LIST, HIDE_USER_LIST } from "./types";

export const showListUsers = () => {
  return {
    type: SHOW_USER_LIST,
  };
};
export const hideListUsers = () => {
  console.log("Action");
  return {
    type: HIDE_USER_LIST,
  };
};
