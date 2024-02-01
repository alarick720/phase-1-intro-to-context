// Your code here
function createEmployeeRecords(arrayOfArrays) {
    return arrayOfArrays.map(employeeArray => {
      return {
        firstName: employeeArray[0],
        lastName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
      };
    });
  }
  function createTimeInEvent(employeeRecord, dateTimeStr) {
    const [date, hour] = dateTimeStr.split(' ');
  
    const timeInEvent = {
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date: date
    };
  
    employeeRecord.timeInEvents.push(timeInEvent);
    return employeeRecord;
  }
  function createTimeOutEvent(employeeRecord, dateTimeStr) {
    const [date, hour] = dateTimeStr.split(' ');
  
    const timeOutEvent = {
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date: date
    };
}
function hoursWorkedOnDate(employeeRecord, date) {
    const timeInEvent = employeeRecord.timeInEvents.find(e => e.date === date);
    const timeOutEvent = employeeRecord.timeOutEvents.find(e => e.date === date);
  
    return (timeOutEvent.hour - timeInEvent.hour) / 100;
  }
  function wagesEarnedOnDate(employeeRecord, date) {
    const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hoursWorked * employeeRecord.payPerHour;
  }
  function allWagesFor(employeeRecord) {
    const totalWages = employeeRecord.timeInEvents.reduce((total, timeInEvent) => {
      return total + wagesEarnedOnDate(employeeRecord, timeInEvent.date);
    }, 0);
  
    return totalWages;
  }
  function createEmployeeRecords(csvData) {
    return csvData.map(row => {
      return {
        firstName: row[0],
        familyName: row[1],
        title: row[2],
        payPerHour: row[3],
        timeInEvents: [],
        timeOutEvents: []
      };
    });
  }
  function createTimeInEvent(employeeRecord, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');

    employeeRecord.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date: date
    });

    return employeeRecord;
}

function createTimeOutEvent(employeeRecord, dateTimeString) {
    const [date, hour] = dateTimeString.split(' ');

    employeeRecord.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date: date
    });

    return employeeRecord;
}
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    };
}
let employeeArray = ["Gray", "Worm", "Commander", 25];
let employeeRecord = createEmployeeRecord(employeeArray);

console.log(employeeRecord);
function calculatePayroll(employeeRecords) {
    return employeeRecords.reduce((total, record) => {
        return total + allWagesFor(record);
    }, 0);
}

function allWagesFor(employeeRecord) {
    let eligibleDates = employeeRecord.timeInEvents.map(e => e.date);
    let payable = eligibleDates.reduce((memo, d) => {
        return memo + wagesEarnedOnDate(employeeRecord, d);
    }, 0);
    return payable;
}

function wagesEarnedOnDate(employeeRecord, date) {
    let hoursWorked = hoursWorkedOnDate(employeeRecord, date);
    return hoursWorked * employeeRecord.payPerHour;
}

// Example usage of hoursWorkedOnDate (implementation details depend on your data structure)
function hoursWorkedOnDate(employeeRecord, date) {
    let inEvent = employeeRecord.timeInEvents.find(e => e.date === date);
    let outEvent = employeeRecord.timeOutEvents.find(e => e.date === date);
    return (outEvent.hour - inEvent.hour) / 100;
}