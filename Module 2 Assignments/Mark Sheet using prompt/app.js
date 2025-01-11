var EnglishMarks = +prompt("Enter English Marks");
var UrduMarks = +prompt("Enter Urdu Marks");
var MathsMarks = +prompt("Enter Maths Marks");
var PhysicsMarks = +prompt("Enter Physics Marks");
var IslamiyatMarks = +prompt("Enter Islamiyat Marks");

console.log("English : ",EnglishMarks) 
console.log("Urdu : ",UrduMarks) 
console.log("Maths : ",MathsMarks) 
console.log("Physics : ",PhysicsMarks) 
console.log("Islamiyat : ",IslamiyatMarks) 

var total = EnglishMarks + UrduMarks + MathsMarks +  PhysicsMarks + IslamiyatMarks;
console.log("Obtained marks " + total + " out of 500")

var percentage = (total / 500) * 100;
console.log("Percentage : ", percentage + "%")  

var Grade = "";
var Remarks = "";
if(percentage >=90 && percentage <= 100){
    Grade = "A+";
    Remarks = "Marvellous";
} else if(percentage >=80 && percentage < 90){
    Grade = "A";
    Remarks = "Very Good";
} else if(percentage >=70 && percentage < 80){
    Grade = "B";
    Remarks = "Good";
} else if(percentage >=60 && percentage < 70){
    Grade = "C";
    Remarks = "Better";
} else if(percentage >=0 && percentage < 60){
    Grade = "FAILED";
    Remarks = "Poor";
} else {
    Grade = "Invalid Percentage";
}

console.log("Grade : ",Grade) 
console.log("Remarks : ",Remarks) 