// Setup data

const info = [{"name": "Worthington Semor","birth_date": "11/22/1988","children": 0,"country": "Poland","program": false},
{"name":"Maddalena Heinzler","birth_date":"2/26/2000","children":3,"country":"Slovenia","program":false},
{"name":"Mirilla Saterweyte","birth_date":"11/7/1984","children":2,"country":"Brazil","program":true},
{"name":"Audy Dark","birth_date":"4/18/1989","children":5,"country":"China","program":true},
{"name":"Taffy Grzegorzewski","birth_date":"3/6/1995","children":4,"country":"China","program":false}];

for (var {name: n, birth_date: b, children: c, country: o, program: p} of info) {

  console.log('name: '+ n , 'birth date: '+ b , 'children: '+ c, 'country: '+ o, 'program: '+ p);
};

// Is the first person older than the last person?
//--INCLUDED DOM MANUIPULATION--
// Setup first person
const fName = info[0].name;
const fBDate = new Date(info[0].birth_date);
let tDate = new Date();
const fMSDiff = tDate - fBDate;
const fAge = Math.floor(fMSDiff / (365.25*24*60*60*1000));
document.getElementById("first").innerHTML = fName + " is " + fAge + " years of age.";

// Setup third person
const tName = info[2].name;
const tBDate = new Date(info[2].birth_date);
const tMSDiff = tDate - tBDate;
const tAge = Math.floor(tMSDiff / (365.25*24*60*60*1000));

document.getElementById("second").innerHTML = tName + " is " + tAge + " years of age.";

// Who is older?
if (fAge < tAge) {
//  console.log(fName + " is older")
  document.getElementById("older").innerHTML =fName + " is older than " + tName
}
else {
//  console.log(tName + " is older");
  document.getElementById("older").innerHTML =tName + " is older than " + fName
}

// Does the 2nd person have the same amount of kids as the 3rd?

const sName = info[1].name;
const sKid = info[1].children;
const tKid = info[2].children;

if (sKid === tKid) {
    console.log(sName + " " + tName + " have the same amount of children." )
    document.getElementById("k1").innerHTML = fName + " and " + tName + " have the same amount of children."
}
else  {  
    console.log(tName + " and " + sName + " do not have " + "<br>" + "the same amount of children.")
    document.getElementById("k1").innerHTML = fName + " and " + tName + " do not " + "<br>" + "have the same amount of children."
};

//  1st and 4th can program 
const fProgram = info[0].program;
const foName = info[3].name;
const foProgram = info[3].program;

if (fProgram == true && foProgram == true) {
  console.log("Yay " + fName + " " + foName + " can both program.")
}
else {
  console.log("When it comes to " + fName + " " + "and " + foName + " LMGTFY.")
}

//Nationality of 2nd person 
const sCountry = info[1].country;
if (sCountry == "Iceland") {
  console.log("Hæ")
  document.getElementById("nationality").innerHTML = "Hæ"
}
else if (sCountry == "Spain") {
  console.log("Hola")
  document.getElementById("nationality").innerHTML = "Hola"
}
else if (sCountry == "Korea") {
  console.log("여보세요")
  document.getElementById("nationality").innerHTML = "여보세요"
}
else {
  console.log("Hello")
  document.getElementById("nationality").innerHTML = "hello"
}

//Tertiary operation checking to see if 2nd person has 5 characters in their name

let sLName = (sName.length < 5) ? "Less than 5":"More than 5";
  console.log(sLName);
  document.getElementById("nameLength").innerHTML = sLName
