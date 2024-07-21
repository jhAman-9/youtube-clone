import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addChatMessages: (state, action) => {
      if (state.messages.length >= 35) {
        state.messages.splice(0, 1); // Remove the first element to keep the array length within the limit
      }
      state.messages.push(action.payload);
    },
  },
});

export const { addChatMessages } = chatSlice.actions;
export default chatSlice.reducer;
