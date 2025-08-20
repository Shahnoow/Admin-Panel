import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usersSlice";

// Configure the Redux store
export const store = configureStore({
  reducer: {
    users: userReducer, // Add the user slice reducer under the 'users' state key
  },
});

// Export types for TypeScript (optional but good practice), or for future reference
