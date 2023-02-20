import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import App from "./App";
import { setupListeners } from "@reduxjs/toolkit/query";
import { rickMortyApi } from "./services/rickMortyConnect";
import { searchSlice } from "./slices/search";
import { pageSlice } from "./slices/page";
import "./index.css";

const store = configureStore({
  reducer: {
    [rickMortyApi.reducerPath]: rickMortyApi.reducer,
    search: searchSlice.reducer,
    setpage: pageSlice.reducer,
  },
  // Adding the api middleware to enable caching
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rickMortyApi.middleware),
});
setupListeners(store.dispatch);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
