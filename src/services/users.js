import { appConst } from "services/index";
import { loadState, saveState } from "app/localStorage";

export type IUserId = number;
export type IUser = {
  id: IUserId,
  fname: string,
  lname: string,
  phone: number
};

export type IUsers = {
  [IUserId]: IUser
};

const handleGetUser = id => {
  const state = loadState();
  if (!state) {
    return null;
  }
  return state.users[id];
};

export type IgetUserParams = {
  id: IUserId
};

export const getUser = (params: IgetUserParams) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(handleGetUser(params.id));
    }, appConst.apiMockTimeout);
  });
};

const handleSaveUser = (user: IUser) => {
  const state = loadState();
  if (!state.users) {
    state.users = {};
  }
  state.users[user.id] = user;
  saveState(state);
};

export const saveUser = (params: IUser) => {
  return new Promise(resolve => {
    setTimeout(() => {
      handleSaveUser(params);
      resolve();
    }, appConst.apiMockTimeout);
  });
};
