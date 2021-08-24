
const API = "https://pokeapi.co/api/v2/pokemon/";
const buttonBuscar = document.getElementById("button");

const rescatarPokemon = () => {
    let nombrePokemon = document.getElementById("nombrePokemon").value;
    fetch(`${API}${nombrePokemon.toLowerCase()}`)
        .then(response => response.json())
        .then(result => renderPokemon(result))
        .catch(error => alert("Pokemon NO ENCONTRADO"))
}

const renderPokemon = (pokemon) => {
    let titulo = document.getElementById("pokemonName");
    let img = document.getElementById("imgPokemon");
    let pokedex = document.getElementById("pokedex");
    let tipo = document.getElementById("tipo");
    let altura = document.getElementById("altura");
    let peso = document.getElementById("peso");
    titulo.innerHTML = `${pokemon.name.toUpperCase()}`;
    img.src = pokemon.sprites.other.dream_world.front_default;
    pokedex.innerHTML = `${pokemon.id}`;
    tipo.innerHTML = `${pokemon.types[0].type.name}`;
    altura.innerHTML = `${pokemon.height/10} m.`;
    peso.innerHTML = `${pokemon.weight/10} kg.`;
}

//Invocar funcion
buttonBuscar.onclick = rescatarPokemon;