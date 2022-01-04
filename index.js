const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const days = [
    "Monday", "Tuesday", "Wednesday", "Thurseday", "Friday", "Saturday", "Sunday"
]







window.onload = function(){
    const giveaway = document.querySelector(".giveaway");

    var deadlineDate = new Date(2022, 1, 14, 19, 30, 0);

    console.log(deadlineDate);
    // const textdate = "Giveaway ends " + deadlineDate;

    // giveaway.innerHTML = textdate;
    const year = deadlineDate.getFullYear();
    const hours = deadlineDate.getHours();
    const minutes = deadlineDate.getMinutes();
    const month = deadlineDate.getMonth();
    const date = deadlineDate.getDate();
    const weekday = days[deadlineDate.getDay()];

    let monthInWord = months[month];
   
    giveaway.textContent = `Giveaway ends on ${weekday}, ${date} ${monthInWord} ${year} ${hours}:${minutes}am`;
    
};
