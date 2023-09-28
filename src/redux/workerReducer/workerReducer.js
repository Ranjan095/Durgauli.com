/** @format */

import {
  GET_WORKER_ERROR,
  GET_WORKER_REQUEST,
  GET_WORKER_SUCCESS,
} from "./workerType";

let initialState = {
  workers: [],
  isLoading: false,
  isError: false,
};

export let workerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_WORKER_REQUEST:
      return { ...state, isLoading: true };
    case GET_WORKER_SUCCESS:
      return { ...state, workers: payload, isLoading: false };
    case GET_WORKER_ERROR:
      return { ...state, isError: true, isLoading: false };
    default:
      return state;
  }
};
