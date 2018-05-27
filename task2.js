
var users = [{
	name: "Вася",
	surname: 'Иванов',
	age: 20
}, {
	name: "Петя",
	surname: 'Чапаев',
	age: 25
}, {
	name: "Маша",
	surname: 'Медведева',
	age: 18
}];


function byField(field) {
  return function(a, b) {
    return a[field] > b[field] ? 1 : -1;
    }
}

users.sort(byField('name')); 
users.sort(byField('age')); 
