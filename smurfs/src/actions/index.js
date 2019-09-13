import React from 'react';
import axios from 'axios';

export const getSmurf = () =>{
    return dispatch=>{
        // Start fetching dispatch?
        axios
        .get()
        .then(res=>{
            console.log(res);
            // Run dispatch
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