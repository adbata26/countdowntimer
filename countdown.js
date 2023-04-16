    let countDownDate = new Date("Jan 1, 2024 00::00").getTime();
    
    let counter = setInterval(() => {

    // Get today's date and time
    let now = new Date().getTime();
  

    let distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      document.getElementById('days').innerHTML = days;
      document.getElementById('hrs').innerHTML = hours;     
      document.getElementById('min').innerHTML = minutes; 
      document.getElementById('sec').innerHTML = seconds; 

    if (distance < 0) {
      clearInterval(counter);
      document.getElementById("darkcolor").innerHTML = "HAPPY NEW YEAR!";
    }
  }, 1000);