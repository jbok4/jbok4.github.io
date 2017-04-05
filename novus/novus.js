var data = [
{  month: "Jan",  profits: 100000,  inventory: 4000  },
{  month: "Feb",  profits: 120000,  inventory: 4500  },
{  month: "Mar",  profits: 150000,  inventory: 4700  },
{  month: "Apr",  profits: 90000,  inventory: 3200   },
{  month: "May",  profits: 75000,  inventory: 3000   },
{  month: "Jun",  profits: 87000,  inventory: 2000   },
{  month: "Jul",  profits: 190000,  inventory: 500   }
];

var categories = ["Profits", "Inventory"]


function writeData() {
  for (var i = 0; i<data.length; i++) {
  document.getElementById("month" + i).innerHTML= data[i].month;
  document.getElementById("element" + i).innerHTML= data[i].profits;
  document.getElementById("bar" + i).style.width = data[i].profits/1500 + "%";
  };
};

document.getElementById("cat").innerHTML = "<strong>" + categories[0] + "</strong>";
writeData(); 


function categorySelect() {
var dropdownItem = document.getElementById("sel").value;
if (dropdownItem == "1")
{
document.getElementById("cat").innerHTML = "<strong>" + categories[0] + "</strong>";
for (var i = 0; i<data.length; i++) {
  document.getElementById("element" + i).innerHTML= data[i].profits;
  document.getElementById("bar" + i).style.width = data[i].profits/1500 + "%";  
    }; 
} 

else if (dropdownItem == "2")  {
document.getElementById("cat").innerHTML = "<strong>" + categories[1] + "</strong>";
for (var i = 0; i<data.length; i++) {
  document.getElementById("element" + i).innerHTML= data[i].inventory;
  document.getElementById("bar" + i).style.width = data[i].inventory/50 + "%";
    };
} 

} // end function categorySelect