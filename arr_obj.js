// task 1

let numbers = [10, -5, 20, -15, 30, 5, -10, 40, -25, 50];

let sumPositive = 0;
let sumAll = 0;

for (let i = 0; i < numbers.length; i++) {
  let num = numbers[i];
  sumAll += num;
  if (num < 0) continue;
  sumPositive += num;
}
console.log("Sum of positive numbers:", sumPositive);
console.log("Sum of all numbers:", sumAll);

numbers.push(60);        
numbers.shift();       
console.log("Modified array:", numbers);

// task 2

let student = {
  name: "Arla",
  age: 20,
  grade: "B",
  isGraduated: false
};
console.log("Name:", student.name);
console.log("Age:", student.age);

student.grade = "A";
console.log("Properties:", Object.keys(student));
console.log("Values:", Object.values(student));

student.email = "arla@example.com";
delete student.isGraduated;
console.log("Updated student object:", student);

// task 3

let students = [
  { name: "aya", age: 19, grade: "B", isGraduated: false },
  { name: "omar", age: 21, grade: "C", isGraduated: true },
  { name: "arla", age: 22, grade: "A", isGraduated: false },
  { name: "ahmed", age: 20, grade: "B", isGraduated: true }
];
let totalAge = 0;
let graduated = 0;
let notGraduated = 0;

for (let i = 0; i < students.length; i++) {
  totalAge += students[i].age;
  if (students[i].isGraduated) {
    graduated++;
  } else {
    notGraduated++;
  }
}

let averageAge = totalAge / students.length;

students.forEach((student, index) => {
  console.log(`Student ${index + 1} Keys:`, Object.keys(student));
  console.log(`Student ${index + 1} Values:`, Object.values(student));
});
let newStudent = {
  name: "salma",
  age: 23,
  grade: "A",
  isGraduated: false,
  email: "salma@example.com"
};
students.push(newStudent);

students.forEach(student => {
  delete student.isGraduated;
});

console.log("Student Names:");
students.forEach(s => console.log("- " + s.name));

console.log("Average Age:", averageAge);
console.log("Graduated Students:", graduated);
console.log("Non-Graduated Students:", notGraduated);
console.log("Updated Student List:", students);
