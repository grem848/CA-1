var text = document.querySelector("#output");
var button = document.getElementById("button");
var getall = document.getElementById("getAll");
var completeUrl;
var theOutput
var theUrl;
var index;

//Some styling
document.getElementById("output").style.width = "400px";
document.getElementById("output").style.height = "100px";

function assignValue() {
    theUrl = "https://jsonplaceholder.typicode.com/users/" + document.getElementById("idValue").value;
    console.log(theUrl);
    getUser();
}
function getUser() {
    fetch(theUrl)
        .then((res) => res.json())
        .then((data) => {
            var address = data.address;
            var geo = address.geo;
            let output = `
            <p>Name:    ${data.name} <br>
                Iphone:  ${data.phone}<br><br>
                Address
                Street: ${address.street}<br>
                Suit: ${address.suite}<br>
                City: ${address.city}<br>
                Zip: ${address.zipcode}<br>
                Geo (lat,lng): ${geo.lat}, ${geo.lng}<br>
                ---------------------------
            </p>
            `
            document.getElementById("output").innerHTML = output;
        });
}

function getAll() {
    theUrl = "https://jsonplaceholder.typicode.com/users/";
    var output = '<table style="width:100%"><tr><th>Name</th><th>Phone</th></tr>'
    let text;
    for (let index = 1; index <= 10; index++) {
        
        fetch(theUrl + index)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                var address = data.address;
                var geo = address.geo;
                 output = output +  `
                 <tr>
                    <td>${data.name}</td>
                    <td>${data.phone}</td>
                </tr>
                `
        document.getElementById("output").innerHTML = output;
                
            });
    }
    output = output + "</tr></tabel>"

    
}

button.addEventListener("click", assignValue, false);
getall.addEventListener("click", getAll, false);