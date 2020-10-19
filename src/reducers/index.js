import cartReducer from "./cartReducer";

const { combineReducers } = require("redux");

export default combineReducers({ foodCart: cartReducer });
