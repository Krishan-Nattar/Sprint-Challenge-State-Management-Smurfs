import React from "react";
import axios from "axios";

export const getSmurf = () => {
  return dispatch => {
    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: "FETCH_SUCCESSFUL", payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const addSmurf = data => {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs", data)
      .then(res => {
        console.log(res);
        dispatch({ type: "FETCH_SUCCESSFUL", payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const deleteSmurf = id => {
  return dispatch => {
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(res => {
        dispatch({ type: "FETCH_SUCCESSFUL", payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const editSmurf = (id, data) => {
  console.log("deleting");
  return dispatch => {
    axios
      .put(`http://localhost:3333/smurfs/${id}`, data)
      .then(res => {
        console.log(res);
        dispatch({ type: "FETCH_SUCCESSFUL", payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const startEdit = () => {
  return {
    type: "START_EDITING"
  };
};

export const endEdit = () => {
  return {
    type: "END_EDITING"
  };
};
