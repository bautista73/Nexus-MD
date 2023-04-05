function updateDateTime() {
    var today = new Date();
  
    // Format the date string
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    var date = today.toLocaleDateString('en-US', options).replace(/(\d)(st|nd|rd|th)/, '$1<sup>$2</sup>');
  
    // Format the time string
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var amOrPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var time = hours + ':' + minutes + ' ' + amOrPm;
  
    // Combine the date and time strings with the separator
    var dateTime = date+' | '+time;
  
    // Update the HTML element
    document.getElementById("datetime").innerHTML = dateTime;
  }
  
  // Call updateDateTime() once to initially set the datetime element
  updateDateTime();
  
  // Call updateDateTime() every second to keep the datetime element updated
  setInterval(updateDateTime, 1000);