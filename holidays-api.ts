import fetch from 'node-fetch';

const getHolidays = async () => {

    const key = '7a190625-7fdb-495b-a5f9-f8c58183e2e2';
    const country = 'BR';
    const year = 2019;
    const $public = true;
    const url = `https://holidayapi.com/v1/holidays?key=${key}&country=${country}&year=${year}&public=${$public}`;
    const response = await fetch(url, {
        method: 'get',
        headers: { "Content-Type": "application/json" },
    });

    return await response.json()
}

const pad = (input: number) => {
    if (input < 10) {
        return '0' + input;
    }
    return input;
}

const getDateString = (date: Date) => {
    return `${date.getUTCFullYear()}-${pad(date.getUTCMonth() + 1)}-${pad(date.getUTCDate())}`
}

const isValidBusinessDate = async (date: Date): Promise<boolean> => {
    const holidaysResponse = await getHolidays();
    const nonBusinessDays = holidaysResponse.holidays.map(holiday => holiday.observed);

    const dateStr = getDateString(date);
    return !nonBusinessDays.includes(dateStr);
}

const holiday = new Date(2019, 0, 1);
const businessDay = new Date(2019, 0, 2);

isValidBusinessDate(holiday).then(res => console.log(holiday, res));
isValidBusinessDate(businessDay).then(res => console.log(businessDay, res));
