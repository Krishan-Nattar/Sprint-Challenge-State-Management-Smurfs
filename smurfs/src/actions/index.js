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

export const editSmurf = data => {
  return dispatch => {
    axios
      .put(`http://localhost:3333/smurfs/${data.id}`, data)
      .then(res => {
        dispatch({ type: "END_EDITING" });
        dispatch({ type: "FETCH_SUCCESSFUL", payload: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

export const startEdit = data => {
  return {
    type: "START_EDITING",
    payload: data
  };
};

export const endEdit = () => {
  return {
    type: "END_EDITING"
  };
};
