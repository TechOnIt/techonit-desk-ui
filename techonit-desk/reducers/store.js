import RootReducers from "./index";
import { createStore } from "redux";
const store = createStore(RootReducers)
export default store