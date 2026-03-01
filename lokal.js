let divDesna = document.getElementById("right");
let eleP_aircraft = document.createElement("p");
eleP_aircraft.textContent = "1x";
eleP_aircraft.id = "P_aircraft";
let eleIMG_aircraft = document.createElement("img");
eleIMG_aircraft.src = "slike/planecarrier.png";
eleIMG_aircraft.onclick = function(){selected = 1;window.dispatchEvent(selectChange);};
let eleP_battleship = document.createElement("p");
eleP_battleship.textContent = "1x";
eleP_battleship.id = "P_battleship";
let eleIMG_battleship = document.createElement("img");
eleIMG_battleship.src = "slike/battleship.png";
eleIMG_battleship.onclick = function(){selected = 2;window.dispatchEvent(selectChange);};
let eleP_sub = document.createElement("p");
eleP_sub.textContent = "1x";
eleP_sub.id = "P_sub";
let eleIMG_sub = document.createElement("img");
eleIMG_sub.src = "slike/sub.png";
eleIMG_sub.onclick = function(){selected = 3;window.dispatchEvent(selectChange);};
let eleP_cruiser = document.createElement("p");
eleP_cruiser.textContent = "2x";
eleP_cruiser.id = "P_cruiser";
let eleIMG_cruiser = document.createElement("img");
eleIMG_cruiser.src = "slike/cruiser.png";
eleIMG_cruiser.onclick = function(){selected = 4;window.dispatchEvent(selectChange);};
let eleP_destroyer = document.createElement("p");
eleP_destroyer.textContent = "2x";
eleP_destroyer.id = "P_destroyer";
let eleIMG_destroyer = document.createElement("img");
eleIMG_destroyer.src = "slike/destroyer.png";
eleIMG_destroyer.onclick = function(){selected = 5;window.dispatchEvent(selectChange);};

setupPlacement();
let selected = 0;
let ships = 7;
let rotation = 0;
const selectChange = new CustomEvent("selectChanged");
window.addEventListener("selectChanged", function(){
    eleIMG_aircraft.style.background = "transparent";
    eleIMG_battleship.style.background = "transparent";
    eleIMG_sub.style.background = "transparent";
    eleIMG_cruiser.style.background = "transparent";
    eleIMG_destroyer.style.background = "transparent";
    switch(selected){
        case 1:
            eleIMG_aircraft.style.background = "#4CBB17";
            break;
        case 2:
            eleIMG_battleship.style.background = "#4CBB17";
            break;
        case 3:
            eleIMG_sub.style.background = "#4CBB17";
            break;
        case 4:
            eleIMG_cruiser.style.background = "#4CBB17";
            break;
        case 5:
            eleIMG_destroyer.style.background = "#4CBB17";
            break;
}});

let box = document.getElementById("main_c");
box.addEventListener("mouseover", function(event){
    if(selected != 0 && event.target.id != ""){
        event.target.style.background = "#4CBB17";
    }
});
box.addEventListener("mouseout", function(event){
    event.target.style.background = "rgb(0, 119, 255)";
});
let posLadij1 = new Array(10);
for(let i = 0;i < posLadij1.length;i++){
    posLadij1[i] = new Array(10);
    for(let j = 0;j < posLadij1[i].length;j++){
        posLadij1[i][j] = false;
    }
};
window.addEventListener("keydown", (event) => {
    if (event.key === "r"){
        rotation = (rotation == 0)? 1:0;
    }
});
box.addEventListener("click", function(event){
    if(selected != 0 && event.target.id != ""){
        let length = 0;
        switch(selected){
            case 1:
                length = 5;
                break;
            case 2:
                length = 4;
                break;
            case 3:
                length = 3;
                break;
            case 4:
                length = 3;
                break;
            case 5:
                length = 2;
                break;
        };
        let ladja = "";
        switch(selected){
        case 1:
            ladja = "planecarrier";
            break;
        case 2:
            ladja = "battleship";
            break;
        case 3:
            ladja = "sub";
            break;
        case 4:
            ladja = "cruiser";
            break;
        case 5:
            ladja = "destroyer";
            break;
        };
        let id = event.target.id;
        let pos = 0;
        if(rotation == 0 && (pos = parseInt(id.substring(2)))+length <= 11){
            for(let i = 0;i < length;i++){
                let img = document.createElement("img");
                img.src = "slike/"+ladja+`${(i+1)}.png`;
                document.getElementById(id.substring(0, 2) + (pos+i)).appendChild(img);
            }
        }
        if(rotation == 1 && (pos = id.charCodeAt(1)-64)+length <= 11){

        }
    }
});

function setupPlacement(){
    divDesna.appendChild(eleP_aircraft);
    divDesna.appendChild(eleIMG_aircraft);

    divDesna.appendChild(eleP_battleship);
    divDesna.appendChild(eleIMG_battleship);

    divDesna.appendChild(eleP_sub);
    divDesna.appendChild(eleIMG_sub);

    divDesna.appendChild(eleP_cruiser);
    divDesna.appendChild(eleIMG_cruiser);

    divDesna.appendChild(eleP_destroyer);
    divDesna.appendChild(eleIMG_destroyer);
}