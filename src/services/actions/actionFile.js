import { ADDITION, MULTIPLICATION } from "../store/constants";

/**
 * @description for addition
 * @param {*} a
 * @param {*} b
 * @returns
 */
export const addition = (a, b) => (dispatch) => {
  dispatch({
    type: ADDITION,
    payload: a + b,
  });
};

/**
 * @description for multiplication
 * @param {*} a
 * @param {*} b
 * @returns
 */
export const multiplyFun = (a, b) => (dispatch) => {
  dispatch({
    type: MULTIPLICATION,
    payload: a * b,
  });
};
