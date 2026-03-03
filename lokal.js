let divDesna = document.getElementById("right");
let eleP_planecarrier = document.createElement("p");
eleP_planecarrier.textContent = "1x";
eleP_planecarrier.id = "P_aircraft";
let eleIMG_planecarrier = document.createElement("img");
eleIMG_planecarrier.src = "slike/planecarrier.png";
eleIMG_planecarrier.onclick = function(){selected = 1;window.dispatchEvent(selectChange);};
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
let eleB_1 = document.createElement("button");
eleB_1.id = "button1";
eleB_1.textContent = "Konec postavljanja";
eleB_1.onclick = function(){
    if(player == true){
        if("0x" == eleP_cruiser.textContent && "0x" == eleP_planecarrier.textContent && "0x" == eleP_sub.textContent && "0x" == eleP_destroyer.textContent && eleP_battleship.textContent == "0x"){
            eleP_planecarrier.textContent = "1x";
            eleP_battleship.textContent = "1x";
            eleP_sub.textContent = "1x";
            eleP_cruiser.textContent = "2x";
            eleP_destroyer.textContent = "2x";
            for(let i = 0;i < 10;i++){
                for(let j = 0;j < 10;j++){
                    let temp = document.getElementById("d"+(String.fromCharCode(i+65))+(j+1));
                    if(temp.firstElementChild != null)
                    temp.removeChild(temp.firstElementChild);
                    temp.style.backgroundColor = "#DC143C";
                }
                document.getElementById("d"+(i+1)).style.backgroundColor = "#DC143C";
                document.getElementById("d"+(String.fromCharCode(i+65))).style.backgroundColor = "#DC143C";
            }
            document.getElementById("d0").style.backgroundColor = "#DC143C";
            document.getElementById("main_c").style.backgroundColor = "#DC143C";
            player = !player;
        }
    } else {
        player = !player;
        for(let i = 0;i < 10;i++){
            for(let j = 0;j < 10;j++){
                let temp = document.getElementById("d"+(String.fromCharCode(i+65))+(j+1));
                if(temp.firstElementChild != null)
                temp.removeChild(temp.firstElementChild);
                temp.style.backgroundColor = "rgb(0, 119, 255)";
            }
            document.getElementById("d"+(i+1)).style.backgroundColor = "rgb(0, 119, 255)";
            document.getElementById("d"+(String.fromCharCode(i+65))).style.backgroundColor = "rgb(0, 119, 255)";
        }
        document.getElementById("d0").style.backgroundColor = "rgb(0, 119, 255)";
        document.getElementById("main_c").style.backgroundColor = "rgb(0, 119, 255)";
    
        divDesna.removeChild(eleP_planecarrier);
        divDesna.removeChild(eleIMG_planecarrier);

        divDesna.removeChild(eleP_battleship);
        divDesna.removeChild(eleIMG_battleship);

        divDesna.removeChild(eleP_sub);
        divDesna.removeChild(eleIMG_sub);

        divDesna.removeChild(eleP_cruiser);
        divDesna.removeChild(eleIMG_cruiser);

        divDesna.removeChild(eleP_destroyer);
        divDesna.removeChild(eleIMG_destroyer);

        divDesna.removeChild(eleB_1);

        box.removeEventListener("click");
        box.addEventListener("click", function(event){
            
        });
    }
};


