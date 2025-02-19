function generateCalendarDays(month, year) {
    const calendarDays = document.getElementById('calendar-days');
    calendarDays.innerHTML = '';  // Clear previous days

    const daysInMonth = new Date(year, month + 1, 0).getDate();  // Get total days in month
    const startDay = new Date(year, month, 1).getDay();  // Get first day of the month

    for (let i = 0; i < startDay; i++) {
        const emptyDay = document.createElement('div');
        emptyDay.className = 'day';
        calendarDays.appendChild(emptyDay);  // Add empty days before the start of the month
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'day';
        dayDiv.textContent = day;

        // Check if there's an event on this day
        const event = events.find(event => event.date === `${year}-${month + 1}-${day}`);
        if (event) {
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            eventDiv.textContent = event.name;
            dayDiv.appendChild(eventDiv);
        }

        calendarDays.appendChild(dayDiv);
    }
}

// Example events for the calendar
const events = [
    { date: '2024-8-1', name: 'First Day of School' },
    { date: '2024-8-15', name: 'Independence Day' },
    { date: '2024-8-25', name: 'Midterm Exams' },
    { date: '2024-9-5', name: 'Teachers Day' },
    { date: '2024-10-2', name: 'Gandhi Jayanti' }
];

// Initialize the calendar with the current month and year
const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

document.getElementById('calendar-month').textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${currentYear}`;
generateCalendarDays(currentMonth, currentYear);
