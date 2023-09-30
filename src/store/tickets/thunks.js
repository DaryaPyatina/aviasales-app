import { createAsyncThunk } from "@reduxjs/toolkit";
import { getSearchId, getTickets } from "../../services/index";

export const fetchSearchId = createAsyncThunk(
  "tickets/fetchSearchId",
  async () => {
    const { searchId } = await getSearchId();
    return searchId;
  }
);

export const fetchTickets = createAsyncThunk(
  "tickets/fetchTickets",
  async (searchId) => {
    const data = await getTickets(searchId);

    return data;
  }
);
