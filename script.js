var entry = document.getElementById("entry");
entry.addEventListener("click", AddRow);

var list1 = [];
var list2 = [];
var list3 = [];
var list4 = [];
var list5 = [];


var n = 1;
var x = 0;

function AddRow(){

	var AddingRow = document.getElementById('show');
	var NewRow = AddingRow.insertRow(n);

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mob = document.getElementById("mob").value;
    var date = document.getElementById("date").value;
    var address = document.getElementById("address").value;

    if( !name || !email || !mob || !date || !address ){
        alert("Please enter all the information");
        return;
    }

	list1[x] = document.getElementById("name").value;
	list2[x] = document.getElementById("email").value;
	list3[x] = document.getElementById("mob").value;
    list4[x] = document.getElementById("date").value;
    list5[x] = document.getElementById("address").value;

	var cel1 = NewRow.insertCell(0);
	var cel2 = NewRow.insertCell(1);
	var cel3 = NewRow.insertCell(2);
	var cel4 = NewRow.insertCell(3);
    var cel5 = NewRow.insertCell(4);

	cel1.innerHTML = list1[x];
	cel2.innerHTML = list2[x];
	cel3.innerHTML = list3[x];
	cel4.innerHTML = list4[x];
    cel5.innerHTML = list5[x];

	n++;
	x++;

	document.getElementById("form").reset();
}