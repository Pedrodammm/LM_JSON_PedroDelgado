//Constante para el elemento principal
const principal=document.querySelector("#principal");

// Ruta del archivo JSON local
const requestURL = "../json/videojuegos.json";


// Cargar el JSON con fetch()
async function cargarJSON() {
  try {
    const response = await fetch(requestURL);
    const data = await response.json();

    generaVideojuegos(data);
  

  } catch (error) {
    console.error("Error cargando el JSON:", error);
  }
}

cargarJSON();

function generaVideojuegos(listaDeVideojuegos) {

    const section=document.createElement("section");

    const h3_nombre=document.createElement("h3");
    const h3_desarrolladora=document.createElement("h3");
    
    const div_plataformas=document.createElement("div");
    div_plataformas.setAttribute("id","plataforma");

    const span_plataforma=document.createElement("span");

    const article=document.createElement("article");
    const div_valoracion=document.createElement("div");
    const div_gamer=document.createElement("div");
    const div_jugabilidad=document.createElement("div");
    const div_diseño=document.createElement("div");
    const div_historia=document.createElement("div");

};