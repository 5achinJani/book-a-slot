import { getErrorObject, genUniqueId } from "utilities/utils";

import {
  getSlot,
  bookSlot,
  IBookSlotParams,
  ISlot,
  IGetSlotParams
} from "services/slots.js";
import { IUser } from "services/users";
import { navigateToIndex } from "app/navigation";

export const types = {
  ON_FETCH_REQUEST: "slot/ON_FETCH_REQUEST",
  ON_FETCH_SUCCESS: "slot/ON_FETCH_SUCCESS",
  ON_FETCH_FAILURE: "slot/ON_FETCH_FAILURE",
  ON_BOOK_SLOT: "slot/ON_BOOK_SLOT",
  RESET_STATE: "slot/RESET_STATE"
};

export type IinitialState = {
  user: IUser,
  slot: ISlot,
  isLoading: boolean,
  error: string
};

const initialState: IinitialState = {
  user: null,
  slot: {},
  isLoading: false,
  error: null
};

export const slot = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_FETCH_REQUEST: {
      return {
        ...initialState,
        isLoading: true
      };
    }
    case types.ON_FETCH_SUCCESS: {
      const { user, slot } = action.payload;
      return {
        ...state,
        isLoading: false,
        error: null,
        user,
        slot
      };
    }
    case types.ON_FETCH_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error
      };
    }
    case types.RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export const onGetSlot = (params: IGetSlotParams) => {
  return async (dispatch, getState) => {
    dispatch({
      type: types.ON_FETCH_REQUEST,
      payload: {}
    });
    try {
      const { user = null, slot } = await getSlot(params);
      if (!slot) {
        dispatch(navigateToIndex());
        return;
      }
      dispatch({
        type: types.ON_FETCH_SUCCESS,
        payload: { user, slot }
      });
    } catch (error) {
      const { message } = getErrorObject(error);
      dispatch({
        type: types.ON_FETCH_FAILURE,
        payload: { error: message }
      });
    }
  };
};

export const onBookSlot = (params: IBookSlotParams) => {
  return async dispatch => {
    let { slotId, user } = params;
    if (!user.id) {
      user.id = genUniqueId();
    }
    try {
      await bookSlot({ slotId, user });
      dispatch({
        type: types.ON_BOOK_SLOT,
        payload: { slotId, user }
      });
      dispatch(navigateToIndex());
    } catch (error) {
      const { message } = getErrorObject(error);
      console.error(message);
      // show toastr
    }
  };
};
