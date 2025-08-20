import { createSlice } from "@reduxjs/toolkit";

// Initial state for the user slice
const initialState = {
  users: [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      role: "Admin",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "098-765-4321",
      role: "Editor",
    },
  ],
};

// Create the user slice
export const userSlice = createSlice({
  name: "users", // Name of the slice
  initialState,
  reducers: {
    // Reducer to add a new user
    addUser: (state, action) => {
      // Generate a simple ID (for frontend-only, this is acceptable)
      const newId = Math.max(0, ...state.users.map((u) => u.id)) + 1;
      const newUser = { ...action.payload, id: newId };
      state.users.push(newUser);
    },
    // Reducer to edit an existing user
    editUser: (state, action) => {
      const { id, ...updatedData } = action.payload;
      const existingUser = state.users.find((user) => user.id === id);
      if (existingUser) {
        Object.assign(existingUser, updatedData);
      }
    },
    // Reducer to delete a user
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// Export the generated action creators
export const { addUser, editUser, deleteUser } = userSlice.actions;

// Export the reducer function for the store
export default userSlice.reducer;
