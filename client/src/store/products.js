
import React from 'react';

let initialState = {
  counter: 0
}

function productsReducer(state = initialState, action) {

  switch (action.type) {
    case 'INC':
      return ({ ...state, counter: state.counter + 1 });
    case "DEC":
      return ({ ...state, counter: state.counter - 1 })
    default:
      return state;

  }

}

export default productsReducer;
