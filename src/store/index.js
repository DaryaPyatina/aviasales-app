import { configureStore } from "@reduxjs/toolkit";
import { ticketsState } from "./tickets/slice";

export const store = configureStore({
  reducer: {
    ticketsState: ticketsState,
  },
});
