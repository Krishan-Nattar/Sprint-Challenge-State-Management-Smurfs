import React from 'react';
import axios from 'axios';

export const getSmurf = () =>{
    return dispatch=>{
        axios
        .get('http://localhost:3333/smurfs')
        .then(res=>{
            dispatch({type: "FETCH_SUCCESSFUL", payload: res.data})
        })
        .catch(err=>{
            console.log(err);
        })
    }
}


export const addSmurf = (data) =>{
    return dispatch=>{
        axios
        .post('http://localhost:3333/smurfs', data)
        .then(res=>{
            console.log(res)
            dispatch({type: "FETCH_SUCCESSFUL", payload: res.data})
        })
        .catch(err=>{
            console.log(err);
        })
    }
}

export const deleteSmurf = (id) =>{
    console.log('deleting');
    return dispatch=>{
        axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(res=>{
            console.log(res)
            dispatch({type: "FETCH_SUCCESSFUL", payload: res.data})
        })
        .catch(err=>{
            console.log(err);
        })
    }
}