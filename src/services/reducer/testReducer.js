import { ADDITION, MULTIPLICATION } from "../store/constants";

const initialState = {
  addData: "",
  mulData: "",
};

export const testReducer = (state = initialState, actions) => {
  const { type, payload } = actions;
  switch (type) {
    case ADDITION: {
      return {
        ...state,
        addData: payload,
      };
    }
    case MULTIPLICATION: {
      return {
        ...state,
        mulData: payload,
      };
    }
    default: {
      return state;
    }
  }
};
