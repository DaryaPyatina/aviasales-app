import React from "react";
import { Card, List } from "antd";

import { transplants, duration, timeOfPlane } from "../../utils";

import "./Ticket.scss";

export const Ticket = ({ ticketInfo }) => {
  const { price, segments, carrier } = ticketInfo;
  const [ticketDeparture, ticketArrival] = segments;

  const infoTicketDeparture = [
    {
      info: `${ticketDeparture.origin}-${ticketDeparture.destination}`,
      data: timeOfPlane(ticketDeparture.date, ticketDeparture.duration),
    },
    {
      info: "В пути",
      data: duration(ticketDeparture.duration),
    },
    {
      info: transplants(ticketDeparture.stops.length),
      data: ticketDeparture.stops.join(",") || "-",
    },
  ];

  const infoTicketArrival = [
    {
      info: `${ticketArrival.origin}-${ticketArrival.destination}`,
      data: timeOfPlane(ticketArrival.date, ticketArrival.duration),
    },
    {
      info: "В пути",
      data: duration(ticketArrival.duration),
    },
    {
      info: transplants(ticketArrival.stops.length),
      data: ticketArrival.stops.join(", ") || "-",
    },
  ];

  return (
    <Card className="ticket">
      <div className="header-ticket">
        <div className="price">{`${price.toLocaleString()}  Р`}</div>
        <div className="logo">
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" />
        </div>
      </div>

      <div className="info-ticket">
        <List
          grid={{
            gutter: 16,
            column: 3,
          }}
          dataSource={infoTicketDeparture}
          renderItem={(item) => (
            <List.Item>
              <div className="flight">
                <div className="ticket__plane-title">{item.info}</div>
                <div className="ticket__plane-data">{item.data}</div>
              </div>
            </List.Item>
          )}
        />
        <List
          grid={{
            gutter: 16,
            column: 3,
          }}
          dataSource={infoTicketArrival}
          renderItem={(item) => (
            <List.Item>
              <div className="flight">
                <div className="ticket__plane-title">{item.info}</div>
                <div className="ticket__plane-data">{item.data}</div>
              </div>
            </List.Item>
          )}
        />
      </div>
    </Card>
  );
};
