function showLoginPopup() {
    alert("Login button clicked! Redirect to login page.");
  }
  

function continueFlight() {
    const departure = document.getElementById('departure');
    const arrival = document.getElementById('arrival');

    console.log(departure, arrival)
    if (departure.value !== '' && arrival.value !== '') {
        alert(`Your flight details:\nDeparture: ${departure.value}\nArrival: ${arrival.value}`);
    } else {
         alert("Please fill in both departure and arrival airports.");
    }
}