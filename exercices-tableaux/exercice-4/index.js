// let grades = [[20, 10], [15, 20], [13, 18]];

// let average = [0,0,0];

// for(let i=0; i<grades.length; i++){
//     average[i] = (grades[i][0] + grades[i][1]) / 2
//     console.log(average)
// }

// average = (average[0]+average[1]+average[2]) / average.length

// console.log(average)

let grades = [[20, 10], [15, 20], [13, 18]];

let average = 0;

for(let i=0; i<grades.length; i++){
    average = average + ((grades[i][0] + grades[i][1]) / 2)
    console.log(average)
}

average = average / 3 

console.log(average)