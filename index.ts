import fetch from 'node-fetch';

const getCalendar = async () => {
    const url = 'https://www.googleapis.com/calendar/v3/calendars/pt.brazilian%23holiday%40group.v.calendar.google.com/events?key=AIzaSyBi-qDrJ5m6WjRffxImZ3x3SWozB9YkAH4';

    const response = await fetch(url,
        {
            method: 'get',
            headers: { 'Content-Type': 'application/json' },
        });
    const responseJson = await response.json();
    console.log(JSON.stringify(responseJson));
}

getCalendar();