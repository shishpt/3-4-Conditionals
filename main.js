// Setup data

const info = [{"name": "Worthington Semor","birth_date": "11/22/1988","children": 0,"country": "Poland","program": false},
{"name":"Maddalena Heinzler","birth_date":"2/26/2000","children":3,"country":"Slovenia","program":false},
{"name":"Mirilla Saterweyte","birth_date":"11/7/1984","children":2,"country":"Brazil","program":true},
{"name":"Audy Dark","birth_date":"4/18/1989","children":5,"country":"China","program":true},
{"name":"Taffy Grzegorzewski","birth_date":"3/6/1995","children":4,"country":"China","program":false}]

    // Test
console.log(info);



//Print data to screen
let tData = info.length;
let text = "<ul>";
for (let i =0; i < tData; i++) {
  text += "<li>" + info[i] + "</li>";
}
text += "</ul>";

document.getElementById("first").innerHTML = text;

// Is the first person older than the last person?



// Does the 2nd person have the same amount of kids as the 3rd?


