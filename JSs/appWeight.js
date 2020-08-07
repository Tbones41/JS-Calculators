const monthBtn = document.querySelector('#months-btn');
const yearBtn = document.querySelector('#years-btn');
const mnthinp = document.querySelector('#age-months');
const yrinp = document.querySelector('#age-years');
const inpgrp = document.querySelector('.input-group');
const form = document.querySelector('#weight-form');
const weightInputMonths = document.querySelector('#age-months');
const weightInputYears = document.querySelector('#age-years');

loadEventListeners();

function loadEventListeners() {
    
    yearBtn.addEventListener('click', showYearInput);
    monthBtn.addEventListener('click', showMonthInput);
    form.addEventListener('submit', calc);
    // taskList.addEventListener('click', removeTask);
    // clearBtn.addEventListener('click', clearTasks);
    // filter.addEventListener('keyup', filterTasks)
}

function showYearInput(e) {
    
    yrinp.style.display = 'block';
    document.querySelector('.years').style.display = 'flex';
    mnthinp.style.display = 'none';
    document.querySelector('.months').style.display = 'none';

    weightInputYears.value = '';
    document.querySelector('#wByA').value = 0;

    e.preventDefault();
}

function showMonthInput(e) {
    mnthinp.style.display = 'block';
    document.querySelector('.months').style.display = 'block';
    yrinp.style.display = 'none';
    document.querySelector('.years').style.display = 'none';

    weightInputMonths.value = '';
    document.querySelector('#wByA').value = 0;

    e.preventDefault();
}

function calc(e) {
    const inpSelec = e.target.

    e.preventDefault();
}

function calcYr() {
    let ans;
    let years = weightInputYears.value;

    switch(true){
        case (years < 1.1):
            let months = years * 12;
            ans = (months + 9) / 2;
            break;
        case (years > 0.9 && 5.1 > years):
            ans = (2 * years) + 8;
            break;
        case (years > 5 && years < 10.1  ):
            ans = ((7 * years) - 5) / 2;
            break;
        case (years > 10):
            alert('Child older than 10 years. Calculated age may not be accurate');
            ans = ((7 * years) - 5) / 2;
            break;
    }

    document.querySelector('#results').style.display = 'block';
    document.querySelector('#wByA').value = ans;
}

function calcMnth() {
    
    let ans;
    let year;

    switch(true){
        case (weightInputMonths.value <= 12):
            ans = (weightInputMonths.value + 9) / 2;
            break;
        case (weightInputMonths.value > 12 && 61 > weightInputMonths.value):
            year = Math.floor(weightInputMonths.value / 12);
            ans = (2 * year) + 8;
            break;
        case (weightInputMonths.value > 60 && weightInputMonths.value < 121  ):
            year = Math.floor(weightInputMonths.value / 12);
            ans = ((7 * year) - 5) / 2;
            break;
    }

    document.querySelector('#results').style.display = 'block';
    document.querySelector('#wByA').value = ans;
}
