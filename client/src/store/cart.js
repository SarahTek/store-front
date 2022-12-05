import React from 'react';

let initialState = {
  counter: 0
}

function cartReducer(state = initialState, action) {

  switch (action.type) {
    case 'INC':
      return ({ ...state, counter: state.counter + 1 });
    case "DEC":
      return ({ ...state, counter: state.counter - 1 })
    default:
      return state;

  }

}

export default cartReducer;
