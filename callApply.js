const normalPerson = {
    firstName : 'Rahim',
    lastName : 'Uddin',
    salary : 15000,
    getFullName :function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill:function(amount){
        console.log(this);
       this.salary =  this.salary-amount;
        return this.salary;
    }
}
// // console.log(normalPerson.firstName);
// // normalPerson.chargeBill(150);
// // console.log(normalPerson.salary);
const heroPerson ={
    firstName: 'Hero',
    lastName : "Balam",
    salary : 2500
}
const heroPerson1 ={
    firstName: 'Hero',
    lastName : "Salam",
    salary : 2500
}
const heroPerson2 ={
    firstName: 'Hero',
    lastName : "Kalam",
    salary : 2500
}

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(200);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary);
// const heroPerson1ChargeBill = normalPerson.chargeBill.bind(heroPerson1);
// heroPerson1ChargeBill(1500);
// console.log(heroPerson1.salary);

// normalPerson.chargeBill.call(heroPerson, 900);
// console.log(heroPerson.salary);
normalPerson.chargeBill.apply(heroPerson,[300]);
console.log(heroPerson.salary);