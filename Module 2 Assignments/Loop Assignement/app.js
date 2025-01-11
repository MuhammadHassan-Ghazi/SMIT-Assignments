//--1st way
/*var subjects= ['English','Urdu','Maths','Physics','Islamiyat']
var Marks=[]

var English = +prompt('Enter English Marks')
var Urdu = +prompt('Enter Urdu Marks')
var Maths = +prompt('Enter Maths Marks')
var Physics = +prompt('Enter Physics Marks')
var Islamiyat = +prompt('Enter Islamiyat Marks')

Marks.push(English,Urdu,Maths,Physics,Islamiyat)

for(var i = 0 ; i < Marks.length ; i++)
{
    document.write(subjects[i] + " : " + Marks[i] + "<br />")
}*/

//--2nd way

var Marks=[]

var English = +prompt('Enter English Marks')
var Urdu = +prompt('Enter Urdu Marks')
var Maths = +prompt('Enter Maths Marks')
var Physics = +prompt('Enter Physics Marks')
var Islamiyat = +prompt('Enter Islamiyat Marks')

Marks.push("English",English,"Urdu",Urdu,"Maths",Maths,"Physics",Physics,"Islamiyat",Islamiyat)

for(var i = 0 ; i < Marks.length ; i++)
{
    document.write(Marks[i] + " : " + Marks[++i] + "<br />")
}