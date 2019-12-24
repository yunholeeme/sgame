const API_KEY = "44586f4a7a67747836324a4f636853";
const finedust = document.querySelector(".js-findust");
const numlist = 10;



function loadInfo() {
    fetch(`http://openapi.seoul.go.kr:8088/${API_KEY}/json/SwmplInfo/1/${numlist}/`)
    .then(response => {
        return response.json();
    })
    .then(json => {
        for (let i = 0; i < numlist; ++i) 
        {
            const li = document.createElement("li");
            const place = json.SwmplInfo.row[i].NM;
            li.innerText = place;
            console.log(place);
            finedust.appendChild(li);
        }
        // console.log(typeof(json.SwmplInfo.row[0]));
        
    });
}

function init() {
    loadInfo();
}

init();