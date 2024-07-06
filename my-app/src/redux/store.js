import { createStore } from "redux";
import reducers from "./reducers/index"

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
//if we want to see redux store in chrome dev tool need this extension 

export default store;