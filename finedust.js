const API_KEY = "44586f4a7a67747836324a4f636853";
const finedust = document.querySelector(".js-findust");
let numlist = 1000;



function loadInfo() {
    fetch(`http://openapi.seoul.go.kr:8088/${API_KEY}/json/SwmplInfo/1/${numlist}/`)
    .then(response => {
        return response.json();
    })
    .then(json => {
        const list_total_count = json.SwmplInfo.list_total_count;
        console.log(list_total_count);
        // numlist = list_total_count;
        for (let i = 0; i < numlist; ++i) 
        {
            const li = document.createElement("li");
            const place = json.SwmplInfo.row[i].NM;
            const phone = json.SwmplInfo.row[i].TEL;
            const memberTotalNum = json.SwmplInfo.row[i].MEMBER_TOTAL_NUM;
            li.innerText = `${place}, TEL: ${phone}, 총회원수: ${memberTotalNum}`;
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