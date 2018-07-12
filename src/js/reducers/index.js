import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
  articles: []
};

// // just returns the initial state
// const rootReducer = (state = initialState, action) => state;

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      // // the below code is directly changing the original state object.
      // // and is therefore breaking the immutability rule
      // state.articles.push(action.payload);
      // return state;
      return { ...state, articles: [...state.articles, action.payload] };
    default:
      return state;
  }
};

// const rootReducer = (state = initialState, action) => {
//   const handler = ACTION_HANDLERS[action.type]
//   return handler ? handler(state, action) : state
// }


export default rootReducer;