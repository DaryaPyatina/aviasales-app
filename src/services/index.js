import axios from "axios";

export const getSearchId = async () => {
  const { data } = await axios.get(
    "https://aviasales-test-api.kata.academy/search"
  );
  return data;
};

export const getTickets = async (searchId) => {
  const { data } = await axios.get(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`
  );

  return data;
};
