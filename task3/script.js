let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};


function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Обязательная статья расходов в этом месяце?", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null &&
            (typeof(b)) != null && a != '' && b !='' && a.length < 50) { 
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
        
    }
}
chooseExpenses();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let a = prompt("Не обязательная статья расходов в этом месяце?", ''),
            b = prompt("Во сколько обойдется?", '');
    
        if ( (typeof(a))=== 'string' && (typeof(a)) != null &&
            (typeof(b)) != null && a != '' && b !='' && a.length < 50) { 
            console.log("done");
            appData.optionalExpenses[a] = b;
        } else {
            i = i - 1;
        }
        
    }
}


function detectDayBudget() {
    appData.dayBudget = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет: " + appData.dayBudget);
}
detectDayBudget();


function detectLevel() {
    if(appData.dayBudget < 100) {
        console.log("Минимальный уровень достатка");
        alert("Минимальный уровень достатка");
    } else if (appData.dayBudget > 100 && appData.dayBudget < 2000) {
        console.log("Средний уровень достатка");
        alert("Средний уровень достатка");
    } else if (appData.dayBudget >= 2000) {
        console.log("Высокий уровень достатка");
        alert("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
        alert("Произошла ошибка");
    }
}
detectLevel();


function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процен?");

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}
checkSavings();

