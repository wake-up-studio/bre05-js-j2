let student = {
	name : "Steven",
	age : 19,
	grades : [12, 14, 8],
	average : 0
};

student.average = (student.grades[0]+student.grades[1]+student.grades[2])/student.grades.length

console.log(student.average)