import { FETCH_WEATHER } from "../actions/index";

export default function(state = [], action) {

	console.log("REDUCED Action WEATHER-------------------", action);
  switch (action.type) {


    case FETCH_WEATHER:
      return [action.payload.data, ...state]; //same as below but order is like new elem always on top

      //add  on existing state
//return state.concat([action.payload.data]);


  default :
  return state;
    }
}
