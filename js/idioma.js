var es = document.getElementById("es");
var en = document.getElementById("en");

es.addEventListener("click",espanol);
en.addEventListener("click",ingles);

function espanol(){
    location.href = "../index.html"
}

function ingles(){
    location.href = "../index_ingles.html"
}