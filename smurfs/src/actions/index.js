import React from 'react';
import axios from 'axios';

export const getSmurf = () =>{
    return dispatch=>{
        // Start fetching dispatch?
        console.log('get smurf action');
        axios
        .get('http://localhost:3333/smurfs')
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