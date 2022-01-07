const months = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
];

const days = [
    "Monday", "Tuesday", "Wednesday", "Thurseday", "Friday", "Saturday", "Sunday"
]


window.onload = function(){
    const giveaway = document.querySelector(".giveaway");
    const dedline = document.querySelector(".deadline");
    const items = document.querySelectorAll(".deadline-format h4");
    
    let tempDate = new Date();
    let tempYear = tempDate.getFullYear();
    let tempMonth = tempDate.getMonth();
    let tempDay = tempDate.getDate();
    
    //this will always get the current date and add 10 days to the deadline
    var deadlineDate = new Date(tempYear, tempMonth, tempDay + 10, 7, 0, 0);
   // var deadlineDate = new Date(2022, 0, 7, 7, 0, 0);

   
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

    //-----------Impletementing the countdown timer------------------
    //1s = 1000ms
    //1m = 60s
    //1hr = 60min
    //1d = 24hrs

    const futureTime = deadlineDate.getTime();
   
    function getRemainingTime(){
        const todayTime = new Date().getTime();
        const timeDifference = futureTime - todayTime;
        
        //getting number of ms in a day, an hour and a minute
        const OneDay = 24 * 60 * 60 * 1000; 
        const OneHour = 60 * 60 * 1000;
        const oneMinute = 60 * 1000;

        //calculating days, hours, minutes and seconds remaining
        const dayRemaining = Math.floor(timeDifference/OneDay);
       //this gets the number of hours reamining after checking the remainder of days
        const hoursRemaining = Math.floor((timeDifference % OneDay)/OneHour);
        const minutesRemaining = Math.floor((timeDifference % OneHour) / oneMinute);
        const secondsRemaining  = Math.floor((timeDifference % oneMinute) / 1000);
    
        const values = [dayRemaining, hoursRemaining, minutesRemaining, secondsRemaining];
        items.forEach(function(item, index){
            item.innerHTML = format(values[index]);            
        });

        //This checks if the giveaway time has nnot ended
        if(timeDifference < 0){
            clearInterval(countdown);

            dedline.innerHTML = `<h1 class="expired">The giveaway has ended</h1>`
        }
    }

   //set countdown interval
   let countdown = setInterval(getRemainingTime, 1000); 

   getRemainingTime();


   function format(value){
       if(value < 10){
           return `0${value}`;
       }
       return value
   }
  
};
