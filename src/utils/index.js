export const transplants = (transplantsNumber) => {
  if (transplantsNumber === 1) {
    return `${transplantsNumber} пересадка`;
  }

  if (transplantsNumber > 1) {
    return `${transplantsNumber} пересадки`;
  }

  if (transplantsNumber === 0) {
    return "Без пересадок";
  }
};

export const duration = (minutes) => {
  const hour = Math.floor(minutes / 60);
  const min = minutes % 60;

  return `${hour > 9 ? hour : `0${hour}`}ч ${min > 9 ? min : `0${min}`}м`;
};

export const timeOfPlane = (str, duration) => {
  const date = new Date(str);
  const flyHours = duration * 60 * 1000;
  const newDate = new Date(date.getTime() + flyHours);

  const hourDeparture =
    date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  const minDeparture =
    date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  const hourArrival =
    newDate.getHours() > 9 ? newDate.getHours() : `0${newDate.getHours()}`;
  const minArrival =
    newDate.getMinutes() > 9
      ? newDate.getMinutes()
      : `0${newDate.getMinutes()}`;
  return `${hourDeparture}:${minDeparture} - ${hourArrival}:${minArrival}`;
};

export const ticketsFilter = (ticket, filter) => {
  const segmentA = String(ticket.segments[0].stops.length);
  const segmentB = String(ticket.segments[1].stops.length);
  if (!filter.includes(segmentA) && !filter.includes(segmentB)) {
    return false;
  }
  return true;
};
