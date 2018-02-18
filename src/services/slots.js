import { appConst } from "services/index";
import { loadState, saveState } from "app/localStorage";
import { IUserId, IUser } from "services/users";
export type ISlotId = number;
export type ISlot = {
  id: ISlotId,
  slot: string,
  userId: IUserId
};

export type ISlots = {
  [ISlotId]: ISlot
};

const slotsMock: ISlots = {
  1: {
    id: 1,
    slot: "09:00 AM to 10:00 AM",
    userId: null
  },
  2: {
    id: 2,
    slot: "10:00 AM to 11:00 AM",
    userId: null
  },
  3: {
    id: 3,
    slot: "11:00 AM to 12:00 PM",
    userId: null
  },
  4: {
    id: 4,
    slot: "12:00 PM to 01:00 PM",
    userId: null
  },
  5: {
    id: 5,
    slot: "01:00 PM to 02:00 PM",
    userId: null
  },
  6: {
    id: 6,
    slot: "02:00 PM to 03:00 PM",
    userId: null
  },
  7: {
    id: 7,
    slot: "03:00 PM to 04:00 PM",
    userId: null
  },
  8: {
    id: 8,
    slot: "04:00 PM to 05:00 PM",
    userId: null
  }
};

const initLocalStorageState = () => {
  const state = {
    slots: slotsMock,
    users: {}
  };
  saveState(state);
  return state;
};

const handleGetSlots = () => {
  const state = loadState();
  if (!state) {
    initLocalStorageState();
    return slotsMock;
  }
  return state.slots;
};

export const getSlots = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(handleGetSlots());
    }, appConst.apiMockTimeout);
  });
};

const handleGetSlotWithUser = id => {
  let state = loadState();
  if (!state || !state.slots) {
    state = initLocalStorageState();
  }
  const slot = state.slots[id];
  let user = null;
  if (slot) {
    user = state.users[slot.userId];
  }
  return { slot, user };
};

export type IGetSlotParams = {
  id: ISlotId
};

export const getSlot = (params: IGetSlotParams) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(handleGetSlotWithUser(params.id));
    }, appConst.apiMockTimeout);
  });
};

export type IBookSlotParams = {
  slotId: ISlotId,
  user: IUser
};

const handleBookSlot = (params: IBookSlotParams) => {
  const { slotId, user } = params;
  let state = loadState();
  state = {
    ...state,
    users: {
      ...state.users,
      [user.id]: user
    },
    slots: {
      ...state.slots,
      [slotId]: {
        ...state.slots[slotId],
        userId: user.id
      }
    }
  };
  saveState(state);
};

export const bookSlot = (params: IBookSlotParams) => {
  return new Promise(resolve => {
    setTimeout(() => {
      handleBookSlot(params);
      resolve();
    }, appConst.apiMockTimeout);
  });
};
