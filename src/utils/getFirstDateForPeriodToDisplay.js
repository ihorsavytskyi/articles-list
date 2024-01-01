export const getFirstDateForPeriodToDisplay = (currentDate, limitOfDaysToDisplay) => {
  let year = currentDate.getFullYear();    
  let month =  currentDate.getMonth();    
  let dayOfMonth =  currentDate.getDate();
  
  if(currentDate < limitOfDaysToDisplay ) {
    let restOfDaysToSubtract = limitOfDaysToDisplay - currentDate;       
    let lastDateOfPrevMonth = new Date(year, month, 0).getDate();      
    
    dayOfMonth = lastDateOfPrevMonth - restOfDaysToSubtract + 1;      
    
    if(month === 0) {
      month = 11;
      year = year - 1;
    } else {
      month = month - 1;
    }

    return new Date(year, month, dayOfMonth);
  }    

  dayOfMonth = dayOfMonth - limitOfDaysToDisplay + 1;    

  return new Date(year, month, dayOfMonth);
}