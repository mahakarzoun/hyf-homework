body = document.querySelector('body')
let userData = [{
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
document.getElementById("par2").innerHTML = undojson[0].name;


fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => {
        let userInfo = data.data;
        console.log(userInfo)
        userInfo.forEach(user => {
            let p = document.createElement('p')
            p.innerText = `${user.first_name}${user.last_name}`
            body.appendChild(p)
        })

    })

