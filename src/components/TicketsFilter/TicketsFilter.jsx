import React from "react";
import { Card, Checkbox } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ticketsActions } from "../../store/tickets/slice.js";

import "./TicketsFilter.scss";

export const TicketsFilter = () => {
  const filter = useSelector((state) => {
    return state.ticketsState.filters;
  });
  const allFilter = useSelector((state) => {
    return state.ticketsState.allFilters;
  });

  const dispatch = useDispatch();

  const options = [
    { label: "Без пересадок", value: "0" },
    { label: "1 пересадка", value: "1" },
    { label: "2 пересадки", value: "2" },
    { label: "3 пересадки", value: "3" },
  ];
  const CheckboxGroup = Checkbox.Group;

  const onChangeFilters = (checkedValues) => {
    dispatch(ticketsActions.setFilter(checkedValues));
  };

  const setAllFilters = (e) => {
    dispatch(ticketsActions.setAllFilters(e.target.checked));
  };

  return (
    <Card className="filter">
      <div className="filter-item">
        <div className="filter-header">Количество пересадок </div>
        <div className="checkboxGroup">
          <Checkbox checked={allFilter} onChange={setAllFilters}>
            Все
          </Checkbox>
          <CheckboxGroup
            options={options}
            onChange={onChangeFilters}
            style={{ gap: 15 }}
            value={filter}
          />
        </div>
      </div>
    </Card>
  );
};
