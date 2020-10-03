/*let userData  = [{
    name: "maha",
    age: 24,
    city: "aarhus"
},
{
    name: "malek",
    age: 21,
    city: "aarhus"
}];
let jsonFile = JSON.stringify(userData)
console.log(typeof jsonFile);
document.getElementById("par").innerHTML = jsonFile;
let undojson = JSON.parse(jsonFile)
console.log(undojson)
document.getElementById("par2").innerHTML = undojson[0].name;*/


fetch('https://reqres.in/api/users')
  .then(res =>  res.json())
  .then(data => console.log(data))
