import fetch from 'node-fetch';
const GoolgeCalendarHoliday = require('google-calendar-holiday');

const getCalendar = async () => {
    var mykey = 'AIzaSyBi-qDrJ5m6WjRffxImZ3x3SWozB9YkAH4'; // typically like Gtg-rtZdsreUr_fLfhgPfgff
    var calendarid = 'en.german#holiday@group.v.calendar.google.com'; // will look somewhat like 3ruy234vodf6hf4sdf5sd84f@group.calendar.google.com

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

// const holiday = new GoolgeCalendarHoliday(
//     'AIzaSyBi-qDrJ5m6WjRffxImZ3x3SWozB9YkAH4',
//     {
//         // hkHoliday: 'zh-tw.hong_kong%23holiday%40group.v.calendar.google.com',
//         // usHoliday: 'en.usa%23holiday%40group.v.calendar.google.com',
//         brHoliday: 'pt.br%23holiday%40group.v.calendar.google.com',
//     },
// );
// // this will try to make an API call to test if the API key is valid
// holiday.init();
// holiday.isHoliday('2020-05-04').then(console.log)