import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { TicketSort } from "../TicketSort/TicketSort";
import { Ticket } from "../Ticket/Ticket";
import { fetchTickets } from "../../store/tickets/thunks";
import { Progress, Alert } from "antd";

import { ticketsFilter } from "../../utils";

import "./TicketList.scss";
import { useSelector, useDispatch } from "react-redux";

export const TicketList = () => {
  const [number, setNumber] = useState(5);

  const tickets = useSelector((state) => {
    return state.ticketsState.tickets;
  });

  const filters = useSelector((state) => {
    return state.ticketsState.filters;
  });

  const searchId = useSelector((state) => {
    return state.ticketsState.searchId;
  });

  const sortFilter = useSelector((state) => {
    return state.ticketsState.sortFilter;
  });

  const addStatus = useSelector((state) => {
    return state.ticketsState.status;
  });

  const stop = useSelector((state) => {
    return state.ticketsState.stop;
  });

  const progress = useSelector((state) => {
    return state.ticketsState.progress;
  });

  const dispatch = useDispatch();
  useEffect(() => {
    if (searchId) {
      dispatch(fetchTickets(searchId));
    }
  }, [searchId]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (searchId && !stop && filters.length > 0) {
        dispatch(fetchTickets(searchId));
      }
    }, 3000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="main">
      <TicketSort />

      {addStatus === "loading" && filters.length > 0 && (
        <Progress percent={progress} showInfo={false} status="active" />
      )}
      {filters.length === 0 && (
        <Alert
          description="Рейсов, подходящих под заданные фильтры, не найдено"
          type="info"
          showIcon
        />
      )}
      {tickets
        .filter((ticket) => {
          return ticketsFilter(ticket, filters);
        })
        .sort((ticket1, ticket2) => {
          if (sortFilter === "cheap") {
            return ticket1.price - ticket2.price;
          }
          if (sortFilter === "fast") {
            return (
              ticket1.segments[0].duration +
              ticket1.segments[1].duration -
              (ticket2.segments[0].duration + ticket2.segments[1].duration)
            );
          }
          return ticket2.price - ticket1.price;
        })
        .slice(0, number)

        .map((elem, index) => (
          <Ticket ticketInfo={elem} key={index + 1} />
        ))}
      {addStatus !== "init" && !!tickets.length && !!filters.length && (
        <div className="button-footer">
          <Button
            onClick={() => {
              setNumber((prev) => {
                return prev + 5;
              });
            }}
            type="primary"
          >
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </Button>
        </div>
      )}
    </div>
  );
};
