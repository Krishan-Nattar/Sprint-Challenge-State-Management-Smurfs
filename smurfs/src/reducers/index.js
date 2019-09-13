import React from "react";

const initialState = {
  smurfs: [],
  editing: false,
  edit_details: {
    name: "",
    age: "",
    height: "",
    id: ""
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_EDITING":
      return {
        ...state,
        editing: true,
        edit_details: {
          ...action.payload
        }
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
