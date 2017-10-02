import { FETCH_WEATHER } from '../actions/index'

// remember reducers are just functions
// initial state is an array because we are going to have a list of cities
export default function(state = [], action){

	switch(action.type){
		case FETCH_WEATHER:
			// NEVER MANIPULATE STATE
			// We use concat because it doesn't mutate state 
			// we are returning a new version of our state
			// return state.concat([action.payload.data]);
			// Or we can use the ES6 way, which makes a new array
			// then puts action.payload.data inside it and then
			// takes that state array and inserts it in 
			// adds the record at the top of the array.
			return [ action.payload.data, ...state ] // [city, city ,city ] NOT [city, [city, city]]
	}

	return state;
}