let students = [
	{
		name : "Steven",
		age : 18,
		average : 10
	},
	{
		name : "Jessica",
		age : 20,
		average : 13
	},
	{
		name : "Charlie",
		age : 17,
		average : 12
	},
];

for (let i=0; i<students.length; i++){
    console.log(`Je m'appelle ${students[i].name}, j'ai ${students[i].age} ans et ma moyenne est de ${students[i].average}`)
}