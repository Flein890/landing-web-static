import {configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import navbarReducer from "./reducers/NavbarReducer";
 

//importar bien los reducers

const reducers = combineReducers({
    navbar: navbarReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'], //agregar para persistir los datos
    
}

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
//funciones reductoras
reducer : persistedReducer,
//middlewares
middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
}); 

export const persistor = persistStore(store);

export default store