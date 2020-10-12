'use strict';

const employeeList = document.querySelector('ul');
const employees = [...document.querySelectorAll('li')];

function sortList(list) {
  // eslint-disable-next-line max-len
  list.sort((a, b) => makeClearSalaryNumber(b.dataset.salary) - makeClearSalaryNumber(a.dataset.salary));
  employeeList.append(...list);
}

function makeClearSalaryNumber(num) {
  return num.split(',').join('').replace('$', '');
}

function getEmployees(list) {
  return list.map(employee => {
    return {
      name: employee.innerHTML.trim(),
      position: employee.dataset.position,
      salary: employee.dataset.salary,
      age: employee.dataset.age,
    }
  });
}

sortList(employees);
getEmployees(employees);
