//I created a folder "store" that contains two files "index" and "reducer"
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducer"

const store= configureStore({

    reducer:{
       counter: counterReducer
    }
})
export default store