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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.dayBudget = (appData.budget / 30).toFixed();
        alert("Ежедневный бюджет: " + appData.dayBudget);
    },
    detectLevel: function() {
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
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процен?");
    
            appData.monthIncome = save/100/12*percent;
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (let i = 1; i < 3; i++) {
            let opt = prompt("Необязательная статья расходов в этом месяце?", '');
            appData.optionalExpenses[i] = opt;
        }    
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход,(Перечислите через запятую)", '');
        if (typeof(items) != 'string' || items == "" || typeof(items) == null ) {
            alert("Введено неправильное значение");
        } else {
            appData.income = items.split(', ');
            appData.income.push(prompt('Что-то еще?'));
            appData.income.sort();
       } 
    },
    
};

appData.income.forEach((item, i) => {
    alert( 'Способы доп. зароботка: ' + (i=1) + '-' + item);
  });

