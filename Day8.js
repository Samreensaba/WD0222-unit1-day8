/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/*let variable1 = [1, 2, 3, 4, 5]
console.log("\n***Exercise 1***\n")
console.log(variable1)*/

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

let variable2 = {
    name: "Samreen",
    surname: "Saba",
    emailAddress: "samren_saba@yahoo.com",
    age: 30
}
console.log("\n***Excersice 2***\n")
console.log(variable2)

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

variable2.hasDrivingLicense = true
console.log("***\nExcersice 3\n***")
console.log(variable2)

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

delete variable2.age
console.log("\n***Excersice 4***\n")
console.log(variable2)
/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

let variable3 = {
    name: "John",
    surname: "Louise",
    emailAddress: "abcd@yahoo.com"
}
console.log("\n***Excersice 5***\n")
if (variable2.emailAddress === variable3.emailAddress){
    console.log("Email address's of Samreen and John are same")
}
else {
    console.log("Email address is not same")
}

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 65
console.log("\n***Excersice 6***\n")
if (totalShoppingCart > 50){
    console.log("The total bill is:", totalShoppingCart);
}
else{
    console.log("The total bill amount is:", totalShoppingCart + 10);
}

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

let car ={
    brand: "BMW",
    model: "BMW 5 series",
    licencePlate: "SA 335C0"
}
console.log("\n***Excersice 8***\n")
let car2 = Object.assign({}, car);
car2.licencePlate = "AZM9590"
console.log("\nCar2", car2)
let car3 = Object.assign({}, car);
car3.licencePlate = "CCX4344"
console.log("\nCar3", car3)
let car4 = Object.assign({}, car);
car4.licencePlate = "GWA 88B"
console.log("\nCar4:", car4)
let car5 = Object.assign({}, car);
car5.licencePlate = "AZM 9854"
console.log("\nCar5:", car5)
let car6 = Object.assign({}, car);
car6.licencePlate = "6TR J244"
console.log("\nCar6:", car6)
console.log("\n",car)
/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

let carsForRent = [
    {brand: 'BMW', model: 'BMW 5 series', licencePlate: 'SA 335C0'},
    {brand: 'BMW', model: 'BMW 5 series', licencePlate: 'AZM9590'},
    {brand: 'BMW', model: 'BMW 5 series', licencePlate: 'CCX4344'},
    {brand: 'BMW', model: 'BMW 5 series', licencePlate: 'GWA 88B'},
    {brand: 'BMW', model: 'BMW 5 series', licencePlate: 'AZM 9854'},
    {brand: 'BMW', model: 'BMW 5 series', licencePlate: '6TR J244'} 
]
console.log("\n***Excersice 9***\n")
console.log(carsForRent)

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

console.log("\n***Excersice 10***\n")
carsForRent.shift();
console.log("Removing the first element\n",carsForRent)
carsForRent.pop()
console.log("Removing the last element\n", carsForRent)

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

console.log("\nThe data type of variable car is:", typeof car)
console.log("\nThe data type of property licansePlate is:", typeof car.licencePlate)
console.log("\nThe data type of property brand is:", typeof car.brand)

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

let carsForSale = []
carsForSale = [
    {brand: 'Audi', model: 'Audi5', licencePlate: 'ABC 1234'},
    {brand: 'Mercedes', model: 'E Class', licencePlate: 'BBCC 0304'},
    {brand: 'Audi', model: 'Audi TT', licencePlate: 'DN20 DE12'}
]
console.log("\n***Excercise 12***\n")
console.log("\n List of Cars for Sales:\n", carsForSale)
let totalCars = (carsForRent.length + carsForSale.length)
console.log("\nThe total number of cars is:", totalCars)


/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */

/* WHEN YOU ARE FINISHED
 Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/
