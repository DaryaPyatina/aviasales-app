import React, { useEffect } from "react";
import { TicketList } from "../TicketList/TicketList";
import { TicketsFilter } from "../TicketsFilter/TicketsFilter";
import { fetchSearchId } from "../../store/tickets/thunks";
import Icon from "../../assets/Logo.png";

import "./App.scss";
import { useDispatch } from "react-redux";

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);

  return (
    <div className="app">
      <header className="header">
        <img src={Icon} alt="icon" />
      </header>
      <div className="wrapper">
        <TicketsFilter />
        <TicketList />
      </div>
    </div>
  );
};

export default App;
