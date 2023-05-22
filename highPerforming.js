/*You are given an array of objects representing a group of students, each with a name and an array of test scores. Your task is to use map, 
filter, and reduce to calculate the average test score for each student, and then return an array of objects containing only the students 
who have an average score above 90.*/

function highPerforming(students){
	let studentAvg = students.map(function(student){
		let sum = student.scores.reduce(function(acc, score){
			return acc + score;
		});
		return {name: student.name, average: sum / 3};
	});
	return studentAvg.filter(student => student.average > 90);
}

let students = [
	{ name: "Alice", scores: [90, 85, 92] },
	{ name: "Bob", scores: [75, 80, 85] },
	{ name: "Charlie", scores: [90, 95, 85] },
	{ name: "David", scores: [100, 100, 100] }
]; 
// [{ name: 'Jack', average: 100 }] 
