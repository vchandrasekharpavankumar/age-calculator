const months =[31,28,31,30,31,30,31,31,30,31,30,31];
  
function ageCalculate(){
    let today = new Date();        // it will give today date
    let inputDate = new Date(document.getElementById("date-input").value); 
    let birthMonth,birthDate,birthYear
    let birthDetails  = {                // wrapping all details in one class
        date:inputDate.getDate(),
        month:inputDate.getMonth(),
        year:inputDate.getFullYear()
    }

    let currentYear = today.getFullYear();             
    let currentMonth =today.getMonth()+1; // genearally it will count jan as 0 so adding 1
    let currentDate = today.getDate();

    leapChecker(currentYear);

    if(
        birthDetails.year > currentYear ||
        ( birthDetails.month > currentMonth && birthDetails.year == currentYear) || 
        (birthDetails.date > currentDate && birthDetails.month == currentMonth && birthDetails.year == currentYear)
    ){
        alert("Not Born Yet");
        displayResult("-","-","-");
        return;
    }

               // opearation year
    birthYear = currentYear - birthDetails.year;           // opearations begin
           
           // operation month
    if(currentMonth >= birthDetails.month){
        birthMonth = currentMonth - birthDetails.month;
    }
    else{
        birthYear--;
        birthMonth = 12 + currentMonth - birthDetails.month;
    }

                 // operation date
    if(currentDate >= birthDetails.date){
        birthDate = currentDate - birthDetails.date;
    }
    else{
        birthMonth--;
        let days = months[currentMonth - 2];
        birthDate = days + currentDate - birthDetails.date;
        if(birthMonth < 0){
            birthMonth = 11;
            birthYear--;
        }
    }
    displayResult(birthDate,birthMonth,birthYear);

}



function displayResult(bDate,bMonth,bYear){                      
    document.getElementById("years").textContent = bYear;
    document.getElementById("months").textContent = bMonth;
    document.getElementById("days").textContent = bDate;
}

function leapChecker(year){                                                   // checking leap year
    if(year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)){
        months[1] = 29;
    }
    else{
        months[1] = 28;
    }
}