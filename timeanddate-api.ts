import fetch from "node-fetch";

const getHolidays = async () => {
  // const key = 'kidHVyyzAZ';
  // const country = 'ro';
  // const year = 2020;
  // const $public = true;
  const url = `https://api.xmltime.com/holidays?accesskey=kidHVyyzAZ&expires=2020-05-06T20%3A37%3A22%2B00%3A00&signature=4ZsEkXiQMyovMdH2QTcQKzmNyiM%3D&version=3&out=js&prettyprint=1&country=ro&year=2020&types=federal`;
  const response = await fetch(url, {
    method: "get",
    headers: { "Content-Type": "application/json" },
  });

  const holidays = await response.json();

  return holidays.holidays.map((holiday) => holiday.date.iso);
};

getHolidays().then(console.log);
