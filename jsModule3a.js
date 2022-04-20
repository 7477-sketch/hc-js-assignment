const arr = [
{id: 1, 'name': 'Amit Kumar', 'age': 25},
{id: 2, name: 'Rahul Dixit', 'age': 20},
{id: 3, name: 'Ravi Joshi', 'age': 55},
{id: 4, name: 'Rohit Verma', 'age': 35},
{id: 5, name: 'Ajay Jain', 'age': 17}];

const max = arr.reduce((prev, current)=>(prev.age > current.age) ? prev : current);
const min = arr.reduce((prev, current)=>(prev.age < current.age) ? prev : current);



console.log("Oldest person name and id is "+ max.id +"  "+ max.name);
console.log("Youngest person name and id is "+ min.id +"  "+ min.name);




    