setupPlacement();
let player = true;
let selected = 0;
let ships = 7;
let rotation = 0;
const selectChange = new CustomEvent("selectChanged");
window.addEventListener("selectChanged", function(){
    eleIMG_planecarrier.style.background = "transparent";
    eleIMG_battleship.style.background = "transparent";
    eleIMG_sub.style.background = "transparent";
    eleIMG_cruiser.style.background = "transparent";
    eleIMG_destroyer.style.background = "transparent";
    switch(selected){
        case 1:
            eleIMG_planecarrier.style.background = "#4CBB17";
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
    if(player == true)
        event.target.style.background = "rgb(0, 119, 255)";
    else
        event.target.style.background = "#DC143C";
});
let posLadij1 = new Array(10);
for(let i = 0;i < posLadij1.length;i++){
    posLadij1[i] = new Array(10);
    for(let j = 0;j < posLadij1[i].length;j++){
        posLadij1[i][j] = false;
    }
};
let posLadij2 = new Array(10);
for(let i = 0;i < posLadij2.length;i++){
    posLadij2[i] = new Array(10);
    for(let j = 0;j < posLadij2[i].length;j++){
        posLadij2[i][j] = false;
    }
};
let posHits1 = new Array(10);
for(let i = 0;i < posHits1.length;i++){
    posHits1[i] = new Array(10);
    for(let j = 0;j < posHits1[i].length;j++){
        posHits1[i][j] = false;
    }
};
let posHits2 = new Array(10);
for(let i = 0;i < posHits2.length;i++){
    posHits2[i] = new Array(10);
    for(let j = 0;j < posHits2[i].length;j++){
        posHits2[i][j] = false;
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
        let num = 0;
        switch(selected){
        case 1:
            ladja = "planecarrier";
            num = parseInt(eleP_planecarrier.textContent.substring(0, 1));
            break;
        case 2:
            ladja = "battleship";
            num = parseInt(eleP_battleship.textContent.substring(0, 1));
            break;
        case 3:
            ladja = "sub";
            num = parseInt(eleP_sub.textContent.substring(0, 1));
            break;
        case 4:
            ladja = "cruiser";
            num = parseInt(eleP_cruiser.textContent.substring(0, 1));
            break;
        case 5:
            ladja = "destroyer";
            num = parseInt(eleP_destroyer.textContent.substring(0, 1));
            break;
        };
        let id = event.target.id;
        let pos = 0;
        if(rotation == 0 && (pos = parseInt(id.substring(2)))+length <= 11 && num != 0){
            let taken = false;
            for(let i = 0;i < length;i++){
                if(player == true)
                    if(posLadij1[id.charCodeAt(1)-65][pos+i-1] == true)taken = true;
                else
                    if(posLadij2[id.charCodeAt(1)-65][pos+i-1] == true)taken = true;
            }
            if(taken == false){
                for(let i = 0;i < length;i++){
                    if(player == true)
                        posLadij1[id.charCodeAt(1)-65][pos+i-1] = true;
                    else
                        posLadij2[id.charCodeAt(1)-65][pos+i-1] = true;
                    let img = document.createElement("img");
                    img.src = "slike/"+ladja+`${(i+1)}.png`;
                    document.getElementById(id.substring(0, 2) + (pos+i)).appendChild(img);
                }
                eval("eleP_"+ ladja +".textContent = (num-1) + 'x'");
            }
        }
        if(rotation == 1 && (pos = id.charCodeAt(1, 1)-64)+length <= 11 && num != 0 && !Number.isNaN(parseInt(id.substring(2)))){
            console.log(parseInt(id.substring(2)));
            let taken = false;
            for(let i = 0;i < length;i++){
                if(player == true)
                    if(posLadij1[pos+i-1][parseInt(id.substring(2))-1] == true)taken = true;
                else
                    if(posLadij2[pos+i-1][parseInt(id.substring(2))-1] == true)taken = true;
            }
            if(taken == false){
                for(let i = 0;i < length;i++){
                    if(player == true)
                        posLadij1[pos+i-1][parseInt(id.substring(2))-1] = true;
                    else
                        posLadij2[pos+i-1][parseInt(id.substring(2))-1] = true;
                    let img = document.createElement("img");
                    img.src = "slike/"+ladja+`${(i+1)}.png`;
                    img.style.transform = "rotate(90deg)";
                    document.getElementById(id.substring(0, 1) + String.fromCharCode(pos+i+64) + id.substring(2)).appendChild(img);
                }
                eval("eleP_"+ ladja +".textContent = (num-1) + 'x'");
            }
        }
    }
});

function setupPlacement(){
    divDesna.appendChild(eleP_planecarrier);
    divDesna.appendChild(eleIMG_planecarrier);

    divDesna.appendChild(eleP_battleship);
    divDesna.appendChild(eleIMG_battleship);

    divDesna.appendChild(eleP_sub);
    divDesna.appendChild(eleIMG_sub);

    divDesna.appendChild(eleP_cruiser);
    divDesna.appendChild(eleIMG_cruiser);

    divDesna.appendChild(eleP_destroyer);
    divDesna.appendChild(eleIMG_destroyer);

    divDesna.appendChild(eleB_1);
}