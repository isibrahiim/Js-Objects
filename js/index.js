let person = {

    name:   'Isse',
    age:    18,
    city:   'Kyiv',
    cars:    ['BMW','MARCEDES','VOLVO'],
    incrementAge: function() {
        this.age += 1;
    },
    addCar: function(car){
        if(!this.cars.includes(car)){
            this.cars.push(car);

        }
    }


};
// person.name = 'ibrahim';    // updating the name;
// console.log(person.name);   // printing the name;

// person['name'] = 'Salad';       // updating the name;
// console.log(person['name']);    // printing the name;

// person.salary = 50*8;       //adding another value;
// console.log(person.salary);  // printing the salary;

for(let i = 0; i < person.cars.length; i ++){
    console.log(person.cars[i]);
}
console.log(person.cars);

let str = ' Hello World';
str.length;

console.log(person.age);
person.incrementAge();
console.log(person.age);

person.addCar('Lambo');
person.addCar('Ford');
console.log(person.cars);