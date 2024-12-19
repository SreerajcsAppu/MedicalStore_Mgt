import { configureStore, createReducer } from "@reduxjs/toolkit";
import usercreateReducer from './usercreateSlice'
import crudReducer from './crudSclice'


var store = configureStore({
    reducer:{
             usercreate: usercreateReducer,
             crud: crudReducer
    }
});
export default store;