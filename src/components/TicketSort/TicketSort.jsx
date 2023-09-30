import React from "react";
import { Radio } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ticketsActions } from "../../store/tickets/slice.js";

import "./TicketSort.scss";

export const TicketSort = () => {
  const sort = useSelector((state) => {
    return state.ticketsState.sortFilter;
  });

  const dispatch = useDispatch();

  const setSort = (e) => {
    dispatch(ticketsActions.setSortFilter(e.target.value));
  };

  return (
    <Radio.Group value={sort} onChange={setSort} buttonStyle="solid">
      <Radio.Button className="radioButton" value="cheap">
        САМЫЙ ДЕШЕВЫЙ
      </Radio.Button>
      <Radio.Button className="radioButton" value="fast">
        САМЫЙ БЫСТРЫЙ
      </Radio.Button>
      <Radio.Button className="radioButton" value="optimal">
        ОПТИМАЛЬНЫЙ
      </Radio.Button>
    </Radio.Group>
  );
};
