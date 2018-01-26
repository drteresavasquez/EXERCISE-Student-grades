console.log("grades.js");

// Loop over an array of student grades (values from 50-100) and output how many of each grades there are.

// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A
// Start with array of random scores in your JavaScript

// var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
// Use console.log() to output the following criteria:

// How many of each grade?
// What is the lowest grade?
// What is the highest grade?

let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let scores2 = [80, 79, 100, 53, 9, 69, 72, 99, 80, 34, 50, 87];
// console.log(scores);
let F = [];
let D = [];
let C = [];
let B = [];
let A = [];

// console.log(sorted);

function giveGrades (grade){
	for (let i = 0; i < scores.length; i++){
		let currentGrade = grade[i];
		// console.log(currentGrade);
			if (currentGrade <= 60 ){
			F.push(currentGrade);
			}else if(currentGrade <= 70){
			D.push(currentGrade);
			}else if(currentGrade <= 80){
			C.push(currentGrade);
			}else if(currentGrade <= 90){
			B.push(currentGrade);
			}else {
			A.push(currentGrade);
			}

	}
};

giveGrades(scores2);

gradeF = F.length;
gradeD = D.length;
gradeC = C.length;
gradeB = B.length;
gradeA = A.length;

let topScore = Math.max(...scores2);
let bottomScore = Math.min(...scores2);

console.log(`There are ${gradeF} F's in the list`);
console.log(`There are ${gradeD} D's in the list`);
console.log(`There are ${gradeC} C's in the list`);
console.log(`There are ${gradeB} B's in the list`);
console.log(`There are ${gradeA} A's in the list`);
console.log(`${topScore} is the highest grade in the class.`);
console.log(`${bottomScore} is the lowest grade in the class.`);



// 	for (let i = 0; i < grade.length; i++){
// 		let currentGrade = grade[i];
// 		// console.log(currentGrade);
// 			if (currentGrade <= 60 ){
// 			F.push(currentGrade);
			
// 			}else if(currentGrade <= 70  && currentGrade >= 61){
// 			D.push(currentGrade);
			
// 		}else if(currentGrade <= 80  && currentGrade >= 71){
// 		C.push(currentGrade);
			
		
// 	}else if(currentGrade <= 90  && currentGrade >= 81){
// 		B.push(currentGrade);
			
// 	}else {
// 		A.push(currentGrade);
			
		
// 	}

// }};



