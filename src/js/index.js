function updateDateTime() {
    var today = new Date();
  
    var options = { month: 'long', day: 'numeric', year: 'numeric' };
    var date = today.toLocaleDateString('en-US', options).replace(/(\d)(st|nd|rd|th)/, '$1<sup>$2</sup>');
  
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var amOrPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12; 
    minutes = minutes < 10 ? '0'+minutes : minutes;
    
    var time = hours + ':' + minutes + ' ' + amOrPm;
  
    var dateTime = date+' | '+time;
  
    document.getElementById("datetime").innerHTML = dateTime;
  }
  
  updateDateTime();
  
  setInterval(updateDateTime, 1000); 