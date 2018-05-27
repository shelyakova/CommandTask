var users = [];

function resetForm() {
	document.getElementById('name').value		= '';
	document.getElementById('surname').value	= '';
	document.getElementById('age').value		= '';
}

function getValue(id) {
	return document.getElementById(id).value;
}

function addUserData() {
	users.push({
		name:		getValue('name'),
		surname:	getValue('surname'),
		age:		parseInt(getValue('age'))
	});
}
		
function sortUsers() {
	var property = getValue('sort');
	if (property !== '') {
		users = users.sort(function (a, b) {
			return (a[property] > b[property]) ? 1 : -1;
		});
	}
}

function printUsers() {
	var table = document.getElementById('result'),
		html = '<tr><th id="th_name">name</th><th id="th_surname">surname</th><th id="th_age">age</th></tr>';

	users.forEach(function (user, i) {
		html += '<tr><td>' + user.name + '</td><td>' + user.surname + '</td><td>' + user.age + '</td></tr>';
	});
	table.innerHTML = html;
}

function colorTh() {
	var ths = document.getElementsByTagName('th');
	for (var i = 0; i < ths.length; i++) {
		ths[i].style.color = 'black';
	}
	document.getElementById('th_' + getValue('sort')).style.color = 'red';
}

document.getElementById('start').onclick = function() {
	addUserData();
	resetForm();
	printUsers();
	colorTh();
}

document.getElementById('sort').onchange = function() {
	sortUsers();
	printUsers();
	colorTh();
}