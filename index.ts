import fetch from "node-fetch";
import { calendar_v3, google } from "googleapis";

const apis = google.getSupportedAPIs();

const getCalendar = async () => {
  const url =
    "https://www.googleapis.com/calendar/v3/calendars/en.brazilian%23holiday%40group.v.calendar.google.com/events?key=AIzaSyBi-qDrJ5m6WjRffxImZ3x3SWozB9YkAH4";

  const response = await fetch(url, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};

// método para extrair a lista de holidays
const getHolidaysList = async () => {
  const response = await getCalendar();

  const holidaysList = response.items.map((item) => {
    return {
      summary: item.summary,
      start: item.start.date,
      end: item.end.date,
    };
  });

  //   console.log(holidaysList);
  //   console.log(calendar_v3.Resource$Calendarlist);
};

// função que descobre se um dado dia é dia útil
const isBusinessDay = async (day: Date): Promise<boolean> => {
  return true;
};

// função que descobre dado um dia, descobre o próximo dia útil

////
getHolidaysList();
