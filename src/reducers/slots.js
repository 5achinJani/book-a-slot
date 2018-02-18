import { getErrorObject } from "utilities/utils";

import { getSlots, ISlots } from "services/slots.js";
import { types as slotTypes } from "reducers/slot";
export const types = {
  ON_FETCH_REQUEST: "slots/ON_FETCH_REQUEST",
  ON_FETCH_SUCCESS: "slots/ON_FETCH_SUCCESS",
  ON_FETCH_FAILURE: "slots/ON_FETCH_FAILURE",
  RESET_STATE: "slots/RESET_STATE"
};

type IinitialState = {
  data: ISlots,
  isLoading: boolean,
  isFetched: boolean,
  error: string
};

const initialState: IinitialState = {
  data: {},
  isLoading: false,
  isFetched: false,
  error: null
};

export const slots = (state = initialState, action) => {
  switch (action.type) {
    case types.ON_FETCH_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case types.ON_FETCH_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        isLoading: false,
        isFetched: true,
        error: null,
        data
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
    case slotTypes.ON_BOOK_SLOT: {
      const { slotId, user } = action.payload;
      return {
        ...state,
        data: {
          ...state.data,
          [slotId]: {
            ...state.data[slotId],
            userId: user.id
          }
        }
      };
    }
    case types.RESET_STATE: {
      return initialState;
    }
    default:
      return state;
  }
};

export const onGetSlots = () => {
  return async (dispatch, getState) => {
    const { isFetched } = getState().slots;
    if (isFetched) {
      return;
    }
    dispatch({
      type: types.ON_FETCH_REQUEST,
      payload: {}
    });
    try {
      const data = await getSlots();
      dispatch({
        type: types.ON_FETCH_SUCCESS,
        payload: { data }
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
