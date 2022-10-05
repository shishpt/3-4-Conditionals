// Setup data

const info = [{"name": "Worthington Semor","birth_date": "11/22/1988","children": 0,"country": "Poland","program": false},
{"name":"Maddalena Heinzler","birth_date":"2/26/2000","children":3,"country":"Slovenia","program":false},
{"name":"Mirilla Saterweyte","birth_date":"11/7/1984","children":2,"country":"Brazil","program":true},
{"name":"Audy Dark","birth_date":"4/18/1989","children":5,"country":"China","program":true},
{"name":"Taffy Grzegorzewski","birth_date":"3/6/1995","children":4,"country":"China","program":false}]

    // Test
const list = JSON.stringify(info);

//Print data to screen
let tData = list.length;
let text = "<ul>";
for (let i =0; i < tData; i++) {
  text += "<li>" + list[i] + "</li>";
}
text += "</ul>";

// Is the first person older than the last person?
// Setup first person
const fName = info[0].name;
const fBDate = new Date(info[0].birth_date);
let tDate = new Date();
const fMSDiff = tDate - fBDate;
const fAge = Math.floor(fMSDiff / (365.25*24*60*60*1000));
document.getElementById("first").innerHTML = fName " is " fAge " years old.";


// Setup third person
const tName = info[2].name;
const tBDate = new Date(info[2].birth_date);
const tMSDiff = tDate - tBDate;
const tAge = Math.floor(tMSDiff / (365.25*24*60*60*1000));

document.getElementById("second").innerHTML = text;

// Who is older?
//if
//  (fAge > tAge) {
//    document.getElementById("older").innerHTML = "1"
//} else if {
//  (fAge == tAge) {
//    document.getElementById("older").innerHTML = "both"
//  }
//else {
//  document.getElementById("older").innerHTML = "3"
//}
//};

// Does the 2nd person have the same amount of kids as the 3rd?
