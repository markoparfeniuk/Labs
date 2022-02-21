// Написати функцію, яка поверне кількість днів для заданого місяця та року

monthDayDict = { "January": 31,
                 "February": 28, 
                 "March": 31,
                 "April": 30,
                 "May": 31,
                 "June": 30, 
                 "July": 31,
                 "August": 31,
                 "September": 30, 
                 "October": 31,
                 "November": 30,
                 "December": 31 };

function isLeapYear(year) {
    return year % 400 == 0 || year % 100 != 0 && year % 4 == 0;
}

function getDaysInMonth(month, year) {
    if (month == "February" && isLeapYear(year))
        return 29;

    return monthDayDict[month];
}

console.log(getDaysInMonth("February", 2012))
console.log(getDaysInMonth("February", 2019))
console.log(getDaysInMonth("January", 2022))

