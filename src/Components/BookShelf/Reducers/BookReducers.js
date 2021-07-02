export function BookReducers(state={}, action){
    switch (action.type) {
      case "POST_BOOKS":
        return {...state,...action.payload};
        break;
    }
    return state;
  };