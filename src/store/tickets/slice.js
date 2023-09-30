import { createSlice } from "@reduxjs/toolkit";
import { fetchSearchId, fetchTickets } from "./thunks";

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    searchId: null,
    tickets: [],
    stop: false,
    allFilters: true,
    filters: ["0", "1", "2", "3"],
    sortFilter: "cheap",
    progress: 0,
    status: "init", // "loading", "success", "error"
  },
  reducers: {
    setAllFilters(state, action) {
      if (!action.payload) {
        state.filters = [];
      } else {
        state.filters = ["0", "1", "2", "3"];
      }
      state.allFilters = action.payload;
    },
    setFilter(state, action) {
      if (action.payload.length === 4) {
        state.allFilters = true;
      } else {
        state.allFilters = false;
      }
      state.filters = action.payload;
    },
    setSortFilter(state, action) {
      state.sortFilter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSearchId.fulfilled, (state, action) => {
      state.searchId = action.payload;
    });

    builder
      .addCase(fetchTickets.fulfilled, (state, action) => {
        state.stop = action.payload.stop;
        state.tickets = [...state.tickets, ...action.payload.tickets];
        if (action.payload.stop) {
          state.status = "success";
        }
        state.progress = state.progress + 5;
      })
      .addCase(fetchTickets.pending, (state) => {
        state.status = "loading";
      });
  },
});

export const ticketsState = ticketsSlice.reducer;
export const ticketsActions = { ...ticketsSlice.actions };
