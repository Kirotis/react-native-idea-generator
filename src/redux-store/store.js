import { configureStore } from "@reduxjs/toolkit";
import ideaReducer from "./idea/idea-sotre";

const store = configureStore({
    reducer: {
        idea: ideaReducer,
    },
});

export default store;
