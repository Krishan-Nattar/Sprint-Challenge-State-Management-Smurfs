import React from 'react';

const initialState = {
    smurfs: []
}

export const reducer = (state=initialState, action) =>{
    switch(action.type){
        case "FETCH_SUCCESSFUL":
            return {
                smurfs: action.payload
            }
        default: 
            return state;
    }
}