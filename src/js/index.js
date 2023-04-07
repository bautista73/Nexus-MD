
const now = new Date();
  
const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
const daysInPrevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
const daysInNextMonth = new Date(now.getFullYear(), now.getMonth() + 2, 0).getDate();

const firstDayOfWeek = new Date(now.getFullYear(), now.getMonth(), 1).getDay();

const table = document.querySelector('.table-calendar');




function updateDateTime() {
  var today = new Date();

  var options = { month: 'long', day: 'numeric', year: 'numeric' };
  var optionscal = { month: 'long', year: 'numeric' };

  var date = today.toLocaleDateString('en-US', options).replace(/(\d)(st|nd|rd|th)/, '$1<sup>$2</sup>');
  var datecal = today.toLocaleDateString('en-US', optionscal).replace(/(\d)(st|nd|rd|th)/, '$1<sup>$2</sup>');

  var hours = today.getHours();
  var minutes = today.getMinutes();
  var amOrPm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; 
  minutes = minutes < 10 ? '0'+minutes : minutes;

  var time = hours + ':' + minutes + ' ' + amOrPm;

  var dateTime = date+' | '+time;

  var dateTimeCal = datecal;

  document.getElementById("datetime").innerHTML = dateTime;

  document.getElementById("datetime-cal").innerHTML = dateTimeCal;
}


function generateCalendar() {

  
  table.innerHTML = '';
  
  const headerRow = document.createElement('tr');
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 0; i < 7; i++) {
    const th = document.createElement('th');
    th.textContent = daysOfWeek[i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  
let dayOfMonth = 1;
let nextMonthDay = 1;

for (let i = 0; i < 6; i++) {
  const tr = document.createElement('tr');

  for (let j = 0; j < 7; j++) {

    const td = document.createElement('td');

    if (i === 0 && j < firstDayOfWeek) {
      td.textContent = daysInPrevMonth - (firstDayOfWeek - j - 1);
    } else if (dayOfMonth <= daysInMonth) {
      td.textContent = dayOfMonth;
      dayOfMonth++;
    } else {
      td.textContent = nextMonthDay;
      nextMonthDay++;
    }

    tr.appendChild(td);
  }
  table.appendChild(tr);
}
}


function nextMonth() {
  const now = new Date();
  now.setMonth(now.getMonth() + 1);

  generateCalendar();

  console.log('next')

}

function prevMonth() {
  const now = new Date();
  now.setMonth(now.getMonth() - 1);

  generateCalendar();

  console.log('prev')

}





document.getElementById("nextMonthButton").addEventListener("click", nextMonth);
document.getElementById("prevMonthButton").addEventListener("click", prevMonth);





generateCalendar();

updateDateTime();

setInterval(updateDateTime, 1000);










