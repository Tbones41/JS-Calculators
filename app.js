const names = 'Femi';
const car = 'Toyota';
const age = 28;
const rand = Math.ceil(Math.random() * 20);
new_arr = new Array(31, 731, 410, 74, 609, 73, 91);
val = new_arr.sort(function(a,b){return b-a})

html = `
    <ul>
        <li>Name: ${names}</li>
        <li>Car: ${car}</li>
        <li>Age: ${age}</li>
        <li>Rand: ${rand}</li>
        <li>Array: ${val}</li>
    </ul>
`;

if (condition) {
    
}

document.body.innerHTML = html;
