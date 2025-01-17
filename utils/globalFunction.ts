export const getMonthNumber = (monthYear: string): number => {    
    const [month, year] = monthYear.split(" "); // Split into month and year
    const date = new Date(`${month} 1, ${year}`); // Parse into a date object
    return date.getMonth() + 1; // Months are 0-indexed, so add 1
  };

 export const getYear = (monthYear: string): number => {
    const [, year] = monthYear.split(" "); // Split the string and get the second part
    return parseInt(year, 10); // Convert year to a number
  };
  