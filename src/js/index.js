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
  // Get current date
  const now = new Date();
  
  // Get number of days in current month
  const daysInMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  
  // Get day of the week the first day falls on (0 = Sunday, 1 = Monday, etc.)
  const firstDayOfWeek = new Date(now.getFullYear(), now.getMonth(), 1).getDay();
  
  // Get table element with class "table-calendar"
  const table = document.querySelector('.table-calendar');
  
  // Clear table
  table.innerHTML = '';
  
  // Create table header row
  const headerRow = document.createElement('tr');
  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 0; i < 7; i++) {
    const th = document.createElement('th');
    th.textContent = daysOfWeek[i];
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  
  // Create table rows for each week
  let dayOfMonth = 1;
  for (let i = 0; i < 6; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < 7; j++) {
      const td = document.createElement('td');
      if (i === 0 && j < firstDayOfWeek) {
        // Empty cell before first day of month
      } else if (dayOfMonth <= daysInMonth) {
        td.textContent = dayOfMonth;
        dayOfMonth++;
      }
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
}


generateCalendar();

updateDateTime();

setInterval(updateDateTime, 1000);











// function updateDateTime() {
//     var today = new Date();
  
//     var options = { month: 'long', day: 'numeric', year: 'numeric' };
//     var optionscal = { month: 'long', year: 'numeric' };

//     var date = today.toLocaleDateString('en-US', options).replace(/(\d)(st|nd|rd|th)/, '$1<sup>$2</sup>');
//     var datecal = today.toLocaleDateString('en-US', optionscal).replace(/(\d)(st|nd|rd|th)/, '$1<sup>$2</sup>');
  


//     var hours = today.getHours();
//     var minutes = today.getMinutes();
//     var amOrPm = hours >= 12 ? 'PM' : 'AM';

//     hours = hours % 12;
//     hours = hours ? hours : 12; 
//     minutes = minutes < 10 ? '0'+minutes : minutes;
    
//     var time = hours + ':' + minutes + ' ' + amOrPm;
  
//     var dateTime = date+' | '+time;

//     var dateTimeCal = datecal
  
//     document.getElementById("datetime").innerHTML = dateTime;

//     document.getElementById("datetime-cal").innerHTML = dateTimeCal;

//   }
  
//   updateDateTime();
  
//   setInterval(updateDateTime, 1000); 