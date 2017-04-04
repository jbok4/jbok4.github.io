var data = [
{  month: 'Jan',  profits: 100000,  inventory: 4000  },
{  month: 'Feb',  profits: 120000,  inventory: 4500  },
{  month: 'Mar',  profits: 150000,  inventory: 4700  },
{  month: 'Apr',  profits: 90000,  inventory: 3200   },
{  month: 'May',  profits: 75000,  inventory: 3000   },
{  month: 'Jun',  profits: 87000,  inventory: 2000   },
{  month: 'Jul',  profits: 190000,  inventory: 500   }
];



for (var i = 0; i < data.length; i++) {
document.getElementById("month" + i).innerHTML= data[i].month;
document.getElementById("element" + i).innerHTML= data[i].profits;
document.getElementById("bar" + i).style.width = data[i].profits/200 + "px";
};
