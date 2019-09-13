import React from 'react';
import axios from 'axios';

export const getSmurf = () =>{
    return dispatch=>{
        // Start fetching dispatch?

        axios
        .get('http://localhost:3333/smurfs')
        .then(res=>{
            dispatch({type: "FETCH_SUCCESSFUL", payload: res.data})
        })
        .catch(err=>{
            console.log(err);
            // Error Dispatch?
        })
    }
    //something here
}


export const addSmurf = () =>{
    //something here
}