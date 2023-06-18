const currentDateElement = document.getElementById('currentDate');

// Get the current date
const currentDate = new Date();

// Format the date as desired
const formattedDate = currentDate.toLocaleDateString('en-US', {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric'
});

// Set the formatted date as the content of the element
currentDateElement.textContent = formattedDate;
