import React from "react";

const initialState = {
  smurfs: [],
  editing: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_EDITING":
      console.log("start");
      return {
        ...state,
        editing: true

      };
    case "END_EDITING":
      console.log("end");
      return {
        ...state,
        editing: false
      };

    case "FETCH_SUCCESSFUL":
      return {
        ...state,
        smurfs: action.payload
      };
    default:
      return state;
  }
};
